import HistoryIcon from '@mui/icons-material/History';
import {
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Link,
  Stack,
  Typography,
} from '@mui/material';
import { light } from '@mui/material/styles/createPalette';
import { PortableText } from '@portabletext/react';
import { useState } from 'react';
import {
  getCalculatorConfig,
  getCalculatorPageBySlug,
  getCalculatorPagePaths,
} from 'utils/sanity.client';

import ExternalButton from '../../components/ExternalButton';
import portableTextComponents from '../../utils/portableTextComponents';

export default function CalculatorSlugRoute({ page, calculatorConfig }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Container
        maxWidth='md'
        sx={{
          minHeight: '700px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box mb={4}>
          <PortableText
            value={page.content}
            components={portableTextComponents}
          />
        </Box>
        <Container maxWidth='xs' sx={{ mb: 4 }}>
          <Stack gap={2}>
            {page.choices &&
              page.choices.map((choice) => {
                const linkTo = choice.linkTo
                  ? `/calculator/${choice.linkTo.slug.current}`
                  : '#';
                const href = choice.isExternalLink ? choice.url : linkTo;
                return (
                  <Button
                    key={choice._key}
                    variant='contained'
                    color='primary'
                    href={href}
                  >
                    {choice.label}
                  </Button>
                );
              })}
            {page.isQuestion && (
              <Button
                variant='outlined'
                color='primary'
                onClick={() => setOpen(true)}
              >
                {calculatorConfig.unknownAnswer.promptText}
              </Button>
            )}
            {page.isFinalPage && (
              <>
                <ExternalButton
                  variant='contained'
                  color='primary'
                  href={
                    page.isUndetermined
                      ? calculatorConfig.feedback.isUndeterminedUrl
                      : calculatorConfig.feedback.allOtherFeedbackUrl
                  }
                >
                  {calculatorConfig.feedback.linkText}
                </ExternalButton>
                <Link
                  sx={{ textAlign: 'center' }}
                  href={
                    calculatorConfig.checkAnotherConviction.linkTo.slug.current
                  }
                >
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 1,
                    }}
                  >
                    <HistoryIcon />
                    {calculatorConfig.checkAnotherConviction.linkText}
                  </Box>
                </Link>
              </>
            )}
          </Stack>
        </Container>
        {page.isFinalPage && (
          <Box maxWidth='60ch' textAlign='center'>
            <Typography variant='caption' sx={{ fontWeight: 'light' }}>
              {calculatorConfig.legalDisclaimer}
            </Typography>
          </Box>
        )}
      </Container>
      {/* not sure modal */}
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>
          {calculatorConfig.unknownAnswer.header}
        </DialogTitle>
        <DialogContent>
          <PortableText
            value={calculatorConfig.unknownAnswer.content}
            components={portableTextComponents}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>
            {calculatorConfig.unknownAnswer.closeText}
          </Button>
        </DialogActions>
      </Dialog>
      <Box 
        sx={{ 
          textAlign: 'center', 
          mb: '30px', 
          color: 'black', 
          fontWeight: 500, 
          fontSize: '16px',
        }}
        >
        <Link 
        sx = {{
          color: 'text.primary',
            '&:hover': {
              color: 'primary.main',
            }
        }}
          underline='hover' 
          target='_blank' 
          rel='noreferrer' 
          href='https://docs.google.com/forms/d/e/1FAIpQLSf8JvZfgYPBV36Ow4Qn_KyxkdmzI3szvZej-L1MbFO9vSGKWQ/viewform'
        >
          Report an error
        </Link>
      </Box>
    </>
  );
}

export async function getStaticProps(ctx) {
  const { params = {} } = ctx;

  const [page, calculatorConfig] = await Promise.all([
    getCalculatorPageBySlug({ slug: params.slug }),
    getCalculatorConfig(),
  ]);

  if (!page) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      page,
      calculatorConfig,
    },
  };
}

export async function getStaticPaths() {
  const paths = await getCalculatorPagePaths();

  return {
    paths: paths?.map((slug) => `/calculator/${slug}`) || [],
    fallback: false,
  };
}

import { Button, ButtonGroup, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Head from "next/head";
import Script from "next/script";

import AccordionBuilder from "../components/AccordionBuilder";
import externalLinks from "../components/externalLinks";
import { GridItemCard } from "../components/GridItem";
import HeroBanner from "../components/HeroBanner";
import { PaperSection } from "../components/PaperSection";
import ResearchBanner from "../components/ResearchBanner";
import SectionContainer from "../components/SectionContainer";
import jsonContent from "../content/home.json";

export default function Home({ content }: { content: typeof jsonContent }) {
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down("sm"));

  externalLinks();

  return (
    <>
      <div>
        {/* <!-- Google tag (gtag.js) --> */}
        {/* https://nextjs.org/docs/messages/next-script-for-ga */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-QNGJLGP9B3"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-QNGJLGP9B3');
        `}
        </Script>
        {/* <!-- End Google Analytics --> */}
      </div>
      <Head>
        <title>Clearviction</title>
        <meta name="description" content="Helping clear convictions" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HeroBanner {...content.heroBanner} />
        <SectionContainer>
          <ButtonGroup
            variant="text"
            fullWidth
            orientation={matchesXS ? "vertical" : "horizontal"}
          >
            {content.sectionNavs.map((nav) => (
              <Button key={nav.href} href={nav.href}>
                {nav.label}
              </Button>
            ))}
          </ButtonGroup>
        </SectionContainer>
        {content.gridSections.map((section) => (
          <SectionContainer key={section.id} id={section.id}>
            <PaperSection
              title={section.title}
              ctaLink={section.ctaLink}
              ctaText={section.ctaText}
            >
              <Grid container spacing={4}>
                {section.items.map((item) => (
                  <GridItemCard
                    key={item.id}
                    xs={12}
                    md={section.items.length % 2 ? 4 : 6}
                    title={item.title}
                    body={item.body}
                    imgsrc={item.imgsrc}
                  />
                ))}
              </Grid>
            </PaperSection>
          </SectionContainer>
        ))}
        <SectionContainer id="faq">
          <PaperSection title="FAQ">
            {content.faqs.map((faq) => (
              <AccordionBuilder key={faq.id} {...faq} />
            ))}
          </PaperSection>
        </SectionContainer>
        <ResearchBanner />
      </main>
    </>
  );
}

export async function getStaticProps() {
  if (!jsonContent) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      content: jsonContent,
    },
  };
}

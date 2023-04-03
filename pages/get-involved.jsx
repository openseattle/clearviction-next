import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";

import { Fact } from "../components/Fact";
import HeroBanner from "../components/HeroBanner";
import { PaperSection } from "../components/PaperSection";
import SectionContainer from "../components/SectionContainer";
import content from "../content/get-involved";

export default function GetInvolvedPage() {
  return (
    <>
      <Box sx={{ bgcolor: "#2f3554", pb: "64px" }}>
        <HeroBanner
          heading="Get Involved"
          subheading="There are many ways to participate with the Clearviction team, and we appreciate all of them!"
          overrideStyles={{
            pb: 0,
            pt: 8,
            color: "primary.contrastText",
          }}
        />

        <Grid
          container
          spacing={2}
          sx={{ maxWidth: "1200px", m: "auto", mt: -8 }}
        >
          {content.waysToParticipate.map((card) => (
            <Grid item xs={12} sm={12} md={4} key={card.id}>
              <Box display="flex" justifyContent="center" key={card.id}>
                <Card
                  sx={{
                    p: 1,
                    pb: 0,
                    maxWidth: 275,
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <CardContent>
                    <Typography gutterBottom>{card.body}</Typography>
                  </CardContent>
                  <CardActions sx={{ width: "100%" }}>
                    <Button
                      href={card.href}
                      color="primary"
                      variant="contained"
                      fullWidth
                    >
                      {card.title}
                    </Button>
                  </CardActions>
                  <CardMedia
                    component="img"
                    height="180"
                    sx={{ objectFit: "contain" }}
                    image={card.imgsrc}
                    title={card.title}
                  />
                </Card>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Volunteer />
      <Partner />
    </>
  );
}

function Volunteer() {
  return (
    <>
      <SectionContainer id="volunteer" maxWidth="md">
        <Typography sx={{ my: 8 }} variant="h2">
          {content.volunteerPage.header}
        </Typography>
        {content.volunteerPage.body.map((text, idx) => (
          <Typography
            key={`volunteerText-${idx}`}
            variant="body1"
            sx={{ my: 3 }}
          >
            {text}
          </Typography>
        ))}
        <Grid container>
          {content.volunteerPage.facts.map((fact) => (
            <Grid key={fact.id} item xs={12} sm={4} md={4} lg={4}>
              <Fact text={fact.text} icon={fact.icon} />
            </Grid>
          ))}
        </Grid>
      </SectionContainer>
      <SectionContainer maxWidth="md">
        <Typography variant="h2">
          {content.volunteerPage.openRole.title}
        </Typography>

        <iframe
          id={content.volunteerPage.openRole.id}
          src={content.volunteerPage.openRole.src}
          width="100%"
          height="548"
          style={{
            background: "transparent",
            border: "1px solid #ccc",
            borderRadius: "6px",
          }}
        />
      </SectionContainer>
    </>
  );
}

function Partner() {
  return (
    <>
      <SectionContainer id="partner-with-us" maxWidth="md">
        <Typography sx={{ my: 8 }} variant="h2">
          {content.partnerPage.header[0]}
        </Typography>
        <Typography variant="body1">{content.partnerPage.text[0]}</Typography>
        <Container sx={{ display: "flex", justifyContent: "center", py: 4 }}>
          <Button
            variant="contained"
            color="primary"
            sx={{ px: 8 }}
            href={content.partnerPage.href}
          >
            Contact Us
          </Button>
        </Container>
      </SectionContainer>
      <SectionContainer maxWidth="md">
        <PaperSection title="" sx={{ margin: "auto", p: 4 }}>
          <Grid container>
            <Grid item xs={12} sm={6}>
              <Box display="flex" justifyContent="center" sx={{ px: 2 }}>
                <Box component="img" src={content.partnerPage.imgsrc} />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography sx={{ my: 8, scrollMarginTop: "4em" }} variant="h3">
                {content.partnerPage.header[1]}
              </Typography>
              <Typography sx={{ my: 3 }} variant="body1">
                {content.partnerPage.text[1]}
              </Typography>
              <Typography sx={{ my: 3 }} variant="body1">
                {content.partnerPage.text[2]}
              </Typography>
            </Grid>
          </Grid>
        </PaperSection>
      </SectionContainer>
    </>
  );
}

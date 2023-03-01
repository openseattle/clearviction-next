import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";

import { Fact } from "../components/Fact";
import HeroBanner from "../components/HeroBanner";
import content from "../content/get-involved";

export default function GetInvolvedPage() {
  return (
    <>
      <Box sx={{ color: "#ffffff", pb: 16, pt: 4, px: 3, bgcolor: "#2f3554" }}>
        <HeroBanner
          heading="Get Involved"
          subheading="There are many ways to participate with the Clearviction team, and we appreciate all of them!"
        />

        <Grid container spacing={2} sx={{ maxWidth: "1200px", m: "auto" }}>
          {content.waysToParticipate.map((card) => (
            <Grid item xs={12} sm={12} md={4} key={card.id}>
              <Box display="flex" justifyContent="center" key={card.id}>
                <Card
                  sx={{
                    p: 1,
                    pb: 0,
                    maxWidth: 300,
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
      <Container maxWidth="md">
        <Divider sx={{ my: 8, scrollMarginTop: "4em", maxWidth: "md" }} />
      </Container>
      <Partner />
      <Container maxWidth="md">
        <Divider sx={{ my: 8, scrollMarginTop: "4em", maxWidth: "md" }} />
      </Container>
    </>
  );
}

function Volunteer() {
  return (
    <>
      <Container
        component="section"
        id="volunteer"
        maxWidth="md"
        sx={{ my: 8, scrollMarginTop: "4em" }}
      >
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
      </Container>
      <Container maxWidth="md" sx={{ my: 8, scrollMarginTop: "4em" }}>
        <Typography sx={{ my: 8 }} variant="h2">
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
      </Container>
    </>
  );
}

function Partner() {
  return (
    <>
      <Container
        id="partner-with-us"
        sx={{
          my: 8,
          scrollMarginTop: "4em",
        }}
        maxWidth="md"
      >
        <Typography sx={{ my: 8 }} variant="h2">
          {content.partnerPage.header[0]}
        </Typography>
        <Typography sx={{ my: 3, padding: 2 }} variant="body1">
          {content.partnerPage.text[0]}
        </Typography>
        <Container sx={{ display: "flex", justifyContent: "center", my: 8 }}>
          <Button
            sx={{
              margin: "30px auto 50px",
              minWidth: "240px",
              boxShadow: "rgb(0 0 0 / 20%) 0px 2px 4px;",
            }}
            variant="contained"
            href={content.partnerPage.href}
          >
            Contact Us
          </Button>
        </Container>
      </Container>
      <Container>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <Box display="flex" justifyContent="center">
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
      </Container>
    </>
  );
}
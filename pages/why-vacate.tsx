import { Button, ButtonGroup, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import AccordionBuilder from "../components/AccordionBuilder";
import HeroBanner from "../components/HeroBanner";
import { HomeCardItem, HomeCardSection } from "../components/HomeCardSection";
import SectionContainer from "../components/SectionContainer";
import content from "../content/why-vacate";

export default function WhyVacatePage() {
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <HeroBanner
        heading={content.heroBanner.heading}
        subheading={content.heroBanner.subheading}
        imgsrc={content.heroBanner.imgsrc}
      />
      <SectionContainer>
        <ButtonGroup
          variant="text"
          fullWidth
          orientation={matchesXS ? "vertical" : "horizontal"}
        >
          {content.buttons.map((button: any) => {
            return (
              <Button key={button.name} href={button.href}>
                {button.name}
              </Button>
            );
          })}
        </ButtonGroup>
        {content.cards.map((card: any) => {
          return (
            <SectionContainer id={card.sectionId} key={card.sectionId}>
              <HomeCardSection
                title={card.title}
                subtitle={card.subtitle}
                sx={{ textAlign: "left", p: 4 }}
              >
                <Grid container spacing={2}>
                  {card.cardItems.map((cardItem: any) => {
                    return (
                      <HomeCardItem
                        key={cardItem.title}
                        xs={12}
                        sm={6}
                        title={cardItem.title}
                        body={cardItem.body}
                        imgsrc={cardItem.imgRef}
                      />
                    );
                  })}
                </Grid>
                <Typography variant={"h3"}>Resources</Typography>
                <Grid container spacing={2}>
                  {card.accordianItems.map((accordianItem: any) => (
                    <Grid
                      key={accordianItem.id}
                      spacing={2}
                      item
                      xs={12}
                      sm={6}
                      md={4}
                    >
                      <AccordionBuilder
                        id={accordianItem.id}
                        summary={accordianItem.summary}
                        details={accordianItem.details}
                        sx={{ my: 1, mx: 4, py: 2 }}
                      />
                    </Grid>
                  ))}
                </Grid>
              </HomeCardSection>
            </SectionContainer>
          );
        })}
      </SectionContainer>
    </>
  );
}

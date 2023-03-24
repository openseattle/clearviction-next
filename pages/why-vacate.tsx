import { Button, ButtonGroup, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import AccordionBuilder from "../components/AccordionBuilder";
import externalLinks from "../components/externalLinks";
import { GridItemCard } from "../components/GridItem";
import HeroBanner from "../components/HeroBanner";
import { PaperSection } from "../components/PaperSection";
import SectionContainer from "../components/SectionContainer";
import content from "../content/why-vacate";

export default function WhyVacatePage() {
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down("sm"));

  externalLinks();

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
              <PaperSection
                title={card.title}
                subtitle={card.subtitle}
                sx={{ textAlign: "left", p: 4 }}
              >
                <Grid container spacing={4}>
                  {card.cardItems.map((cardItem: any) => {
                    return (
                      <GridItemCard
                        key={cardItem.title}
                        xs={12}
                        md={card.cardItems.length % 2 ? 4 : 6}
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
              </PaperSection>
            </SectionContainer>
          );
        })}
      </SectionContainer>
    </>
  );
}

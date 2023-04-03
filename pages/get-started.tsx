import { Box, Button, ButtonGroup, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import MuiMarkdown from "mui-markdown";

import AccordionBuilder from "../components/AccordionBuilder";
import externalLinks from "../components/externalLinks";
import { FactCard } from "../components/FactCard";
import { GetStartedStep } from "../components/GetStartedStep";
import HeroBanner from "../components/HeroBanner";
import SectionContainer from "../components/SectionContainer";
import content from "../content/get-started";

export default function GetStartedPage() {
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down("sm"));

  externalLinks();

  return (
    <>
      <HeroBanner
        heading="Get Started"
        subheading="Vacate your conviction in the state of Washington by following these 4 steps!"
        imgsrc="/illustrations/chart.svg"
        ctaLink="#read-more"
        ctaText="Read More"
      />
      <SectionContainer>
        <ButtonGroup
          variant="text"
          fullWidth
          orientation={matchesXS ? "vertical" : "horizontal"}
        >
          <Button href="#step-1"> Step 1: Documents</Button>
          <Button href="#step-2"> Step 2: Eligibility</Button>
          <Button href="#step-3"> Step 3: Filing</Button>
          <Button href="#step-4"> Step 4: Court Hearing</Button>
        </ButtonGroup>
      </SectionContainer>
      <SectionContainer id="step-1">
        <GetStartedStep
          title="Step 1: Documents"
          bodyText={`First let’s gather the documents you will need to determine your eligibility. Before using the calculator, gather all the documentation you have regarding your conviction.`}
        >
          <SectionContainer>
            <MuiMarkdown>{`**You\'ll need to know:**`}</MuiMarkdown>
            <Grid container spacing={8} sx={{ my: 1 }}>
              {content.needToKnowFacts.map((fact) => (
                <FactCard key={fact.id} xs={12} md={4} body={fact.details}>
                  {fact.icon}
                </FactCard>
              ))}
            </Grid>
          </SectionContainer>
          <SectionContainer>
            <MuiMarkdown>{`###CHRI (Recommended)`}</MuiMarkdown>
            <MuiMarkdown>
              {`A copy of your **Criminal History Record Information (CHRI)** would be very helpful in the vacation process and might be required in some cases.`}
            </MuiMarkdown>
            <Grid container spacing={2} sx={{ my: 3 }}>
              {content.CHRIMethods.map((method) => (
                <Grid key={method.id} item xs={12} md={6}>
                  <AccordionBuilder
                    id={method.id}
                    summary={method.summary}
                    details={method.details}
                    sx={{ py: 2, height: "6em" }}
                  />
                </Grid>
              ))}
            </Grid>
          </SectionContainer>
        </GetStartedStep>
      </SectionContainer>
      <SectionContainer id="step-2">
        <GetStartedStep
          title="Step 2: Eligibility"
          bodyText={`Once you have your records and forms gathered, use our eligibilty calculator to determine whether you are eligible to vacate your misdemeanor conviction. It is expected to take 10-30 minutes.`}
          ctaText="Access Calculator"
          ctaLink="/calculator/head-initial-1-cont"
        >
          <SectionContainer>
            <Grid container sx={{ alignItems: "center" }}>
              <Box
                component="img"
                src="/quickstart.svg"
                sx={{ padding: "1em", width: "100%" }}
              />
            </Grid>
          </SectionContainer>
        </GetStartedStep>
      </SectionContainer>
      <SectionContainer id="step-3">
        <GetStartedStep
          title="Step 3: File with Court"
          bodyText={`Next, submit a request to have your conviction vacated (refer to [court directory](https://www.courts.wa.gov/court_dir/?fa=court_dir.county)). Please note that the request to vacate is up to the discretion of the judge and may be denied for a variety of reasons.\n\n<br/>`}
        >
          <MuiMarkdown>{`**Common reasons requests to vacate may be denied:**`}</MuiMarkdown>
          <Grid container spacing={8} sx={{ my: 1 }}>
            {content.rejectionReasons.map((fact) => (
              <FactCard key={fact.id} xs={12} md={4} body={fact.details} />
            ))}
          </Grid>
        </GetStartedStep>
      </SectionContainer>
      <SectionContainer id="step-4">
        <GetStartedStep
          title="Step 4: Court Hearing"
          bodyText={`Last but not least, schedule a hearing with a judge! Below are resources for financial & legal aid.`}
        >
          <SectionContainer>
            <MuiMarkdown>{`###Legal Aid`}</MuiMarkdown>
            <MuiMarkdown>
              {`Many pro bono services are only available after being referred by CLEAR, a toll-free legal hotline:\n\n* Outside of King County: call 1-888-201-1014 (weekdays 9.15am - 12.15pm)\n\n* In King County: call 2-1-1 (weekdays 8am - 6pm) \n\n* You can also apply online at [CLEAR*Online](https://nwjustice.org/apply-online)`}
            </MuiMarkdown>
            <Grid container spacing={2} sx={{ my: 1 }}>
              {content.legalAidForms.map((legalForm) => (
                <Grid key={legalForm.id} item xs={12} sm={6} md={4}>
                  <AccordionBuilder
                    id={legalForm.id}
                    summary={legalForm.summary}
                    details={legalForm.details}
                    sx={{ py: 2, height: "6em" }}
                  />
                </Grid>
              ))}
            </Grid>
          </SectionContainer>
          <SectionContainer>
            <MuiMarkdown>{`###Financial Aid`}</MuiMarkdown>
            <Grid container spacing={2} sx={{ my: 1 }}>
              {content.financialAidForms.map((financialForm) => (
                <Grid key={financialForm.id} item xs={12} sm={6} md={4}>
                  <AccordionBuilder
                    id={financialForm.id}
                    summary={financialForm.summary}
                    details={financialForm.details}
                    sx={{ py: 2, height: "6em" }}
                  />
                </Grid>
              ))}
            </Grid>
          </SectionContainer>
          <SectionContainer>
            <MuiMarkdown>{`###Eligibility-Related Forms`}</MuiMarkdown>
            <Grid container spacing={2} sx={{ my: 1 }}>
              {content.eligibilityForms.map((eligibilityForm) => (
                <Grid key={eligibilityForm.id} item xs={12} sm={6} md={4}>
                  <AccordionBuilder
                    id={eligibilityForm.id}
                    summary={eligibilityForm.summary}
                    details={eligibilityForm.details}
                    sx={{ py: 2, height: "6em" }}
                  />
                </Grid>
              ))}
            </Grid>
          </SectionContainer>
        </GetStartedStep>
      </SectionContainer>
    </>
  );
}

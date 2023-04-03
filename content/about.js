import {
  HourglassEmpty,
  LocalAtmOutlined,
  PanToolOutlined,
} from "@mui/icons-material";

const gridIconStyles = {
  color: "#FFD200",
  fontSize: "3em",
};

const aboutContent = {
  hero: {
    header: "About Us",
    body: "We are a civic-tech open-source project working to make the conviction vacation process in Washington easier and more straightforward, starting with an eligibility calculator.",
    imgsrc: "illustrations/map.svg",
  },
  ourStory: {
    header: "Our Story",
    body: "Those with a criminal record in Washington face significant barriers to daily life after completing their prison terms",
  },
  body: [
    "[Washington State's New Hope Act](https://app.leg.wa.gov/billsummary?BillNumber=2890&Year=2017) makes it easier for people with past criminal records to have their convictions vacated. Even then, the process of vacating a conviction is very convoluted, making it difficult for most people to navigate:",
  ],
  facts: [
    {
      id: "fact0",
      icon: <HourglassEmpty sx={gridIconStyles} />,
      text: "It has a number of steps that require time and know-how, increasing the barrier of entry for applicants",
    },
    {
      id: "fact1",
      icon: <LocalAtmOutlined sx={gridIconStyles} />,
      text: "While hiring an attorney can help simplify the process, it's unaffordable for most",
    },
    {
      id: "fact2",
      icon: <PanToolOutlined sx={gridIconStyles} />,
      text: "Volunteer services are available, but they are often inaccessible and don't cover all steps",
    },
  ],
  ourMission: {
    header:
      "Our mission is to benefit individuals with criminal convictions in Washington and decrease life-long collateral consequences.",
    body: "To support this mission, we first focused on creating a [Conviction Eligibility Calculator](https://www.clearviction.org/calculator/) to help people determine if they are eligible to vacate their conviction.",
    imgsrc: "/illustrations/checklist1.svg",
  },
  ourTeam: {
    title: "Our Team",
    id: "our-team-embed-airtable",
    src: "https://airtable.com/embed/shrUcTsNW8KLw3hyp",
  },
};

export default aboutContent;

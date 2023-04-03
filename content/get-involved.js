import { Alarm, CloudDone, Sync } from "@mui/icons-material";

const getInvolvedContent = {
  waysToParticipate: [
    {
      id: "w2p_1",
      title: "volunteer",
      body: "Join our dedicated volunteer team and help us bring the resources to those who need them.",
      imgsrc: "../illustrations/diversity-2.svg",
      href: "#volunteer",
    },
    {
      id: "w2p_2",
      title: "donate",
      body: "Your gift makes a difference. Make it possible to continue helping our community.",
      imgsrc: "../illustrations/money-jar.svg",
      href: "/donate",
    },
    {
      id: "w2p_3",
      title: "Partner with us",
      body: "Create change by sharing our project with others and reaching out to your peers.",
      imgsrc: "../illustrations/horn.svg",
      href: "#partner-with-us",
    },
  ],
  volunteerPage: {
    header: "Help us break down barriers by joining the team.",
    body: [
      "Conviction vacation makes it easier for formerly incarcerated individuals to access housing and employment, two things that are crucial for reducing the odds of re-incarceration.",
      "By volunteering, you will help us reduce barriers and streamline the process of vacating eligible convictions in Washington state to make it easier for people to move forward.",
      "You'll be a perfect fit if you:",
    ],
    facts: [
      {
        id: "fact0",
        icon: <Alarm sx={{ fontSize: "3em", color: "rgb(255, 210, 0)" }} />,
        text: "Can commit to 4 hours a week for at least 6 months",
      },
      {
        id: "fact1",
        icon: <Sync sx={{ fontSize: "3em", color: "rgb(255, 210, 0)" }} />,
        text: "Want to share your expertise to help us make a better product",
      },
      {
        id: "fact2",
        icon: <CloudDone sx={{ fontSize: "3em", color: "rgb(255, 210, 0)" }} />,
        text: "Are a self-motivated individual comfortable with remote work",
      },
    ],
    openRole: {
      title: "Open roles",
      id: "roles-airtable-embed",
      src: "https://airtable.com/embed/shrw329SZsANpPuom",
    },
  },
  partnerPage: {
    header: [
      "Help us bring a message of hope into your community.",
      "Share the calculator with your community",
    ],
    text: [
      "We appreciate finding new ways to work with organizations and people who share our goals and want to help us raise awareness. Whether it be guidance or support, we'd love to hear more.",
      "Do you know someone who could benefit from our calculator? Want to help us spread the word around your community?",
      "Share our mission on your social media or send it to someone you know needs it.",
    ],
    href: "/contact",
    imgsrc: "../illustrations/pr.svg",
  },
};

export default getInvolvedContent;

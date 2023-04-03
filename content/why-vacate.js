const whyVacateContent = {
  heroBanner: {
    heading: "Why Vacate",
    subheading: `The process of vacating a conviction in Washington is convoluted, but it’s needed to avoid barriers in employment, housing and education. \n\nFind out why it’s important to vacate your conviction and get resources to help you while you work your way to it.`,
    imgsrc: "/illustrations/team-building.svg",
  },
  buttons: [
    {
      name: "Employment",
      href: "#employment",
    },
    {
      name: "Housing",
      href: "#housing",
    },
    {
      name: "Education",
      href: "#education",
    },
  ],
  cards: [
    {
      title: "Employment",
      sectionId: "employment",
      subtitle:
        "Simply having a conviction does not prevent you from having a job, however, it can be more difficult depending on the type of job and the employer. It is important to not lose hope while facing challenges such as:",
      cardItems: [
        {
          title: "Long periods of unemployment",
          body: "Getting back into society may take longer with a conviction on record.",
          imgRef: "/illustrations/time.svg",
        },
        {
          title: "Rejected applications",
          body: "This is a common circumstance for people who have previously been convicted.",
          imgRef: "/illustrations/sending-emails.svg",
        },
        {
          title: "Lack of experience",
          body: "Getting a job in a new field is complicated by lack of access to educational opportunities.",
          imgRef: "/illustrations/question.svg",
        },
      ],
      accordianItems: [
        {
          id: "1",
          summary: "Job Boards",
          details: `[Careeronestop](https://www.careeronestop.org/) 
                    \n[WorkSourceWA](https://www.worksourcewa.com/) 
                    \n[Goodwill](https://www.goodwill.org/jobs-training/find-a-job/) 
                    \n[People for People](https://mypfp.org/about-us/careers/)`,
        },
        {
          id: "2",
          summary: "Professional Training",
          details: `[People for People](https://mypfp.org/about-us/careers/) 
                    \n[Pioneer Human Services](https://pioneerhumanservices.org/job-skills) 
                    \n[Evergreen Goodwill](https://evergreengoodwill.org/job-training-and-education)`,
        },
      ],
    },
    {
      title: "Housing",
      sectionId: "housing",
      subtitle:
        "There are many different barriers that can prevent people with convictions from fair access to housing. Each different type of housing comes with its own set of obstacles that you should take into consideration when looking for housing:",
      cardItems: [
        {
          title: "Public Housing Authorities",
          body: "Getting back into society may take longer with a conviction on record.",
          imgRef: "/illustrations/city-buildings.svg",
          body: `* Income capped \n* Can’t be a registered offender \n* PHAs have discretion on who they decide to house`,
        },
        {
          title: "Private Housing",
          body: `* Landlords have full discretion, and often deny people with criminal records \n* Management companies usually have extensive background checks`,
          imgRef: "/illustrations/dream.svg",
        },
        {
          title: "Supportive Housing",
          body: `* Funded by HUD homelessness programs \n* Must have been residing in emergency shelter/housing in the previous 90 days`,
          imgRef: "/illustrations/diversity-1.svg",
        },
        {
          title: "Transitional Housing",
          body: `* Might require you to have substance abuse, mental health or physical issues \n* Some require you to attend special meetings or work`,
          imgRef: "/illustrations/process-building.svg",
        },
      ],
      accordianItems: [
        {
          id: "courtform1",
          summary: "Shelter Listings",
          details: `[Washington Shelter List](https://www.shelterlist.com/state/washington) 
          \n[Catholic Community Services and Catholic Housing Services of Western Washington](https://ccsww.org/) 
          \n[Pioneer Human Services](https://pioneerhumanservices.org/housing)
          \n[Social Serve](https://www.myhousingsearch.com/CallCenter.html)`,
        },
        {
          id: "courtform2",
          summary: "Housing Advisory",
          details: `[Compass Housing Alliance](https://www.compasshousingalliance.org/) 
          \n[The STAR Project](https://www.thestarproject.us/)`,
        },
      ],
    },
    {
      title: "Education",
      sectionId: "education",
      subtitle:
        "With a conviction on your record, you might face some barriers when it comes to getting opportunities where a background check is performed. Here are the main educational challenges faced by those with convictions:",
      cardItems: [
        {
          title: "Occupational Licenses",
          body: "Some states’ laws contain an automatic disqualification prohibiting a person with a felony conviction from obtaining an occupational license, regardless of the offense.",
          imgRef: "/illustrations/career.svg",
        },
        {
          title: "College Acceptance",
          body: "Colleges run background checks on applicants. Whether you will be accepted depends on the kind of check they do and the type and time of crime.",
          imgRef: "/illustrations/graduation.svg",
        },
      ],
      accordianItems: [
        {
          id: "courtform1",
          summary: "Federal Financial Student Aid",
          details: `[FAQ on Incarcerated Individuals and Eligibility for Federal Student Aid](https://studentaid.gov/understand-aid/eligibility/requirements/criminal-convictions) 
          \n[Free Application for Federal Student Aid (FAFSA)](http://www.fafsa.gov/) 
          \n[Federal Pell Grants](https://studentaid.gov/understand-aid/types/grants/pell)
          \n[Federal Work-Study Programs](https://studentaid.gov/understand-aid/types/work-study)`,
        },
        {
          id: "courtform2",
          summary: "Post-incarceration educational programs",
          details: `[Freedom Education Project](http://www.fepps.org/) 
          \n[People for People](https://ccsww.org/) 
          \n[Pioneer Human Services](https://pioneerhumanservices.org/housing)
          \n[Post-Prison Education Program](http://postprisonedu.org/)
          \n[The STAR Project](http://thestarproject.us/)`,
        },
        {
          id: "courtform3",
          summary: "Other Educational assistance",
          details: `[Adams State University Prison College Program](http://www.adams.edu/extended_studies/undergrad/prisoncollegeprogram.php)`,
        },
      ],
    },
  ],
};

export default whyVacateContent;

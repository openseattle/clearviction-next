import { AccountBalance, DateRange, History } from "@mui/icons-material";

const getStartedContent = {
  needToKnowFacts: [
    {
      id: "n2k1",
      icon: <DateRange style={{ fontSize: 54 }} color="secondary" />,
      details: "The date & violation of your misdemeanor conviction",
    },
    {
      id: "n2k2",
      icon: <History style={{ fontSize: 54 }} color="secondary" />,
      details: "If and when you completed the terms of your sentence",
    },
    {
      id: "n2k3",
      icon: <AccountBalance style={{ fontSize: 54 }} color="secondary" />,
      details: "Pending or new criminal charges & any court orders against you",
    },
  ],
  CHRIMethods: [
    {
      id: "chri1",
      summary: "“Unofficial” Copy Through W.A.T.C.H",
      details:
        "**Price: $11**\n\n**Estimated Turnaround: Instant**\n\nGet an [“unofficial” copy through WATCH](https://watch.wsp.wa.gov/WATCH/Home/Notice?ReturnPage=%2FHome%2FIndex) for a $11.00 fee. This report is not always accurate so you should ask the prosecutor.",
    },
    {
      id: "chri2",
      summary: "Official Record Review (Fingerprint Card)",
      details:
        "**Price: $30 - $70**\n\n**Estimated Turnaround: 2 weeks**\n\nIf the WATCH printout is not good enough, go to your local police or sheriff’s office for an official “record review/challenge” fingerprint card.\n\nNext, write WSP a letter asking them to send an official copy of your complete CHRI. Include the fingerprint card and a money order. A copy of your CHRI will be returned to the address on the fingerprint card. Send everything to:\n\nWashington State Patrol Identification and Background Section\n\nPO Box 42633\n\nOlympia WA 98504-2633",
    },
  ],
  rejectionReasons: [
    {
      id: "rejection1",
      details:
        "The court does not believe that vacating your conviction will be in the interest of society",
    },
    {
      id: "rejection2",
      details:
        "There are inaccuracies in the court records and/or the application",
    },
    {
      id: "rejection3",
      details:
        "There is a record of violated probation, unpaid fines, or other offenses",
    },
  ],
  legalAidForms: [
    {
      id: "legalform1",
      summary: "Assistance for Pro Se Patrons",
      details:
        "[Public Law Library of King County Legal Clinics (KCLL)](https://kcll.org/contact-us/)\n\n[Walk-In Clinic](https://www.kcba.org/For-Lawyers/Pro-Bono-Services/YLD-Law-Library-Walk-in-Clinic)\n\n[King County Bar](http://www.kcba.org/For-the-Public/Free-Legal-Assistance/Neighborhood-Legal-Clinics)\n\n[Open Door Legal Services](https://www.ugm.org/what-we-do/stabilization/legal-services/#)",
    },
    {
      id: "legalform2",
      summary: "Assistance For Adults",
      details:
        "[Center for Justice](https://serve.gonzaga.edu/agency/detail/?agency_id=101214)\n\n[Clark County Volunteer Lawyers Program (CCVLP)](https://ccvlp.org/)\n\n[Cowlitz-Wahkiakum Legal Aid](http://cwlap.org/)\n\n[Northwest Justice Project](https://nwjustice.org/get-legal-help)\n\n[The Records Project](https://www.kcba.org/For-the-Public/Free-Legal-Assistance/The-Records-Project)\n\n",
    },
    {
      id: "legalform3",
      summary: "Assistance For Children",
      details:
        "[TeamChild](https://teamchild.org/record-sealing/)\n\n[Center for Children & Youth Justice (CCYJ)](https://ccyj.org/our-work/empowering-foster-homeless-youth/)",
    },
  ],
  financialAidForms: [
    {
      id: "financialform1",
      summary: "Legal Financial Obligations (LFOs)",
      details:
        "You may be eligible for financial assistance of fees, fines, or restitution for a misdemeanor or felony:\n\n * [CLEAR hotline](https://nwjustice.org/clear-hotline) can refer you to legal organizations\n\n* [Re-Entry Clinic](https://columbialegal.org/wp-content/uploads/2019/10/CLS-Re-Entry-Clinic-Brochure.pdf) is a joint project of Columbia Legal Services and FareStart, focusing on legal issues related to LFO’s\n\nContact us at contact@cvp.com and we will get back to you within 24 hours. If you want more info about your rights concerning LFOs, consult the website of [Washington LawHelp](https://www.washingtonlawhelp.org/issues/criminal/legal-financial-obligations-restitution-reduc-1?location=Yakima%20County).",
    },
    {
      id: "financialform2",
      summary: "Court Fees",
      details:
        "Use this [packet from Washington Law Help](https://www.washingtonlawhelp.org/files/C9D2EA3F-0350-D9AF-ACAE-BF37E9BC9FFA/attachments/21968678-A4F9-42E5-BA32-58826390C62D/8705en_get-misdemeanor-convictions-off-your-criminal-record.pdf) to find out if you are eligible to waive your fees (p. 1-2). It also includes instructions to request a fee waiver (p. 4-9) as well as all necessary forms (p. 10-14).\n\nIf you have trouble filling out the documents, use [this website created by Northwest Justice](https://lawhelpinteractive.org/Interview/GenerateInterview/7063/engine) to help fill out the documents for free.",
    },
  ],
  eligibilityForms: [
    {
      id: "eligibilityform1",
      summary: "(Gross) Misdeameanor Convictions",
      details: `[Vacation packet from Northwest Justice Project](https://www.washingtonlawhelp.org/resource/get-misdemeanor-convictions-off-your-criminal-record/download/21968678-A4F9-42E5-BA32-58826390C62D.pdf) with details about the eligibility to vacate (p. 2-4) and the needed court forms (p. 5-13).`,
    },
    {
      id: "eligibilityform2",
      summary: "Marijuana Misdemeanors",
      details:
        "[Vacation packet from Northwest Justice Project](https://www.washingtonlawhelp.org/files/C9D2EA3F-0350-D9AF-ACAE-BF37E9BC9FFA/attachments/21968678-A4F9-42E5-BA32-58826390C62D/8705en_get-misdemeanor-convictions-off-your-criminal-record.pdf) with the steps to vacate (p. 2-6), all necessary court documents (p. 8-13) and a sample letter for WSP to seal your record (p. 7).",
    },
    {
      id: "eligibilityform3",
      summary: "Prostitution Convictions",
      details:
        "If you were a victim of trafficking, you can use [this vacation packet from Northwest Justice Project](https://www.washingtonlawhelp.org/files/C9D2EA3F-0350-D9AF-ACAE-BF37E9BC9FFA/attachments/21968678-A4F9-42E5-BA32-58826390C62D/8705en_get-misdemeanor-convictions-off-your-criminal-record.pdf) with info on the eligibility to vacate (p. 1-3), steps to take (p. 4-8), court forms (p. 10-18) and a sample letter for WSP (p. 9).",
    },
    {
      id: "eligibilityform4",
      summary: "Non-Violent Class B or C Felony",
      details:
        "[Vacation packet from Northwest Justice Project](https://www.washingtonlawhelp.org/resource/get-misdemeanor-convictions-off-your-criminal-record/download/21968678-A4F9-42E5-BA32-58826390C62D.pdf) including an overview of the eligibility to vacate (p. 3-5), steps to vacate (p. 7-12), all necessary court documents (p. 13-23) and a sample letter to WSP (p. 24).\n\nTo vacate a felony conviction, you will also need a Certificate of Discharge. If the court has not issued the Certificate of Discharge yet, you must file for a certificate before you can vacate the felony. [This packet](https://www.courts.wa.gov/forms/documents/CR08.0670_Obtaining%20a%20Certificate%20of%20Discharge_2019%2007.pdf) will assist you to obtain a Certificate of Discharge in Washington State.",
    },
    {
      id: "eligibilityform5",
      summary: "Treaty to Indian Fishing Convictions",
      details:
        "[Vacation packet from Northwest Justice Project](https://www.washingtonlawhelp.org/resource/get-misdemeanor-convictions-off-your-criminal-record/download/21968678-A4F9-42E5-BA32-58826390C62D.pdf) including an overview of the eligibility to vacate (p. 1-2), steps to take (p. 3-7), all court forms (p. 8-16), and a sample letter for WSP (p. 17).",
    },
    {
      id: "eligibilityform6",
      summary: "Juvenile Conviction Records",
      details:
        "Detailed [teamChildPacket](https://teamchild.org/wp-content/uploads/2019/03/Sealing-Juvenile-Court-Records-in-Washington-State-2018.pdf) containing all court documents (p. 30-40), sample letters to WSP and JRA (p. 41-42), and the specific practices per county (p. 19-27).\n\nThe [packet from King County Superior Court](https://kingcounty.gov/~/media/courts/superior-court/docs/juvenile/juvenile-forms/10-sealing-records-instructions-and-forms-pdf-web.ashx?la=en) briefly describes the procedure to vacate and contains all necessary court documents (p. 11-17) and a sample of how to fill in the court documents (p. 4-9)",
    },
  ],
};

export default getStartedContent;

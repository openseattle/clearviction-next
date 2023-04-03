import { Box } from "@mui/material";

// making this a component incase we want to add the donation form anywhere else
export default function DonationForm() {
  return (
    <Box>
      <iframe
        src="https://donorbox.org/embed/clearviction"
        name="donorbox"
        height="900px"
        width="100%"
        style={{
          maxWidth: "500px",
          minWidth: "250px",
          maxHeight: "none!important",
          borderWidth: "0px",
        }}
      ></iframe>
    </Box>
  );
}

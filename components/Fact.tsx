import { Box, Grid, GridProps, Paper, Typography } from "@mui/material";

interface FactProps extends GridProps {
  text: string;
  icon: React.ReactNode;
}

export function Fact({ text, icon }: FactProps) {
  return (
    <>
      <Box display="flex" justifyContent="center" padding={3}>
        {icon}
      </Box>
      <Typography
        style={{ padding: 3, margin: 20 }}
        variant="body1"
        align="center"
      >
        {text}
      </Typography>
    </>
  );
}

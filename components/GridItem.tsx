import { Box, Grid, GridProps, Typography } from "@mui/material";
import MuiMarkdown from "mui-markdown";
interface GridItemCardProps extends GridProps {
  title?: string;
  body: string;
  imgsrc?: string;
}

export function GridItemCard({
  title,
  body,
  imgsrc,
  ...props
}: GridItemCardProps) {
  return (
    <Grid item {...props} sx={{ mb: 4, justifyContent: "center" }}>
      <Box textAlign="center">
        {imgsrc && (
          <Box
            component="img"
            src={imgsrc}
            alt=""
            sx={{
              maxWidth: "250px",
              height: "200px",
              objectFit: "contain",
              textAlign: "center",
            }}
          ></Box>
        )}
        <Typography
          variant="subtitle2"
          sx={{
            fontWeight: "bold",
            marginBottom: "10px",
            maxWidth: "250px",
            margin: "27px auto auto",
            minHeight: "62px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {title}
        </Typography>
        <Box textAlign="left">
          <MuiMarkdown
            overrides={{
              span: {
                component: "p",
                props: {
                  style: {
                    maxWidth: "260px",
                    display: "flex",
                    margin: "20px auto",
                    textAlign: "center",
                  },
                } as React.HTMLProps<HTMLParagraphElement>,
              },
            }}
          >
            {body}
          </MuiMarkdown>
        </Box>
      </Box>
    </Grid>
  );
}

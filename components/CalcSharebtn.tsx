import { makeStyles } from "@material-ui/core/styles";
import { IosShare } from "@mui/icons-material";
import { Button, Popover } from "@mui/material";
import ClipboardJS from "clipboard";
import * as React from "react";
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  LivejournalIcon,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";

{
  /* added library to help with copying text */
}
new ClipboardJS(".btn");

const CalcSharebtn = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      margin: "0 auto",
      textDecoration: "underline",
      color: theme.palette.primary.main,
      fontWeight: theme.typography.h4.fontWeight,
    },
  }));

  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  {
    /* Title value controls social media share text, Body value controls email body text */
  }
  return (
    <div>
      <Button
        className={classes.root}
        aria-describedby={id}
        onClick={handleClick}
      >
        <IosShare />
        Share The Calculator
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <TwitterShareButton
          title="Got a minute? Check out Clearviction’s mission as they work to decrease consequences from criminal #convictions in #WashingtonState by helping determine eligibility to vacate."
          url="http://www.clearviction.org/"
        >
          <TwitterIcon round bgStyle={{ fill: "#FFD200" }} />
        </TwitterShareButton>
        <FacebookShareButton
          url="http://www.clearviction.org/"
          hashtag="#clearviction"
          title="Got a minute? Check out Clearviction’s mission as they work to decrease consequences from criminal #convictions in #WashingtonState by helping determine eligibility to vacate."
        >
          <FacebookIcon round bgStyle={{ fill: "#FFD200" }} />
        </FacebookShareButton>
        <LinkedinShareButton
          url="http://www.clearviction.org/"
          title="Got a minute? Check out Clearviction’s mission as they work to decrease consequences from criminal #convictions in #WashingtonState by helping determine eligibility to vacate."
        >
          <LinkedinIcon round bgStyle={{ fill: "#FFD200" }} />
        </LinkedinShareButton>
        <EmailShareButton
          url="http://www.clearviction.org/"
          subject="Check out the Clearviction Calculator"
          body="Check out Clearviction’s mission as they work to decrease consequences from criminal convictions in Washington State by helping determine eligibility to vacate."
        >
          <EmailIcon round bgStyle={{ fill: "#FFD200" }} />
        </EmailShareButton>
        <LivejournalIcon
          className="btn"
          data-clipboard-target="#hp"
          round
          bgStyle={{ fill: "#FFD200" }}
        ></LivejournalIcon>
        <input id="hp" value="https://www.clearviction.org" />
      </Popover>
    </div>
  );
};

export default CalcSharebtn;

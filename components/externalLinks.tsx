import { useEffect } from "react";

// open all external links in another tab
export default function ExternalLinks() {
  useEffect(() => {
    const links = document.links;
    for (var i = 0, linksLength = links.length; i < linksLength; i++) {
      if (links[i].hostname != window.location.hostname) {
        links[i].target = "_blank";
      }
    }
  });
}

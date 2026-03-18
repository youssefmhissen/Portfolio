import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

function SocialIcon({
  color = "white",
  size = "1x",
  className = "",
  icons = [],
}) {
  const defaultIcons = [
    { icon: faFacebookF, url: "#" },
    { icon: faTwitter, url: "#" },
    { icon: faInstagram, url: "#" },
    { icon: faLinkedinIn, url: "#" },
  ];

  const iconsToRender = icons.length > 0 ? icons : defaultIcons;

  return (
    <div className={className}>
      {iconsToRender.map((social, index) => (
        <a
          key={index}
          href={social.url}
          className={`text-${color} mx-2`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={social.icon} size={size} />
        </a>
      ))}
    </div>
  );
}

export default SocialIcon;

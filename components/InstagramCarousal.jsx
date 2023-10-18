"use client";
import React from "react";
import InstagramEmbed from "react-instagram-embed";

const InstagramCarousal = () => {
  return (
    <div>
      <InstagramEmbed
        url="https://www.instagram.com/p/CB0bPnUgFrP/
        "
        maxWidth={320}
        hideCaption={false}
        containerTagName="div"
      />
    </div>
  );
};

export default InstagramCarousal;

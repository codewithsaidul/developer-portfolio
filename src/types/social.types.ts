import React from "react";

export interface SocialsIcon {
  id?: number;
  name: string;
  link: string;
  icon: React.ReactNode;
}

export interface SocialIconProps {
  social: SocialsIcon;
}
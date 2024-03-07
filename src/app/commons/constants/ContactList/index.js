import {
  SiYoutube,
  SiGithub,
  SiInstagram,
  SiTiktok,
  SiDiscord,
  SiLinkedin
} from "react-icons/si";

const iconSize = 24;

export const CONTACTLIST = [
  {
    name: "Github",
    logo: <SiGithub size={iconSize} />,
    href: "https://github.com/Hafidz25",
    color: 'bg-neutral-800',
  },
  {
    name: "Instagram",
    logo: <SiInstagram size={iconSize} />,
    href: "https://www.instagram.com/yourfzz_",
    color: 'bg-neutral-800',
  },
  {
    name: "Linkedin",
    logo: <SiLinkedin size={iconSize} />,
    href: "https://www.linkedin.com/in/hafidz-alif-rachman-324729169/",
    color: 'bg-neutral-800',
  },
  // {
  //   name: "Discord",
  //   logo: <SiDiscord size={iconSize} />,
  //   href: "https://discord.com/users/274076893240754176",
  //   color: 'bg-purple-700',
  // },
  // {
  //   name: "Youtube",
  //   logo: <SiYoutube size={iconSize} />,
  //   href: "https://www.youtube.com/@ryznoxy",
  //   color: 'bg-red-600',
  // },
];

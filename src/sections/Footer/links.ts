import { LINKEDIN_URL } from "../../constants/links";

const connect = [
  {
    url: "https://github.com/sebdybowski",
    label: "Github",
    icon: "lucide:github",
  },
  {
    url: LINKEDIN_URL,
    label: "LinkedIn",
    icon: "lucide:linkedin",
  },
  {
    url: "https://twitter.com/sebdybowskidev",
    label: "Twitter (X)",
    icon: "lucide:twitter",
  },
];

const contact = [
  {
    label: "Mobile",
    value: "+48 782 710 459",
    url: "tel:+48782710459",
    icon: "lucide:phone",
  },
  {
    label: "E-mail",
    value: "dybowski.seb@gmail.com",
    url: "mailto:dybowski.seb@gmail.com",
    icon: "lucide:mail",
  },
];

export { connect, contact };

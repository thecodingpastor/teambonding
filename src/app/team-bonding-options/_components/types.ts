import { StaticImageData } from "next/image";

export interface BenefitProps {
  topic: string;
  intro: string;
  list: {
    lead: string;
    children: string[];
  }[];
}

export interface ActivityProps {
  name: string;
  link: string;
  image: StaticImageData | string;
  intro: string;
  lead: string;
  teamSize: string[];
  time: string[];
  benefits: BenefitProps[];
  requirements: {
    lead: string;
    list: string[];
  }[];
}

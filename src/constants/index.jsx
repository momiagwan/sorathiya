import { BotMessageSquare, LucideSkull } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";
import {Home} from "lucide-react";
import {Skull } from "lucide-react";
import {CircleDollarSign} from "lucide-react";
import {GraduationCap } from "lucide-react"
import {Handshake} from "lucide-react"
import {Disc2 } from "lucide-react"

import umaragwan from "../assets/profile-pictures/umaragwan.jpg";
import sulaimanagwan from "../assets/profile-pictures/sulaimanagwan.jpg";
import sulaimanaligogda from "../assets/profile-pictures/sulaimanaligogda.jpg";
import umarhasan from "../assets/profile-pictures/umarhasan.jpg";
import sattarderaiya from "../assets/profile-pictures/sattarderaiya.jpg";
import abdullahsulaiman from "../assets/profile-pictures/abdullahsulaiman.jpg";

export const navItems = [
  { label: "Services", href: "#" },
  { label: "Blogs", href: "#" },
  { label: "Contact", href: "#" },
  { label: "Head members", href: "#" },
];

export const testimonials = [
  {
    user: "Umar Muhammad",
    company: "Agwan",
    image: umaragwan,
    text:"Umar Muhammad son of Muhammad Waraim Agwan belong to Ghadhakda village in Gujarat India"
  },
  {
    user: "Sulaiman Wali",
    company: "Agwan",
    image: sulaimanagwan,
    text: "Sulaiman Wali  son of Wali Muhammad Agwan belong to Babra village in Gujarat India.He served the  community as a president for many years ",
  },
  {
    user: "Umar Hasan",
    company: "Malaviya",
    image: umarhasan,
    text: "Umar Hasan son of Hasan Malaviya belong to Bilkha village in Junagadh taluka in Gujarat India.He worked as an Editor in Dawn newspaper",
  },
  {
    user: "Abdul-Sattar Ismail",
    company: "Deraiya",
    image: sattarderaiya,
    text: " Abdul-Sattar son of Ismail Deraiya belong to Damnagar village in Gujarat India.",
  },
  {
    user: "Abdullah Sulaiman",
    company: "Radhanpura",
    image: abdullahsulaiman,
    text: "Abdullah sulaiman son of Sulaiman Radhanpura belong to Ahmedabad city in Gujarat India",
  },
  {
    user: "Sulaiman Ali",
    company: "Gogda",
    image: sulaimanaligogda,
    text: "Sulaiman ali son of Muhammad Ali Gogda belong to Tansa village in Gujarat India ",
  },
];

export const features = [
  {
    icon: <GraduationCap /> ,
    text: "Education free",
    description:
      "Community will pay your children's school and tuition fee",
  },
  {
    icon: <Fingerprint />,
    text: "Loans for Business",
    description:
      "Coummunity will provide you capital to start a business",
  },
  {
    icon: <ShieldHalf />,
    text: "Medical services",
    description:
      "Community will help you in medical treatments after verifying your work and medical history",
  },
  {
    icon: <Home/>,
    text: "Monthly Groceries budget",
    description:
      "Community will give you monthly grossery budget after verifying your salary",
  },
  {
    icon: <Handshake />,
    text: "Amount for Marriges",
    description:
      "Community will arrange furniture,household accessories and will bear all expenses of marrige after verifying documents",
  },
  {
    icon: <GlobeLock />,
    text: "Death Rituals",
    description:
      "Community will not forget you in difficult times on death of any member they will manage all things related with death rituals such as transport,lunch for guests and graveyard expenses ",
  },
  {
    icon: <LucideSkull />,
    text: "GraveYard maintenance",
    description:
      "Taking care of graveyard's needs such as Graveyard's lights,water and cutting down of bushes will be our responsibility",
  },
  {
    icon:  <CircleDollarSign />,
    text: "Zakat services",
    description:
      "your zakat will be handed to rightful person in the community",
  },
  {
    icon: <Disc2 />,
    text: "Eid ul Adha services",
    description:
      "Meat after Qurbani will be given to families who dont sacrifice",
  },
];

export const checklistItems = [
  {
    title: "Election after 3 years",
    description:
      "Democracy after every three years for the position of community president",
  },
  {
    title: "Computerized cards",
    description:
      "Every 18 year person can vote through this card",
  },
  {
    title: "unbiased Result",
    description:
      "only after 1 hour unbiased result on the basis of majority votes",
  },
  {
    title: "Oath Ceremony",
    description:
      "oath of heads of each section of community infront of all council members",
  },
];

export const pricingOptions = [
  {
    title: "Zakat",
    
    features: [
      "through bank transfer",
      
      "available 24/7",
      "given to needy persons",
     
    ],
  },
  {
    title: "Fitrah",
    
    features: [
      "through bank transfer",
      "Service availaible till eid's morning",
      "Privacy Guaranteed",
    ],
  },
  {
    title: "Charity",
    features: [
      "through bank transfer",
      "available 24/7",
      "Privacy guaranteed",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Recent Marriges" },
  { href: "#", text: "Recent deaths" },
  { href: "#", text: "Warning to members" },
  { href: "#", text: "Notifications" },
  { href: "#", text: "Community Forms" },
];

export const platformLinks = [
  { href: "#", text: "Educational Commitee event" },
  { href: "#", text: "Webinars" },
  { href: "#", text: "Sammu-lagan" },
  { href: "#", text: "General-body-ijlaas" },
  { href: "#", text: "welcoming pilgrims" },
];

export const communityLinks = [
  { href: "#", text: "Law Book" },
  { href: "#", text: "Members book" },
  { href: "#", text: "Clans history" },
  { href: "#", text: "Presidential history" },
  { href: "#", text: "Sectional head of each commitee" },
];

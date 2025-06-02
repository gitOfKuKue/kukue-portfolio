import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faTelegram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faCommentDots, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

import zaloQR from "../assets/contact/zaloQr.jpeg"
import whatsappQr from "../assets/contact/whatsappQr.jpeg"
import linkedinQr from "../assets/contact/LinkedinQr.png"

const contacts = [
  {
    id: 1,
    platform: "facebook",
    link: "https://www.facebook.com/share/1AY13w7e8D/?mibextid=wwXIfr",
    image: "#",
    description: "lorem ipsum",
    icon: faFacebook,
  },
  {
    id: 2,
    platform: "instagram",
    link: "https://www.instagram.com/kukue_n_kukue/",
    image: "#",
    description: "lorem ipsum",
    icon: faInstagram,
  },
  {
    id: 3,
    platform: "Whatsapp",
    link: "#",
    image: whatsappQr,
    description: "most used",
    icon: faWhatsapp,
  },
  {
    id: 4,
    platform: "Zalo",
    link: "#",
    image: zaloQR,
    description: "normally used",
    icon: faCommentDots,
  },
  {
    id: 5,
    platform: "Linkedin",
    link: "https://www.linkedin.com/in/thu-htet-naing-b06ab8348?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    image: linkedinQr,
    description: "for job",
    icon: faLinkedin,
  },
  {
    id: 6,
    platform: "email",
    link: "mailto:kukue014@gmail.com",
    image: "#",
    description: "lorem ipsum",
    icon: faEnvelope,
  },
  {
    id: 7,
    platform: "github",
    link: "https://www.github.com/gitOfKukue",
    image: "#",
    description: "lorem ipsum",
    icon: faGithub,
  },
  {
    id: 8,
    platform: "phone",
    link: "tel:+84898247910",
    image: "#",
    description: "lorem ipsum",
    icon: faPhone,
  },
];

export default contacts;


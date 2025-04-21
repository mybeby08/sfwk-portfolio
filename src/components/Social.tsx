import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

type Props = {
  containerStyles?: string;
  iconStyles?: string;
};

export const Social = ({ containerStyles, iconStyles }: Props) => {
  const socials = [
    { icon: <FaGithub />, path: "" },
    { icon: <FaLinkedinIn />, path: "" },
  ];
  return (
    <div className={`${containerStyles}`}>
      {socials.map((social, index) => (
        <Link key={index} href={social.path}>
          <span className={`${iconStyles}`}>{social.icon}</span>
        </Link>
      ))}
    </div>
  );
};

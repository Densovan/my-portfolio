import Link from "next/link";
import React from "react";
import { personalData } from "../utils/data/personal-data";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { RiContactsFill } from "react-icons/ri";
import { MdDownload } from "react-icons/md";

const ContactSection = () => {
  return (
    <div id="contact" className="pb-12">
      <div>
        <center>
          <p className="font-medium mb-5 text-[#16f2b3] sm:text-3xl text-xl uppercase">
            Keep In Touch.
          </p>
          <div className="w-[40%]">
            <p className="text-gray-200 text-sm lg:text-lg">
              I'm currently specializing in{" "}
              <span className="text-green-500">Software Engineer</span>. Feel
              free to get in touch and talk more about your projects.
            </p>
          </div>
          <div className="flex justify-center -mb-10">
            <div className="my-12 flex items-center gap-5">
              <Link
                href={personalData.github}
                target="_blank"
                className="transition-all text-[#16f2b3] hover:scale-125 duration-300"
              >
                <BsGithub size={30} />
              </Link>
              <Link
                href={personalData.linkedIn}
                target="_blank"
                className="transition-all text-[#16f2b3] hover:scale-125 duration-300"
              >
                <BsLinkedin size={30} />
              </Link>
              <Link
                href={personalData.facebook}
                target="_blank"
                className="transition-all text-[#16f2b3] hover:scale-125 duration-300"
              >
                <FaFacebook size={30} />
              </Link>
            </div>
          </div>
        </center>
      </div>
    </div>
  );
};

export default ContactSection;

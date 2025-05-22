import Image from "next/image";
import logo from "@/app/favicon.ico";
import { FaLinkedin, FaFacebook, FaTwitter, FaGithub } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { montserrat } from "@/public/fonts/fonts";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div id="logo-animation">
          <Image src={logo} width={100} height={100} alt="logo" />
        </div>

        <div
          id="icons-animation"
          className="grid grid-cols-4 gap-24 my-4 md:gap-14 lg:gap-20 xl:mt-0 xl:grid-cols-6 xl:gap-4"
        >
          <span
            className={`${montserrat.className} hidden xl:block uppercase text-gray-800 col-span-2`}
          >
            profile accounts
          </span>
          <a target="_blank" href="https://facebook.com/0ahmedbadran/">
            <FaFacebook
              className="text-green-400 md:text-gray-800 animate-bounce hover:animate-none"
              size={"1.5em"}
            />
          </a>
          <a target="_blank" href="https://x.com/_ahmedbadran/">
            <FaTwitter
              className="text-green-400 md:text-gray-800 animate-bounce hover:animate-none"
              size={"1.5em"}
            />
          </a>
          <a target="_blank" href="https://linkedin.com/in/0badran/">
            <FaLinkedin
              className="text-gray-800 md:text-gray-800 animate-bounce hover:animate-none"
              size={"1.5em"}
            />
          </a>
          <a target="_blank" href="https://github.com/0badran/">
            <FaGithub
              className="text-gray-800 animate-bounce hover:animate-none"
              size={"1.5em"}
            />
          </a>
        </div>
      </div>
      <div className="title-animation antialiased text-wrap  md:p-20 w-2/5">
        <div className={`${montserrat.className}`}>
          <div>
            <h2 style={{ color: "#2AD87F" }}>Hello Everyone.</h2>
            <h1 className="text-7xl text-white uppercase">
              I&apos;m Ahmed Badran
            </h1>
          </div>
          <div className="flex justify-between rounded-md z-10 relative w-80 group border border-green-400 mt-7">
            <div
              aria-label="the hover effect"
              className="transition-all duration-1000 rounded-md -z-10 ease-linear absolute right-0 top-1/2 -translate-y-1/2 h-full w-0 group-hover:w-full bg-green-400"
            />
            <h2 className="text-white uppercase p-4">frontend developer</h2>
            <Link href="#about">
              <button className="bg-gray-800 rounded-md md:bg-green-400 p-4">
                <FaArrowRightLong
                  size={"1.5em"}
                  className="text-green-400 md:text-white"
                />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

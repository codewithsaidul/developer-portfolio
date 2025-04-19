import { sections, socials } from "@/constants/constants";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import SocialIcon from "./SocialIcon";

const Footer = () => {
  return (
    <footer className="relative mt-64 py-20 bg-card h-fit">
      {/* ===== SVG Wave Background ===== */}
      <div className="absolute max-[370px]:-top-12 -top-20 min-[550px]:-top-28 sm:-top-52 min-lg:-top-80 xl:-top-96 left-0 w-full overflow-hidden -z-10 pointer-events-none">
        <svg
          id="wave"
          viewBox="0 0 1440 490"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
              <stop stopColor="rgba(30, 30, 30, 1)" offset="0%"></stop>
              <stop stopColor="rgba(30, 30, 30, 1)" offset="100%"></stop>
            </linearGradient>
          </defs>
          <path
            fill="url(#sw-gradient-0)"
            d="M0,343L80,343C160,343,320,343,480,351.2C640,359,800,376,960,359.3C1120,343,1280,294,1440,253.2C1600,212,1760,180,1920,163.3C2080,147,2240,147,2400,122.5C2560,98,2720,49,2880,32.7C3040,16,3200,33,3360,106.2C3520,180,3680,310,3840,302.2C4000,294,4160,147,4320,106.2C4480,65,4640,131,4800,130.7C4960,131,5120,65,5280,89.8C5440,114,5600,229,5760,236.8C5920,245,6080,147,6240,130.7C6400,114,6560,180,6720,171.5C6880,163,7040,82,7200,81.7C7360,82,7520,163,7680,236.8C7840,310,8000,376,8160,343C8320,310,8480,180,8640,171.5C8800,163,8960,278,9120,318.5C9280,359,9440,327,9600,261.3C9760,196,9920,98,10080,122.5C10240,147,10400,294,10560,334.8C10720,376,10880,310,11040,294C11200,278,11360,310,11440,326.7L11520,343L11520,490L11440,490C11360,490,11200,490,11040,490C10880,490,10720,490,10560,490C10400,490,10240,490,10080,490C9920,490,9760,490,9600,490C9440,490,9280,490,9120,490C8960,490,8800,490,8640,490C8480,490,8320,490,8160,490C8000,490,7840,490,7680,490C7520,490,7360,490,7200,490C7040,490,6880,490,6720,490C6560,490,6400,490,6240,490C6080,490,5920,490,5760,490C5600,490,5440,490,5280,490C5120,490,4960,490,4800,490C4640,490,4480,490,4320,490C4160,490,4000,490,3840,490C3680,490,3520,490,3360,490C3200,490,3040,490,2880,490C2720,490,2560,490,2400,490C2240,490,2080,490,1920,490C1760,490,1600,490,1440,490C1280,490,1120,490,960,490C800,490,640,490,480,490C320,490,160,490,80,490L0,490Z"
          ></path>
        </svg>
      </div>

      <div className="flex flex-col items-center gap-y-10">
        {/* my name */}
        <h2 className="text-3xl font-dm-serif text-primary">
          Saidul Islam Rana
        </h2>

        {/* navigation menu for footer */}
        <div>
          <ul className="flex flex-row items-center justify-center gap-5 lg:gap-10 xl:gap-16 flex-wrap">
            {sections.map((section) => (
              <li
                key={section}
                className={twMerge(
                  "text-textSecondary text-2xl font-dm-serif duration-500 hover:text-primary hover::duration-500 capitalize"
                )}
              >
                <Link href={`#${section}`}>{section}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* social icons */}
        <div className="flex items-center gap-5">
          {socials.map((social) => (
            <SocialIcon key={social.id} social={social} />
          ))}
        </div>

        {/* copyright */}
        <div>
          <p className="text-base text-textPrimary text-center">
            &copy; 2025 CodeWithSaidul. All rights reserved
          </p>
        </div>
      </div>

      {/* ================ bg blur ==================== */}
      <div>
        <div
          className={
            "absolute -top-40 md:-top-5 left-0  w-[250px] h-[300px] min-[830px]:w-[300px] bg-white opacity-10 blur-3xl"
          }
        />
        <div
          className={
            "absolute right-0 bottom-0 w-[300px] h-[400px] bg-white opacity-10 blur-3xl"
          }
        />
      </div>
      {/* ================ bg blur ==================== */}
    </footer>
  );
};

export default Footer;

{
  /* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#1e1e1e" fill-opacity="1" d="M0,64L60,101.3C120,139,240,213,360,229.3C480,245,600,203,720,165.3C840,128,960,96,1080,96C1200,96,1320,128,1380,144L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg> */
}

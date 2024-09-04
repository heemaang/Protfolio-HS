import { motion } from "framer-motion";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologiess } from "../constants";
import { styles } from "../styles";

// Full line for large devices
const wordsLine1 = ["Hey,", "I am", "Heemaang", "Saxena"];
// For small devices, this line will show only "Heemaang Saxena"
const wordsLine1ForSmallDevices = ["Hey,", "I am"];

const wordsLine2 = ["Heemaang", "Saxena"]; // Only for small devices

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const Hero = () => {
  const handleIconClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <section className="relative w-full h-screen mx-auto flex items-center justify-center">
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-0">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#6123E7]" />
            <div className="w-1 h-40 sm:h-80 violet-gradient" />
          </div>

          <div className="lg:text-center sm:text-left mt-10 sm:mt-[114px]">
            {/* Line 1: Display full line on large devices, partial on small devices */}
            <h1 className="text-4xl sm:text-6xl font-bold text-white">
              {/* Display different text based on screen size */}
              <span className="hidden sm:inline">
                {wordsLine1.map((word, index) => (
                  <motion.span
                    key={index}
                    variants={fadeIn}
                    initial="initial"
                    animate="animate"
                    transition={{ delay: index * 0.5, duration: 0.5 }}
                    className={index !== 0 ? "ml-2" : ""}
                  >
                    <span className="text-[#6123E7]">{word}</span>
                  </motion.span>
                ))}
              </span>
              <span className="sm:hidden">
                {wordsLine1ForSmallDevices.map((word, index) => (
                  <motion.span
                    key={index}
                    variants={fadeIn}
                    initial="initial"
                    animate="animate"
                    transition={{ delay: index * 0.5, duration: 0.5 }}
                    className={index !== 0 ? "ml-2" : ""}
                  >
                    <span className="text-[#6123E7]">{word}</span>
                  </motion.span>
                ))}
              </span>
            </h1>

            {/* Line 2: Display only on small devices */}
            <h1 className="text-3xl sm:text-6xl font-bold text-white sm:hidden">
              {wordsLine2.map((word, index) => (
                <motion.span
                  key={index}
                  variants={fadeIn}
                  initial="initial"
                  animate="animate"
                  transition={{
                    delay: (index + wordsLine1ForSmallDevices.length) * 0.5,
                    duration: 0.5,
                  }}
                  className={index !== 0 ? "ml-2" : ""}
                >
                  <span className="text-[#6123E7]">{word}</span>
                </motion.span>
              ))}
            </h1>

            <p className="mt-4 text-base sm:text-2xl text-white-100 font-semibold">
              {["Welcome To My Portfolio!"].map((word, index) => (
                <motion.span
                  key={index}
                  variants={fadeIn}
                  initial="initial"
                  animate="animate"
                  transition={{
                    delay:
                      (index + wordsLine1ForSmallDevices.length + wordsLine2.length) * 0.5,
                    duration: 0.5,
                  }}
                  className={index !== 0 ? "ml-2" : ""}
                >
                  <span>{word}</span>
                </motion.span>
              ))}
              <br className="sm:block hidden" />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  delay:
                    (wordsLine1ForSmallDevices.length + wordsLine2.length + 1) * 0.5,
                  duration: 0.5,
                }}
                className="flex flex-row flex-wrap justify-center gap-5 sm:gap-10 lg:mt-10 lg:mr-4 sm:mt-2"
              >
                {technologiess.map((technology) => (
                  <div
                    className="w-20 h-20 sm:w-28 sm:h-28 cursor-pointer"
                    key={technology.name}
                    onClick={() => handleIconClick(technology.githubUrl)}
                  >
                    <BallCanvas icon={technology.icon} />
                  </div>
                ))}
              </motion.div>
            </p>
          </div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-0 w-full flex justify-center items-center pb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: (wordsLine1ForSmallDevices.length + wordsLine2.length + 2) * 0.5,
          duration: 0.5,
        }}
      >
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;

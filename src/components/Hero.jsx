import { motion } from "framer-motion";

import { styles } from "../styles";
// import { ComputersCanvas } from "./canvas";

const words = ["Hi,", "I'm", "Heemaang", "Saxena"];

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto flex items-center justify-center">
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="flex flex-row items-start gap-5">
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>

          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold text-white">
              {words.map((word, index) => (
                <motion.span
                  key={index}
                  variants={fadeIn}
                  initial="initial"
                  animate="animate"
                  transition={{ delay: index * 0.5, duration: 0.5 }}
                  className={index !== 0 ? 'ml-2' : ''}
                >
                  <span className="text-[#915EFF]">{word}</span>
                </motion.span>
              ))}
            </h1>
            <p className="mt-4 text-lg sm:text-2xl text-white-100">
              {["Welcome", "to", "my", "MERN", "developer", "portfolio!"].map((word, index) => (
                <motion.span
                  key={index}
                  variants={fadeIn}
                  initial="initial"
                  animate="animate"
                  transition={{ delay: (index + words.length) * 0.5, duration: 0.5 }}
                  className={index !== 0 ? 'ml-2' : ''}
                >
                  <span>{word}</span>
                </motion.span>
              ))}
              <br className="sm:block hidden" />
              {/* {["I", "specialize", "in", "building", "robust", "and", "scalable", "web", "applications"].map((word, index) => (
                <motion.span
                  key={index + 10}
                  variants={fadeIn}
                  initial="initial"
                  animate="animate"
                  transition={{ delay: (index + words.length + 6) * 0.5, duration: 0.5 }}
                  className={index !== 0 ? 'ml-2' : ''}
                >
                  <span>{word}</span>
                </motion.span>
              ))} */}
            </p>
          </div>
        </div>
      </div>

      {/* <ComputersCanvas /> */}

      {/* <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div> */}
    </section>
  );
};

export default Hero;

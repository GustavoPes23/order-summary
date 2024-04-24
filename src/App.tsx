import "./App.css";

import { motion } from "framer-motion";

import Hero from "../public/images/illustration-hero.svg";
import Music from "../public/images/icon-music.svg";

function App() {
  return (
    <motion.div
      className="flex h-screen justify-center items-center"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.1,
        scale: {
          stiffness: 100,
          restDelta: 0.001,
        },
      }}
    >
      <div className="relative flex flex-col shadow-md bg-clip-border rounded-xl w-96 bg-white">
        <img src={Hero} alt="Hero" className="rounded-t-xl" />
        <div className="grid py-10 px-10 gap-3">
          <h3 className="block font-sans text-xl antialiased font-bold text-primary">
            Order Summary
          </h3>
          <p className="block font-sans text-center px-4 text-base antialiased leading-relaxed text-gray-500/90 font-medium">
            You can now listen to milions of songs, audiobooks, and podcast on
            any dvice anywhere you like!
          </p>
          <div className="flex py-6 px-4 subcard rounded-xl gap-4 items-center justify-between my-2">
            <img src={Music} alt="Music" />
            <div className="flex flex-col">
              <span className="block font-sans text-base antialiased leading-relaxed font-bold">
                Annual Plan
              </span>
              <span className="block font-sans text-base antialiased leading-relaxed text-gray-500/90 font-medium text-left">
                $59.99/year
              </span>
            </div>
            <a
              className="text-end font-sans text-base antialiased leading-relaxed link font-medium cursor-pointer"
            >
              Change
            </a>
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.9 }}
            className="align-middle select-none font-sans font-bold text-center transition-all text-xs py-3 rounded-lg button-primary text-white shadow-md  focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
            type="button"
          >
            Proceed to Payment
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.9 }}
            className="align-middle select-none font-sans font-bold text-center transition-all text-xs py-3 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none text-gray-500/90"
            type="button"
          >
            Cancel Order
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

export default App;

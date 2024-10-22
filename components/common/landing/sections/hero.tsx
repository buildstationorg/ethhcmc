"use client";

import React from "react";
import Balancer from "react-wrap-balancer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { HiArrowRight } from "react-icons/hi2";
import Lottie from "lottie-react";
import * as HeroAnimation from "@/app/assets/ethhcmc-hero-lottie.json";

const HeroSection = () => {
  return (
    <section className="bg-[#f7f5ff] h-screen relative overflow-hidden py-20 flex flex-col justify-center">
      <div className="absolute z-[0] inset-1">
        <Lottie animationData={HeroAnimation} loop={true} />
      </div>
      <div className="container relative z-[1]">
        <div className="flex flex-col gap-6 text-center items-center">
          <Balancer>
            <motion.h1 className="text-4xl lg:text-8xl font-semibold font-oswald uppercase">
              {"Built by the community, For the community."
                .split(" ")
                .map((word, index) => (
                  <motion.span
                    initial={{
                      filter: "blur(10px)",
                      opacity: 0,
                      y: 10,
                    }}
                    animate={{
                      filter: "blur(0px)",
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.05,
                    }}
                    className="inline-block"
                    key={index}
                  >
                    {word}&nbsp;
                  </motion.span>
                ))}
            </motion.h1>
          </Balancer>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.5 }}
            className="relative z-20 mx-auto mt-4 max-w-4xl px-4 text-center text-muted-foreground text-xl"
          >
            {`First ethereum community in Ho Chi Minh City, Vietnam. We are a group of blockchain enthusiasts, developers, and investors who are passionate about the technology and its potential. We aim to educate, connect, and inspire the community to build a better future.`}
          </motion.p>
          <motion.div
            initial={{
              y: 80,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              ease: "easeOut",
              duration: 0.5,
              delay: 0.4,
            }}
            className="flex flex-col lg:flex-row items-center gap-4 justify-center mt-6 relative z-10"
          >
            <Button size="lg" className="gap-2 text-lg w-full lg:w-fit">
              Join our weekly meetup
              <HiArrowRight size={16} />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-foreground text-lg w-full lg:w-fit"
            >
              <span>Contact us</span>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

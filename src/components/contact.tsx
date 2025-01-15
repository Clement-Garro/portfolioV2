"use client";
import React from "react";
import {motion} from "framer-motion";
import {LampContainer} from "@/components/ui/lamp";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";

export function Contact() {
  return (
    <LampContainer>
      <motion.h1
        initial={{opacity: 0.5, y: 100}}
        whileInView={{opacity: 1, y: 0}}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl w-4/5 "
      >
        <div className="container px-4 md:px-6 flex-col flex max-w-screen">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Get in
            Touch</h2>
          <div className="gap-6 flex flex-col">
            <div>
              <form className="space-y-4 text-black">
                <Input placeholder="Your Name"/>
                <Input type="email" placeholder="Your Email"/>
                <Textarea placeholder="Your Message"/>
                <Button type="submit" className="w-full text-base">Send Message</Button>
              </form>
            </div>
          </div>
        </div>
      </motion.h1>
    </LampContainer>
  );
}

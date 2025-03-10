"use client";
import React from "react";
import {motion} from "framer-motion";
import {LampContainer} from "@/components/ui/lamp";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";

export function Contact() {
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    const webhookUrl = process.env.DISCORD_WEBHOOK_URL as string | undefined;

    if (!webhookUrl) {
      console.error('Webhook URL is not defined');
      alert('Failed to send message.');
      return;
    }

    const payload = {
      content: `**Name:** ${name}\n**Email:** ${email}\n**Message:** ${message}`,
    };

    try {
      await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      alert('Message sent successfully!');
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message.');
    }
  };

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
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-white">
            Contactez-nous
          </h2>
          <div className="gap-6 flex flex-col">
            <div>
              <form className="space-y-4 text-black" onSubmit={handleSubmit}>
                <Input name="name" placeholder="Your Name" required/>
                <Input type="email" name="email" placeholder="Your Email" required/>
                <Textarea name="message" placeholder="Your Message" required/>
                <Button type="submit" className="w-full text-base">
                  Envoyer le message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </motion.h1>
    </LampContainer>
  );
}
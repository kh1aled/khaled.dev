"use client";

import { Canvas } from "@react-three/fiber";
import React, { Suspense, useRef, useState } from "react";
import Dog from "@/app/models/Dog";
import Loader from "../components/Loader";
import useAlert from "@/hooks/useAlert";
import Alert from "../components/Alert";
import emailjs from "@emailjs/browser";

const NEXT_PUBLIC_EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const NEXT_PUBLIC_EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const NEXT_PUBLIC_EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

const page = () => {
  const formData = useRef(null);
  const [currentAnimation, setCurrentAnimation] = useState("idle");
  const { alert, showAlert, hideAlert } = useAlert();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = formData.current;

    if (
      !NEXT_PUBLIC_EMAILJS_SERVICE_ID ||
      !NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ||
      !NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    ) {
      console.error("❌ Missing EmailJS environment variables.");
      showAlert({
        type: "danger",
        text: "EmailJS configuration is missing. Please check your environment variables.",
      });
      return;
    }

    if (form) {
      emailjs
        .sendForm(
          NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          form,
          NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        )
        .then(
          () => {
            showAlert({ type: "success", text: "Email sent successfully!" });
            setTimeout(hideAlert, 2000);
          },
          (error) => {
            showAlert({ type: "danger", text: error.text });
            setTimeout(hideAlert, 2000);
          }
        );
    }
  };

  const handleFocus = () => setCurrentAnimation("walk");
  const handleBlur = () => setCurrentAnimation("idle");

  return (
    <section className="relative flex flex-col lg:flex-row max-container">
      <div className="flex-1 min-w-[50%] flex flex-col">
        {alert.show && <Alert {...alert} />}

        <h1 className="head-text">Get In Touch</h1>
        <form
          ref={formData}
          onSubmit={handleSubmit}
          className="w-full flex flex-col gap-7 mt-14"
        >
          <label className="text-white font-semibold">
            Name
            <input
              type="text"
              name="name"
              className="input"
              placeholder="John"
              required
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <label className="text-white font-semibold">
            Email
            <input
              type="email"
              name="email"
              className="input"
              placeholder="john@gmail.com"
              required
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <label className="text-white font-semibold">
            Your Message
            <textarea
              name="message"
              rows={4}
              className="textarea"
              placeholder="Write your thoughts here..."
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <button className="btn" type="submit">
            Submit
          </button>
        </form>
      </div>

      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000,
          }}
        >
          <directionalLight position={[0, 0, 1]} intensity={2.5} />
          <ambientLight intensity={1} />
          <pointLight position={[5, 10, 0]} intensity={2} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />
          <Suspense fallback={<Loader />}>
            <Dog
              currentAnimation={currentAnimation}
              position={[0.5, 0.35, 0]}
              rotation={[12.629, -0.6, 0]}
              scale={[0.5, 0.5, 0.5]}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default page;

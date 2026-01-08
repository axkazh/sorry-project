"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Firstscreen() {
  const [slide, setSlide] = useState(1);
  const [showSecret, setShowSecret] = useState(false);

  return (
    <div className="h-screen w-full bg-gradient-to-br from-pink-200 via-rose-100 to-amber-100 flex items-center justify-center p-4">
      <AnimatePresence mode="wait">

        {/* SLIDE 1 */}
        {slide === 1 && (
          <motion.div
            key="slide1"
            className="bg-white/90 rounded-3xl p-6 max-w-sm text-center shadow-xl"
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            <Image
              src="/characters/shin_sad.png"
              alt="sad shinchan"
              width={200}
              height={200}
              className="mx-auto mb-4"
            />

            <h1 className="text-2xl font-bold text-pink-600 mb-2">
              HEY KAZAMA
            </h1>

            <p className="text-gray-700 mb-6">
              Can we talk for a moment? <br />
              There’s something important I want to tell you.
            </p>

            <button
              onClick={() => setSlide(2)}
              className="bg-pink-500 text-white px-6 py-2 rounded-full"
            >
              Continue ❤️
            </button>
          </motion.div>
        )}

        {/* SLIDE 2 */}
        {slide === 2 && (
          <motion.div
            key="slide2"
            className="bg-white/90 rounded-3xl p-6 max-w-sm text-center shadow-xl"
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
          >
            <Image
              src="/characters/shin_bad.png"
              alt="bad shinchan"
              width={200}
              height={200}
              className="mx-auto mb-4"
            />

            <p className="text-gray-700 mb-6 text-lg">
              I know I hurt you… <br />
              and I’ve been feeling really bad about it.
            </p>

            <button
              onClick={() => setSlide(3)}
              className="bg-rose-500 text-white px-6 py-2 rounded-full"
            >
              Next →
            </button>
          </motion.div>
        )}

        {/* SLIDE 3 */}
{slide === 3 && (
  <motion.div
    key="slide3"
    className="bg-white/90 rounded-3xl p-6 max-w-sm text-center shadow-xl"
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0 }}
  >
    <Image
      src="/characters/shin_think.png"
      alt="thinking shinchan"
      width={180}
      height={180}
      className="mx-auto mb-3"
    />

    <h2 className="text-xl font-bold text-pink-600 mb-4">
      Little things I want to tell you
    </h2>

    {/* Hidden heart messages */}
    <div className="space-y-4 mb-6">
      <HeartMessage text="I messed up… and I’m really sorry for that 💖" />
      <HeartMessage text="I promise I’ll be better for you 💖" />
      <HeartMessage text="Please forgive me… you mean so much to me 💖" />
    </div>

    <button
      onClick={() => setSlide(4)}
      className="bg-pink-500 text-white px-6 py-2 rounded-full"
    >
      My message →
    </button>
  </motion.div>
)}

        {/* SLIDE 4 */}
        {slide === 4 && (
          <motion.div
            key="slide4"
            className="bg-white/90 rounded-3xl p-6 max-w-sm text-center shadow-xl"
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Image
              src="/characters/shin_kazama.png"
              alt="happy shinchan kazama"
              width={220}
              height={220}
              className="mx-auto mb-4"
            />

            <h2 className="text-2xl font-bold text-pink-600 mb-4">
              From my heart 💗
            </h2>

            {!showSecret ? (
              <button
                onClick={() => setShowSecret(true)}
                className="bg-rose-400 text-white px-6 py-2 rounded-full"
              >
                Tap to reveal 💌
              </button>
            ) : (
             <TypingText
               text={`Hey Kazama 💗

                I messed up, and I accept it with all my heart.
                Hurting you was never my intention.
                You are special to me,
                and your presence matters in my life.
                Please forgive my mistake
                and give me a small place in your heart again.
                Always yours 💗`}
              speed={40}
             />
            )}
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
}

/* Bubble Component */
function Bubble({ text }) {
  return (
    <div className="bg-pink-100 rounded-2xl p-3 text-gray-700 shadow">
      {text}
    </div>
  );
 }
 function HeartMessage({ text }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      onClick={() => setOpen(true)}
      whileTap={{ scale: 0.95 }}
      className="cursor-pointer"
    >
      {!open ? (
        <div className="bg-pink-300 rounded-full py-4 text-white text-lg shadow">
          💗 
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-pink-100 rounded-2xl p-4 text-gray-700 shadow"
        >
          {text}
        </motion.div>
      )}
    </motion.div>
  );
 }
 function TypingText({ text, speed = 50 }) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text[index]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <p className="text-gray-700 text-lg whitespace-pre-line mt-4">
      {displayedText}
    </p>
  );
}
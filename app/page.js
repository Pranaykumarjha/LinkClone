"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useReducer } from "next/navigation";
import { useRouter } from "next/navigation";
export default function Home() {
   const Router = useRouter();
  const createTree = () => {
  //  let link
  //  if(text.startsWith("bittr.ee/")){
  //    link = text.split["/"][1]
  //  }
   Router.push(`/generate?handle=${text}`)

  }
  const [text, setText] = useState("")
  return (
    <main>
      <section className="bg-[#254f1a]  min-h-[100vh] grid grid-cols-2 px-16"  >
        <div className="space-y-6 flex justify-center flex-col ml-[10vw]">
          {/* Title: clean neon cyan with subtle purple glow */}
          <p
            className="text-5xl font-extrabold leading-tight tracking-widest uppercase animate-pulse"
            style={{
              color: "#00ffff", // crisp neon cyan
              textShadow: `
                0 0 8px #00ffff,
                0 0 16px #00ffff,
                0 0 24px #aa00ff,
                0 0 32px #aa00ff
              `
            }}
          >
            A link in bio built for you.
          </p>

          {/* Subtitle: soft cyan with faint purple glow for readability */}
          <p
            className="text-lg max-w-xl leading-relaxed tracking-wide italic animate-pulse"
            style={{
              color: "#66ffff", // softer neon cyan
              textShadow: `
                0 0 6px #66ffff,
                0 0 12px #aa00ff
              `
            }}
          >
            Join 70M+ people using Linktree for their link in bio. One link to help you share
            everything you create, curate and sell from your Instagram, TikTok, Twitter,
            YouTube and other social media profiles.
          </p>
          <div className="flex items-center gap-3 mt-4 bg-yellow-500 backdrop-blur-md rounded-full p-2 pl-5 border border-white/20 shadow-[0_0_10px_#00ffff] w-[350px] max-w-full">
            <input
              type="text"
              value={text}
              onChange={(e)=>setText(e.target.value)}
              placeholder="Enter Your Handle"
              className="bg-transparent flex-1 text-blue-500 placeholder-gray-300 outline-none text-lg"
            />
            <button
              className="px-5 py-2 rounded-full bg-[#00ffff] text-[#254f1a] font-bold hover:bg-[#00e6e6] transition duration-300 shadow-[0_0_15px_#00ffff]"
              onClick={() =>createTree()}
            >
              Get Started
            </button>
          </div>
        </div>

        <div className="flex justify-center items-center flex-col mr-[10vw]">
          <img src="/home.png" alt="The" />
        </div>
      </section>

     
    </main>
  );
}

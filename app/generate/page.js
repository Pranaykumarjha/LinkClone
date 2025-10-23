"use client"
import React from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { useState } from 'react'
import 'react-toastify/dist/ReactToastify.css'
import { set } from 'mongoose'
import { useSearchParams } from 'next/navigation'
const Generate = () => {
  const searchParams = useSearchParams()
  // const [link, setlink] = useState("")
  // const [linktext, setlinktext] = useState("")
  const [links, setLinks] = useState([{ link: "", linktext: "" }])
  const [handle, sethandle] = useState(searchParams.get("handle") )
  const [pic, setpic] = useState("")
  const [desc, setdesc] = useState("")

  const handleChange = (index, value, linktext) => {
    setLinks((initialLinks) =>{
      return initialLinks.map((item, idx) => {
        if (index === idx) {
          return { link: value, linktext: linktext }
        } else {
          return item
        }
      })}
    );
  }

  // ✅ moved outside submitLinks
  const addLink = () => {
    setLinks(links.concat([{ link: "", linktext: "" }]))
  }

  const submitLinks = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "links": links,   
      "handle": handle,
      "pic": pic,
      "desc": desc
    });
    console.log(raw);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    const r = await fetch("http://localhost:3000/api/add", requestOptions)
    const result = await r.json()
    // toast(result.message)
    if(result.success){
      toast.success(result.message)
      setLinks([{ link: "", linktext: "" }])
      sethandle("")
      setpic("")
    }
    else{
      toast.error(result.message)
    }
  }

  return (
    <>
      <ToastContainer />
      <div className="bg-[#FF7B00] min-h-screen grid grid-cols-2 font-[Poppins] relative overflow-hidden pt-32">


        {/* Left Column */}
        <div className="col1 flex flex-col justify-center items-center p-10 z-10">
          <h1
            className="text-5xl font-extrabold uppercase text-white drop-shadow-[0_0_15px_#000] tracking-widest mb-10"
            style={{
              textShadow: `
              0 0 10px #000,
              0 0 20px #000,
              0 0 30px #FF4500
            `
            }}
          >
            Join Your Ninja Linktree 🍥
          </h1>

          <div className="flex flex-col gap-5 w-[350px]">
            <h2 className='font-semibold text-2xl'>Step 1: Claim Your Handle</h2>
            <div className="mx-4">
              <input
                type="text"
                placeholder="Choose a handle"
                value={handle || ""}
                onChange={e => { sethandle(e.target.value) }}
                className="bg-white/10 text-white placeholder-gray-300 px-5 py-3 rounded-full outline-none backdrop-blur-sm border border-white/20 shadow-[0_0_10px_#FF4500] focus:shadow-[0_0_20px_#FFD700] transition-all duration-300"
              />
            </div>
            <h2 className='font-semibold text-2xl'>Step 2: Add your links!</h2>
            {links && links.map((item, index) => {

              return <div key={index} className="mx-7 flex flex-col gap-3">
                <input
                  type="text"
                  value={item.link || ""}
                  onChange={e => { handleChange(index, e.target.value, item.linktext) }}
                  placeholder="Enter the link "
                  className="bg-white/10 text-white placeholder-gray-300 px-5 py-3 rounded-full outline-none backdrop-blur-sm border border-white/20 shadow-[0_0_10px_#FF4500] focus:shadow-[0_0_20px_#FFD700] transition-all duration-300"
                />
                <input
                  type="text"
                  value={item.linktext || ""}
                  onChange={e => { handleChange(index, item.link, e.target.value) }}
                  placeholder="Enter the link text"
                  className="bg-white/10 text-white placeholder-gray-300 px-5 py-3 rounded-full outline-none backdrop-blur-sm border border-white/20 shadow-[0_0_10px_#FF4500] focus:shadow-[0_0_20px_#FFD700] transition-all duration-300"
                />
              </div>

            })}

            <button
              className="mt-4 bg-[#FF4500] text-white font-bold py-3 rounded-full shadow-[0_0_20px_#FF4500] hover:bg-[#ff5a1e] hover:shadow-[0_0_30px_#FFD700] transition-all duration-300 uppercase tracking-widest"
              onClick={() => { addLink() }}
            >
              Believe It!
            </button>

            <h2 className='font-semibold text-2xl'>Step 3: Add your profile picture and finalize!</h2>
            <div className="mx-7 flex flex-col gap-3">

              <input
                type="text"
                placeholder="Enter the link image"
                value={pic || ""}
                onChange={e => { setpic(e.target.value) }}
                className="bg-white/10 text-white placeholder-gray-300 px-5 py-3 rounded-full outline-none backdrop-blur-sm border border-white/20 shadow-[0_0_10px_#FF4500] focus:shadow-[0_0_20px_#FFD700] transition-all duration-300"
              />
              <input
                type="text"
                placeholder="Enter the link image description"
                value={desc || ""}
                onChange={e => { setdesc(e.target.value) }}
                className="bg-white/10 text-white placeholder-gray-300 px-5 py-3 rounded-full outline-none backdrop-blur-sm border border-white/20 shadow-[0_0_10px_#FF4500] focus:shadow-[0_0_20px_#FFD700] transition-all duration-300"
              />
              <button
                disabled={handle.length===0 || pic.length===0 || links[0].linktext ==="" }
                className="disabled:bg-slate-500 mt-4 bg-[#FF4500] text-white font-bold py-3 rounded-full shadow-[0_0_20px_#FF4500] hover:bg-[#ff5a1e] hover:shadow-[0_0_30px_#FFD700] transition-all duration-300 uppercase tracking-widest"
                onClick={submitLinks}
              >
                Finalize It!
              </button>
            </div>

          </div>
        </div>


        <div className="col2 w-full h-screen flex justify-center items-center relative">

          <div className="absolute w-[400px] h-[400px] bg-[#FFD700]/20 blur-3xl rounded-full"></div>
          <img
            src="/naruto.webp"
            className="h-[80%] object-contain relative z-10 drop-shadow-[0_0_25px_#000]"
            alt="Naruto Theme Generate Page"
          />
        </div>


        <div className="absolute top-0 left-0 w-full h-full  bg-cover opacity-10"></div>
      </div>
    </>
  )
}

export default Generate

import Abdi from "../assets/images/Abdi.jpg"
import axios from "axios"

import {toast, Toaster} from "react-hot-toast"
import { useState } from "react"
import { useEffect } from "react";
import D from "../assets/images/D.jpg"





function Contact () {

const [name, setName] = useState("")
const [organization, setOrganization] = useState("")
const [email, setEmail] = useState("")
const [number, setNumber] = useState("")
const [topic, setTopic] = useState("")
const [description, setDescription] = useState("")



const handleContact = (e) =>{
  e.preventDefault()
  axios.post("http://localhost:3000/create",{
      "Name":name,
      "organization":organization,
      "email": email,
      "number": number,
      "topic": topic,
      "description": description
      
  }).then(()=>{
//  alert("the Message has been sent")
toast.custom((t) => (
  <div
    className={`${
      t.visible ? 'animate-enter' : 'animate-leave'
    } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
  >
    <div className="flex-1 w-0 p-4">
      <div className="flex items-start">
        <div className="flex-shrink-0 pt-0.5">
          <img
            className="h-10 w-10 rounded-full"
            src={D}
            alt=""
          />
        </div>
        <div className="ml-3 flex-1">
          <p className="text-sm font-medium text-gray-900">
            Abdinasir
          </p>
          <p className="mt-1 text-sm text-gray-500">
            we will answer as soon as possible
          </p>
        </div>
      </div>
    </div>
    <div className="flex border-l border-gray-200">
      <button
        onClick={() => toast.dismiss(t.id)}
        className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        Close
      </button>
    </div>
  </div>
))


  }).catch((error)=>{
      console.log(error)
  })
}




    return <div className="flex justify-center  pt-16">
    
          <div className=" flex  gap-4 rounded-md ">
            <div className="sm:p-4">
           
            <h1 className="text-3xl font-bold text-center text-[#282938] ">Contact me </h1>
            

               <div className="pt-5">

                <div className="flex gap-2">

                      <div>
                      <label >
                      name
                    </label>
                    <br />
                    <input  value={name} onChange={(event) => setName(event.target.value)}  className="sm:w-[250px] w-[170px]    p-2 h-[40px] border border-[#5e3bee] rounded-md" type="text" placeholder="" />

                      </div>
                      <div>
                      <label  className="">
                      organization
                    </label>
                    <br />
                     <input value={organization} onChange={(event) => setOrganization(event.target.value)}   className="sm:w-[250px] w-[170px] p-2 h-[40px] border border-[#5e3bee] rounded-md" type="text" placeholder="" />
                                </div>
                </div>

                <div className="flex gap-2">

                      <div>
                      <label >
                      Email
                    </label>
                    <br />
                     <input  value={email} onChange={(event) => setEmail(event.target.value)}  className="sm:w-[250px]  w-[170px]  p-2 h-[40px] border border-[#5e3bee] rounded-md" type="Email" placeholder="" />
                                </div>
                      <div>
                      <label >
                      Phone number
                    </label>
                    <br />
                     <input value={number} onChange={(event) => setNumber(event.target.value)}   className="sm:w-[250px] w-[170px] p-2 h-[40px] border border-[#5e3bee] rounded-md" type="number" placeholder="" /><br />
                                </div>
                </div>
                <label> Topic</label> <br />
                <input value={topic} onChange={(event) => setTopic(event.target.value)}   className="sm:w-[508px] w-[350px] p-2  h-[40px] border border-[#5e3bee] rounded-md" type="text" placeholder="" /><br />
                <label >Message</label><br />

                <textarea value={description} onChange={(event) => setDescription(event.target.value)}  className="rounded-md border  p-2 border-[#5e3bee] " name="" id="" cols="45" sm:cols="66" rows="10"></textarea><br />
                <button onClick={ handleContact  } className="w-[135px] mt h-[50px] border bg-[#5e3bee] hover:bg-white text-white border-[#5e3bee] hover:text-[#5e3bee] ml-[33%] rounded-md">Submit</button>

                </div>
            </div>
        
          </div>
          <div><Toaster/></div>

    </div>
}

export default Contact
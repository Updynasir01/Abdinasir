import Waji from "../assets/images/Waji.png"
import AboutMe from "../assets/images/AboutMe.png"
import { FaCode } from "react-icons/fa6";
import { RiQuillPenLine } from "react-icons/ri";
import { CiSettings } from "react-icons/ci";
import { GrPlan } from "react-icons/gr";
import { FaHtml5 } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import Image from "../assets/images/Image.png"
import { GoArrowUpRight } from "react-icons/go";
import Xal from "../assets/images/Xal.png"
import Moc from "../assets/images/Moc.png"
import { TbHexagonLetterA } from "react-icons/tb";
import { FaStar } from "react-icons/fa";
import Abdi from "../assets/images/Abdi.jpg"
import Contact from "../pages/Contact";
import Footer from "../pages/Footer";
import { ImFacebook } from "react-icons/im";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import SYD from "../assets/images/SYD.jpg"
import SYd from "../assets/images/SYd.png"
import D from "../assets/images/D.jpg"
import { FaCss3 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import abdin from "../assets/Documents/abdin.pdf"
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { NavLink } from "react-router-dom";

function Home (){

    const [Open ,setOpen ]=useState(false)
    const handleOpen =()=>{
        setOpen(true)
    }
    const handleClose =()=>{
        setOpen(false)
    }

    return <div>
        <div>

      
        

      
        <div className="sm:flex gap-7 justify-between py-4 bg-white backdrop-blur-3xl opacity-75 px-6  sm:px-32 sm:fixed top-0 sm:left-0 sm:right-0 items-center ">
            <h1 className="font-bold text-[#1c1e53] flex text-1xl"><TbHexagonLetterA className="text-[#5e3bee] text-2xl" /> BDINASIR</h1>
            <ul style={{display :Open ==true? "block" :""  }} className="sm:flex gap-6 hidden mt-3  text-[#1c1e53] font-medium ">
                <li className=" hover:text-[#5e3bee]"> <a href="">HOME</a> </li>
                <NavLink to="/Contact"> <li className=" hover:text-[#5e3bee]"> CONTACT </li></NavLink>
                <li className=" hover:text-[#5e3bee]"> <a href="#three">ABOUT ME</a></li>
                <li className=" hover:text-[#5e3bee]"> <a href="#four">CASES</a></li>
                <li className=" hover:text-[#5e3bee]"> <a href="#two">SKILLS</a></li>
            </ul>
            <FaBars onClick={handleOpen}   style={{display : Open == true? "none" :""  }}  className="absolute top-5 sm:hidden right-7" />
            <IoMdClose onClick={handleClose}  style={{display : Open == true? "block" :""  }} className="absolute hidden top-5 sm:hidden right-7"  />
            <NavLink to="/Contact"> <button className=" hidden sm:block w-[135px] h-[50px] border hover:bg-[#5e3bee] hover:text-white border-[#5e3bee] text-[#5e3bee] rounded-md">Contact me</button></NavLink>
        </div>

        <section id="one">
        <div className="bg-[#f4fbfe]  h-screen sm:flex justify-between items-center px-6 sm:px-32 pt-14">
            <div className="sm:w-[600px] w-[360px] ">
                <div className="flex gap-2">

                <h1 className="font-semibold  ">Hey, I am Abdinasir</h1>
                <i class="fa-solid fa-hand text-center text-yellow-400 mt-1 text-1xl" ></i>
                </div>
                <h1 className="sm:text-5xl text-3xl    font-bold mt-4 text-[#282938]">I develope <span className="text-[#5e3bee]">website design </span> and brand experience</h1>
                <p className="sm:mt-5 pb-3 mt-4   ">Welcome to my portfolio! Explore my work as a web developer, where creativity meets functionality to bring your ideas to life.</p>

               <button className=" absolute top-[560px] left-32 w-[135px] mt-10 h-[50px] border bg-[#5e3bee] hover:bg-white text-white border-[#5e3bee] hover:text-[#5e3bee] rounded-md"> <a href={abdin} download="abdin" >Download CV</a>  </button>
            </div>
            <div>
                <img className="w-[650px] rounded-2xl" src={SYD} alt="" />
            </div>
            <FaHtml5 className="sm:text-6xl text-3xl  text-orange-500 top-[450px] right-14  absolute  sm:hiden  sm:absolute sm:right-48 sm:top-80 " />
            <FaCss3 className="sm:text-6xl text-3xl top-[450px] right-24   text-blue-500  absolute  sm:hidn sm:absolute sm:right-52 sm:top-96" />
            <RiTailwindCssFill className="sm:text-6xl text-3xl left-20  text-cyan-500 absolute   top-[450px]     sm:absolute sm:left-[800px] sm:top-[410px]" />
            <IoLogoJavascript className="sm:text-6xl text-3xl top-[480px] left-20  text-yellow-500   absolute  sm:absolute sm:left-[850px] sm:top-[340px]" />
            <FaReact className="sm:text-6xl text-3xl top-[450px] left-12  text-blue-500  sm:absolute absolute  sm:left-[800px] sm:top-[360px]" />
            <FaNodeJs  className="sm:text-6xl text-3xl  text-green-500 top-[480px] right-20  absolute sm: sm:absolute sm:right-64 sm:top-80" />
            <SiMongodb className="sm:text-6xl text-3xl top-[490px] left-14   text-green-500  absolute sm: sm:absolute sm:left-[850px] sm:top-[410px] " />
            

        </div>
        </section>

        <section id="two">

        

        <div className=" h-screen p-7  sm:px-32 sm:pt-28 ">
            {/* <h1 className="font-bold">My Skills</h1> */}
            <h1 className="font-bold text-3xl ">My Expertise</h1>

            <div className=" mt-9 grid-cols-1  sm:flex sm:gap-7 ">
                <div className="w-[300px] h-[270px] p-4 rounded-md hover:border-b-4 hover:shadow-lg border-[#5e3bee] bg-[#f5fcff]">
                    
                    <div className="w-[60px] shadow-md p-3 shadwo rounded-md  h-[60px] bg-white ">

                    <GrPlan className="text-4xl text-[#006b6a] "/>
                    
                    </div>
                    <h1 className="text-2xl text-[#282938] font-bold mt-7 ">Strategy & Planing</h1>
                     <p className=" mt-2">Lorem ipsum dolor sit amet Asperiores ratione adipisci quaerat. Nisi eos esse ad natus adipisci, magni dolorem!</p>
                </div>
                <div className="w-[300px] h-[270px] mt-6 p-4 rounded-md hover:border-b-4 hover:shadow-lg border-[#5e3bee] bg-[#f5fcff]">
                    
                    <div className="w-[60px] shadow-md p-3 shadwo rounded-md  h-[60px] bg-white ">

                 
                    <CiSettings className="text-4xl text-[#006b6a] " />
                    </div>
                    <h1 className="text-2xl  text-[#282938] font-bold mt-7 ">Redesignin</h1>
                     <p className="mt-2 ">Lorem ipsum dolor sit amet  Asperiores ratione adipisci quaerat. Nisi eos esse ad natus adipisci, magni dolorem!</p>
                </div>
                <div className="w-[300px] h-[270px] mt-6 p-4 rounded-md hover:border-b-4 hover:shadow-lg border-[#5e3bee] bg-[#f5fcff]">
                    
                    <div className="w-[60px] shadow-md p-3 shadwo rounded-md  h-[60px] bg-white ">

                 
                    <RiQuillPenLine className="text-4xl text-[#006b6a] " />
                    </div>
                    <h1 className="text-2xl font-bold text-[#282938] mt-7 ">UI & UX Design</h1>
                     <p className="mt-2 ">Lorem ipsum dolor sit amet. Asperiores ratione adipisci quaerat. Nisi eos esse ad natus adipisci, magni dolorem!</p>
                </div>
                <div className="w-[300px] h-[270px] mt-6 p-4 rounded-md hover:border-b-4 hover:shadow-lg border-[#5e3bee] bg-[#f5fcff]">
                    
                    <div className="w-[60px] shadow-md p-3 shadwo rounded-md  h-[60px] bg-white ">

                    <FaCode className="text-4xl text-[#006b6a] " />
                    </div>
                    <h1 className="text-2xl text-[#282938] font-bold mt-7 ">Web Development</h1>
                     <p className="mt-2 ">Lorem ipsum dolor sit amet  Asperiores ratione adipisci quaerat. Nisi eos esse ad natus adipisci, magni dolorem!</p>
                </div>
                
            </div>


        </div>
        </section>

        <section id="three">

        
            <div className="sm:mt-24 mt-[550px] sm:h-screen grid grid-cols-1  sm:flex sm:px-32 p-7 sm:pt-28  ">
                <div>
                    

                <img className="w-[2300px] rounded-md" src={D} alt="" />
                </div>
                <div className="sm:ml-64 mt-28">
                    <h1 className="text-4xl font-bold text-[#282938] ">About</h1>
                    <p className=" pt- text-[#282938] text-justify ">
             Hi, I’m Abdinasir, a passionate Full Stack Developer with a knack for creating dynamic and user-friendly web applications. With a strong foundation in both front-end and back-end technologies, I enjoy crafting seamless experiences that bridge the gap between design and functionality.
             My Approach
            I believe in writing clean, maintainable code and staying updated with the latest industry trends. I enjoy tackling complex problems and turning ideas into reality, whether through agile development or leveraging modern frameworks.
             When I’m not coding, you can find me exploring new technologies or contributing to open-source projects. Let’s connect and bring your ideas to life!
                </p>
                </div>
                
          
            </div>
            </section>

            <section id="four">

            

        <div className="sm:px-32 p-7  sm:pt-28 sm:h-screen ">
            <div className="mt-36 flex justify-between h-[50px]">
                <h1 className="font-bold text-3xl">Recent Projects</h1>
                <button className="w-[181px] h-60px rounded-md border-2 hover:bg-[#e62872] hover:text-white border-[#e62872] text-[#e62872] "> <i class="fa-brands fa-github mr-2"></i> <a href="https://github.com/Updynasir01">Visit My GitHub</a>  </button>
            </div>
            <div className="mt-24 h-[560px]  sm:flex grid grid-cols-1 sm:justify-around">
                <div className="h-[470px]  sm:w-[400px] w-[350px]  shadow-md rounded-md">
                    <img src={Image} alt="" />
                    <h1 className="text-2xl px-3 mt-3 font-bold text-[#282938] ">Voting System</h1>
                    <p className="px-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe iure omnis harum illo animi ipsum. </p>
                    <button className="border-b-2 p-2 hover:scale-105 ml-3 font-semibold flex border-[#5e3bee] mt-7">View In GitHub <GoArrowUpRight className="ml-2 mt-1 font-semibold" /></button>

                    
                </div>
                <div className="h-[470px]  sm:w-[400px] mt-7 w-[350px] shadow-md rounded-md">
                    <img src={Xal} alt="" />
                    <h1 className="text-2xl px-3 mt-3 font-bold text-[#282938] ">App Dashboard</h1>
                    <p className="px-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe iure omnis harum illo animi ipsum. </p>
                    <button className="border-b-2 p-2 hover:scale-105 ml-3 font-semibold flex border-[#5e3bee] mt-7">View In GitHub <GoArrowUpRight className="ml-2 mt-1 font-semibold" /></button>

                    
                </div>
                <div className="h-[470px]  sm:w-[400px] mt-7 w-[350px] shadow-md rounded-md">
                    <img src={Moc} alt="" />
                    <h1 className="text-2xl px-3 mt-3 font-semibold text-[#282938] ">Voting System</h1>
                    <p className="px-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe iure omnis harum illo animi ipsum. </p>
                    <button className="border-b-2 p-2 hover:scale-105 ml-3 font-semibold flex border-[#5e3bee] mt-7">View In GitHub <GoArrowUpRight className="ml-2 mt-1 font-semibold" /></button>

                    
                </div>
            </div>


           
             
            

        <div className=" mt-[300px]">
            {/* <Contact className=""/> */}
            <div className="bg-[#f5fcff] mt-24 ">



            <div className="flex gap-5 justify-between h-[200px] px-8 pt-16   ">
           <h1 className="font-bold text-[#1c1e53] flex text-1xl"><TbHexagonLetterA className="text-[#5e3bee] text-2xl" /> BDINASIR</h1>

            <ul className="sm:flex gap-6 text-[#1c1e53] font-medium ">
                <li className=" hover:text-[#5e3bee]">HOME</li>
                <li className=" hover:text-[#5e3bee]">CONTACT</li>
                <li className=" hover:text-[#5e3bee]">ABOUT ME</li>
                <li className=" hover:text-[#5e3bee]">CASES</li>
            </ul>

            <div className="sm:flex gap-2">
           <ImFacebook className="hover:text-[#5e3bee] mt-" />
           <FaTwitter className="hover:text-[#5e3bee] mt-2 " />
           <FaInstagram className="hover:text-[#5e3bee] mt-2 " />
           <FaLinkedinIn className="hover:text-[#5e3bee] mt-2 " />
           </div>

           </div>
           <h1 className="mb-20 text-center border-t-2 ">@2024</h1>
           

          
            </div>
          
        </div>
        
        
        </div>
        </section>
        
           </div>
    </div>
}
export default Home
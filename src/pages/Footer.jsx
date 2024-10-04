import { TbHexagonLetterA } from "react-icons/tb";
function Footer (){
    return <div className="bg-[#f5fcff]">
        <div className="flex justify-between py-4  px-32 fixed bottom left-0 right-0 items-center ">
            <h1 className="font-bold text-[#1c1e53] flex text-1xl"><TbHexagonLetterA className="text-[#5e3bee] text-2xl" /> BDINASIR</h1>
            <ul className="flex gap-6 text-[#1c1e53] font-medium ">
                <li className=" hover:text-[#5e3bee]">HOME</li>
                <li className=" hover:text-[#5e3bee]">CONTACT</li>
                <li className=" hover:text-[#5e3bee]">ABOUT ME</li>
                <li className=" hover:text-[#5e3bee]">CASES</li>
            </ul>
           <div>

           </div>
        </div>

    </div>
}
export default Footer
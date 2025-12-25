
import { useState } from "react";
import type { IconType } from "react-icons";
import { IoIosInformationCircleOutline } from "react-icons/io";

interface cardPropType {
    cardType: string;
    icon: IconType;
    bgColor: string;
    color: string;
    amount: number;
    description: string;
    rate: number;
    explanation: string
}

const Card = ({cardType, icon, bgColor, color, amount, description, rate, explanation}:cardPropType) => {
    const Icon = icon;
    const [showInfo, setShowInfo] = useState<boolean>(false)
  return (
    <div className="w-full border-2 border-secondary rounded-md p-2 shadow-sm relative">
        <div className="flex justify-between items-center mb-6">
            <h6 className="h6">{cardType}</h6>
            <span className="p cursor-pointer">
                <IoIosInformationCircleOutline  
                onMouseOver={() => setShowInfo(true)}
                onMouseOut={() => setShowInfo(false)}/>
            </span>
        </div>

       {/**info**/}
       {showInfo && (<div className="absolute w-40 top-[30%] right-0 border-2 border-secondary rounded-sm p-2 bg-white z-40">
        <p className="text-[12px] text-gray-600">{explanation}</p>
       </div>)}

        <div className="flex gap-2">
            <span className={`text-2xl flex justify-center items-center rounded-sm 
                w-14 h-10 ${bgColor} ${color}`}>
                <Icon/>
            </span>
            <div className="w-full">
                <h2 className="font-semibold text-lg">{amount}</h2>
                <div className="p flex justify-between w-full relative">
                    <p>{description}</p>
                    <p>{rate}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card
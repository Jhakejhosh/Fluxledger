
import type { IconType } from "react-icons";
import { IoIosInformationCircleOutline } from "react-icons/io";

interface cardPropType {
    cardType: string;
    icon: IconType;
    bgColor: string;
    color: string;
    amount: number;
    description: string;
    rate: number
}

const Card = ({cardType, icon, bgColor, color, amount, description, rate}:cardPropType) => {
    const Icon = icon
  return (
    <div className="w-full border-2 border-secondary rounded-md p-2 shadow-sm relative">
        <div className="flex justify-between items-center mb-6">
            <h6 className="h6">{cardType}</h6>
            <span><IoIosInformationCircleOutline/></span>
        </div>
        <div className="flex gap-2">
            <span className={`text-2xl flex justify-center items-center rounded-sm 
                w-10 h-10 ${bgColor} ${color}`}>
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
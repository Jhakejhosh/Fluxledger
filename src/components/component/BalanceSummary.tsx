import Card from "../ui/Card"
import { LiaPiggyBankSolid } from "react-icons/lia";
import { PiEyeSlash, PiPiggyBank } from "react-icons/pi";
import { LuTrendingUpDown } from "react-icons/lu";
import { PiEyeLight } from "react-icons/pi";
import { useState } from "react";


const BalanceSummary = () => {

  const [showAmount, setShowAmount] = useState<boolean>(true);

  return (
    <div className="w-full">
        <div>
            <div className="flex items-center gap-4">
                <h6 className="h6">Total earning</h6>
                <span className="p cursor-pointer" onClick={() => setShowAmount(!showAmount)}>
                  {showAmount ? <PiEyeSlash/> :<PiEyeLight/>}
                </span>
            </div>
            <h1 className="text-3xl py-2">
              {showAmount ? "900,000" : "****"}
              <span className="p">12%</span>
            </h1>
        </div>
        <div className="md:flex gap-4 w-full py-3">
          <Card cardType="Income" icon={LiaPiggyBankSolid} bgColor="bg-greenBg" color="text-green" 
          amount={120000} description="Growth rate" rate={20} explanation="All the money that came into the business during one month (sales, payments, services, etc.)"/>
          <Card cardType="Expenses" icon={PiPiggyBank} bgColor="bg-redBg" color="text-red" 
          amount={30000} description="Spending growth" rate={5} explanation="All the money that went out of the business in one month (rent, supplies, salaries, ads, etc.)"/>
          <Card cardType="Net" icon={LuTrendingUpDown} bgColor="bg-blueBg" color="text-blue" 
          amount={40000} description="Profit/loss" rate={13} explanation="The money you made (or lost) after paying all expenses this month. It tells you if the business is actually profitable or losing money"/>
        </div>
    </div>
  )
}

export default BalanceSummary
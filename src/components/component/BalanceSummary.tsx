import Card from "../ui/Card"
import { LiaPiggyBankSolid } from "react-icons/lia";
import { PiPiggyBank } from "react-icons/pi";
import { LuTrendingUpDown } from "react-icons/lu";


const BalanceSummary = () => {
  return (
    <div className="w-full">
        <div>
            <div>
                <h6 className="h6">Total earning</h6>
            </div>
            <h1 className="text-3xl">900,000<span className="p">12%</span></h1>
        </div>
        <div className="md:flex gap-4 w-full py-3">
          <Card cardType="Income" icon={LiaPiggyBankSolid} bgColor="bg-greenBg" color="text-green" 
          amount={120000} description="Growth rate" rate={20}/>
          <Card cardType="Expenses" icon={PiPiggyBank} bgColor="bg-redBg" color="text-red" 
          amount={30000} description="Spending growth" rate={5}/>
          <Card cardType="Net" icon={LuTrendingUpDown} bgColor="bg-blueBg" color="text-blue" 
          amount={40000} description="Profit/loss" rate={13}/>
        </div>
    </div>
  )
}

export default BalanceSummary
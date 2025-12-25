import BalanceSummary from "../components/component/BalanceSummary"


const Dashboard = () => {
  return (
    <div className="section lg:flex gap-3">
      <div className="lg:w-[70%]">
        <BalanceSummary/>
      </div>
      <div className="border-2 border-secondary rounded-md lg:w-[30%] p-3">Transaction</div>
    </div>
  )
}

export default Dashboard
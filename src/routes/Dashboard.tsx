import BalanceSummary from "../components/component/BalanceSummary"


const Dashboard = () => {
  return (
    <div className="section md:flex gap-3">
      <div className="md:w-[70%]">
        <BalanceSummary/>
      </div>
      <div className="border-2 border-secondary rounded-md w-[30%] p-3">Transaction</div>
    </div>
  )
}

export default Dashboard
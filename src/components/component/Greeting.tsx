import {useState, useEffect} from 'react'
import Profile from './Profile';

const Greeting = () => {

    const [greeting, setGreeting] = useState<string>('');

    useEffect(()=> {
        const updateGreeting = () => {
            const hour = new Date().getHours();

            if(hour < 12) {
                setGreeting("Good morning ⛅")
            }else if(hour < 18) {
                setGreeting("Good afternoon 🌞")
            }else {
                setGreeting("Good evening 🌙")
            }
        }

        updateGreeting();
        //Update every minute (in case user keeps tab open across time change)
        const interval = setInterval(updateGreeting, 60000);

        return () => clearInterval(interval)
    }, [])

  return (
    <div>
        <p className='h1'>{greeting}, Josh</p>
        <p className='p'>Track your income, manage your expenses and control your cash flow</p>
    </div>
  )
}

export default Greeting
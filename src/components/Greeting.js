
import { useState, useEffect } from 'react';


export default function Greeting (){
    // Store time
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        setTime(new Date());
    }, [])
  
    function greet () {
    let currentTime = time.getHours();
    if (currentTime >=0 && currentTime < 12) { 
         return "Good morning traveler,";
        } else if ( currentTime >=12 &&  currentTime <= 17) {
         return "Good afternoon traveler,";
        } else if ( currentTime >=18 &&  currentTime <=21) {
         return "Good evening traveler,";
        } else {
         return "Good night traveler,";
        }
    };


    return (
        <div>
            <p className='greeting'>{greet()}</p>
        </div>
    )
 }
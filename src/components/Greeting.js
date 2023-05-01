import BucketListStyle from '../components/BucketListStyle.css';

export default function Greeting (){
    let greeting;
    let currentTime = new Date().getHours();
    // let time = currentTime >=0 && currentTime < 12
    if ( currentTime >=0 &&  currentTime < 12) { 
         greeting = "Good morning traveler,";
        } else if ( currentTime >=12 &&  currentTime <= 17) {
         greeting = "Good afternoon traveler,";
        } else if ( currentTime >=18 &&  currentTime <=21) {
         greeting = "Good evening traveler,";
        } else {
         greeting = "Good night traveler,";
        }

    return (
        <div>
            <p className='greeting'>{greeting}</p>
        </div>
    )
 }
import { useState, useEffect } from 'react';
import BucketListStyle from '../stylecomponents/BucketListStyle.css';
import Greeting from '../components/Greeting';
import bucket from '../images/bucket.png';
import loadingicon from '../images/loadingicon.gif';
import ReviewSlider from '../components/ReviewSlider';
import scrolldown from '../images/scrolldown.gif';
import bestbrandaward from '../images/bestbrandaward.png';
import trustedaward from '../images/trustedaward.png';
import  from '../images/.png';

export default function BucketListGenerator () {
//API ninja key: MbLwE3pabae3/a63tK6rmA==3c9pVk8icJmzz1Qf
   //anything the user types gets set inside query
   const [idea, setIdea] = useState('');
   const [image, setImage] = useState(false);  
   
   const showBucket = (e) => {
      e.preventDefault();
      setImage(true);
   };

useEffect(() => {

    }, []);

   
    let getBucketList = async (e) => {
      e.preventDefault();

      const API_KEY = process.env.REACT_APP_API_KEY;

      const res = await fetch('https://api.api-ninjas.com/v1/bucketlist', 
      {
      method: 'GET', 
      
      headers: { 
         'Content-Type': 'application/json',

         'X-Api-Key': 'MbLwE3pabae3/a63tK6rmA==3c9pVk8icJmzz1Qf'},
   })

   const data = await res.json();
   // console.log(data.item);
   setIdea(data.item);
    }

   return ( 
        <div className='bucketlist-container'>

         <div className='generator-container'>
            <form>
               <Greeting/>
               <h1>Ready for a Daring Adventure?</h1>

               <p className='quote'><i className='quote-color'>"Don’t kick it, tick it"</i>&mdash; Bucket List by JustGo travel</p>
         
               <button type='submit' onClick={getBucketList}  onClickCapture={showBucket}>Explore Now</button>
               <div className='idea-container'>
                  <h3 className='word-idea'>{idea}</h3>

               {/* Does the image from useState exist? Then show bucket that was imported at the top of page */}
                  {image &&  
            
               <div onClick={() => window.location.reload(true)}><img src={bucket} alt="yellow bucket" className='bucket'/>
            </div>
            }
            </div>
         </form>
         </div>

         <div className='reviews-container'>
         <h1>See What Our Customers Are Saying!</h1>
            <div className='card'>
               <ReviewSlider />
            </div>
            <img src={scrolldown} alt='three scroll down arrows' className='scrolldown-arrow'/>
         </div>

         <div className='awards'>
            <h1>Awards &amp; Recognition</h1>
            <div className='grid-awards'>
               <div className='card-award'><img src={bestbrandaward} alt='best brand award logo'/></div>
               <div className='card-award'><img src={trustedaward} alt='trusted award logo'/></div>
               <div className='card-award'><img src={} alt='premium award logo'/></div>
            </div>
         </div>
        </div>
     );
}

/* 
 <h2>Bucket List Challenge</h2>
 <h2>Terms and Conditions</h2>
 
  {/* Map through challengeTerms list of how to 
}*/
// Fetch API documentation: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch 
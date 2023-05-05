import { useState, useEffect } from 'react';
import BucketListStyle from '../stylecomponents/BucketListStyle.css';
import Greeting from '../components/Greeting';
import bucket from '../images/bucket.png';
import ReviewSlider from '../components/ReviewSlider';
import bestbrandaward from '../images/bestbrandaward.png';
import trustedaward from '../images/trustedaward.png';
import  premium from '../images/premium.png';
import happytraveler from '../images/happytraveler.png';
import BackToTop from '../components/BackToTop';

export default function BucketListGenerator () {

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

      const BUCKET_KEY = process.env.REACT_APP_BUCKET_API_KEY;

      const res = await fetch('https://api.api-ninjas.com/v1/bucketlist', 
      {
      method: 'GET', 
      
      headers: { 
         'Content-Type': 'application/json',
      
         'X-Api-Key': BUCKET_KEY},
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
            
            
               <div><img src={bucket} alt="yellow bucket" className='bucket'/></div>
            }
            </div>
         </form>
         
         <img src={happytraveler} alt='Happy traveler' className='happytraveler'/>
         </div>

         <div className='reviews-container'>
         <h1>See What Our Customers Are Saying!</h1>
            <div className='card'>
               <ReviewSlider />
            </div>
         </div>

         <div className='awards'>
            <h1>Awards &amp; Recognition</h1>
            <div className='grid-awards'>
               <div className='card-award'><img src={bestbrandaward} alt='best brand award logo' className='best'/>
               <p className='fordes'>Fordes 2020</p>
               </div>
               <div className='card-award'><img src={trustedaward} alt='trusted award logo'/>
               <p>Cayak Annual Awards</p>
               </div>
               <div className='card-award'><img src={premium} alt='premium award logo' className='premium'/>
               <p className='newyork'>New York Rimes</p>
               </div>
            </div>
         </div>
         <BackToTop />
         <small className='footer'>Copyright ©2023, Designed by Tahaylia Higgins. All Rights Reserved</small>
        </div>
     );
}

// Fetch API documentation: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch 
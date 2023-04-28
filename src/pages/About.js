import { useState, useEffect } from 'react';
import SearchStyle from '../components/SearchStyle.css';


export default function About () {
//API ninja key: MbLwE3pabae3/a63tK6rmA==3c9pVk8icJmzz1Qf
   //anything the user types gets set inside query
   const [idea, setIdea] = useState('');


   //URL "https://ski-resorts-and-conditions.p.rapidapi.com/v1/resort"

   
   // fetch("https://api.api-ninjas.com/v1/bucketlist", {
      // method: 'GET',
      // url: 'https://api.api-ninjas.com/v1/bucketlist',
      // // headers: { 'X-Api-Key': 'MbLwE3pabae3/a63tK6rmA==3c9pVk8icJmzz1Qf'},
      // contentType: 'application/json',
      // success: function(result) {
         //  console.log(result);
      // },
      // error: function ajaxError(jqXHR) {
         //  console.error('Error: ', jqXHR.responseText);
      // }
//   });
useEffect(() => {

    }, []);

   
    let getBucketList = async (e) => {
      e.preventDefault();
      console.log("anything");
      const res = await fetch('https://api.api-ninjas.com/v1/bucketlist', 
      {
      method: 'GET', 
      
      headers: { 
         'Content-Type': 'application/json',

         'X-Api-Key': 'MbLwE3pabae3/a63tK6rmA==3c9pVk8icJmzz1Qf'},
   } )
   const data = await res.json();
   console.log(data.item);
   setIdea(data.item);
    }


   return ( 
        <div className='search'>
           <h1>Adventure awaits</h1>

            <form>
               <button type='submit' onClick={getBucketList}>Explore Now</button>
               {/* Display on page */}
               <p>{idea}</p>
            </form>
           
        </div>
     );
}

// Fetch API documentation: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch 
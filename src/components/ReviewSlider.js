import { useState, useEffect } from 'react';
import BucketListStyle from '../stylecomponents/BucketListStyle.css';
import Carousel from 'react-elastic-carousel';
import jennymaxwell from '../images/jennymaxwell.jpg';
import johnallen from '../images/johnallen.jpg';
import emmyjames from '../images/emmyjames.jpg';
// import paulwilliams from '../images/paulwilliams.jpg';

export default function ReviewSlider() {
  const [reviews, setReviews] = useState([

    {
        image: jennymaxwell,
        name: "Jenny Maxwell",
        bucketlist: "Hiked to Everest Base Camp",
        comment: "JustGo travel gave me and my husband the opportunity to be adventurous again. Definitely recommend!",
    },
    {
        image: johnallen,
        name: "John Allen",
        bucketlist: "See the Aurora Australis",
        comment: "I’ve been going through a rough patch and just needed a change of scenery. My bestfriend told me about JustGo travel and I’m so glad! Best decision ever!",
    },
        
    {
        image: emmyjames,
        name: "Emmy James",
        bucketlist: "See Killer Whales in the Wild",
        comment: "Really wanted to try something different after sitting at a desk job for 5 years. This is the excitement I was looking for!",
    },
    // {
        // image: paulwilliams,
        // name: "Paul Williams",
        // // bucketlist: "Raft along the Li River in Yangshuo.",
        // // // // comment: "My year of 'yes' led me to trying JustGo travel and I’ve never made a better decision!",
    // }
  ]);

  return (
    <Carousel>
      {reviews.map((review, index) => {
        return (
            <div key={index}>
                <img src={review.image} alt={review.name} className='customer-image'/>
                <h3>{review.name}</h3>
                <h4>{review.bucketlist}</h4>
                <q className='quote'>{review.comment}</q>
            </div>
            )
        }
        )
      }
    </Carousel>
  );
}
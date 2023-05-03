import { useState, useEffect } from 'react';
import topbutton from '../images/topbutton.png';

export default function BackToTop () {

    // set state for button
    const [topBtn, setTopBtn] = useState(false);

    useEffect(() => {
        // Add event listener to trigger topBtn when it detects scrolling
        window.addEventListener("scroll", () => {
            window.scrollY > 500 ?  setTopBtn(true) : setTopBtn(false);
        })
    }, [])

    // Function to bring user back to the page
    function Scroll() {
        window.scrollTo(0,0)
    }

    return (
        <div>
            {topBtn && (
                <img src={topbutton} alt='Back to top button' 
                className='to-top-btn' onClick={Scroll}/>
            )}
            
        </div>
    )
}
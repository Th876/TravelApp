import AboutStyle from '../stylecomponents/AboutStyle.css';
import group1 from '../images/group1.jpg';
import group2 from '../images/group2.jpg';
import group3 from '../images/group3.jpg';
import group4 from '../images/group4.jpg';
import group5 from '../images/group5.jpg';
import partnerslogos from '../images/partnerslogos.svg'; 

function About () {
   return ( 
       <div className="about-container">
         <div className='about-top'>
         <h1>JustGo Travel</h1>
         <strong>Fun. Talented. Passionate.</strong>
         <div className='about-text-grid'>
            <div className='about-left'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisi cras fermentum odio eu feugiat pretium. Nulla aliquet porttitor lacus luctus accumsan. Dictum at tempor commodo ullamcorper a lacus vestibulum. Aliquam purus sit amet luctus venenatis. Vulputate dignissim suspendisse in est ante in nibh mauris cursus. Adipiscing diam donec adipiscing tristique risus nec feugiat. Dictum sit amet justo donec. Aliquet risus feugiat in ante metus dictum at. 
            </div>
            
            <div className='about-right'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisi cras fermentum odio eu feugiat pretium. Nulla aliquet porttitor lacus luctus accumsan. Dictum at tempor commodo ullamcorper a lacus vestibulum. Aliquam purus sit amet luctus venenatis. Vulputate dignissim suspendisse in est ante in nibh mauris cursus. Adipiscing diam donec adipiscing tristique risus nec feugiat. Dictum sit amet justo donec. Aliquet risus feugiat in ante metus dictum at.  
            </div>

            <div className='photo-grid'>
               <div className='group1'><img src={group1} alt='coworkers looking at a laptop screen around a desk'/></div>
               <div className='group2'><img src={group2} alt='coworkers looking at a written document'/></div>
               <div className='group4'><img src={group4} alt='coworkers looking at a laptop screen'/></div>
               <div className='group3'><img src={group3} alt='coworkers looking at a written around a desk'/></div>
               <div className='group5'><img src={group5} alt='coworkers huddling their hands together'/></div>
            </div>

         </div>

            <div className='about-bottom'>
               <h2>Our Partners</h2>
               <img src={partnerslogos} alt="JustGo Travel partners' logo" className='partners-logo'/>

               {/* Insert logos here! */}
            </div>
          </div>
       </div>
    );
}

export default About;
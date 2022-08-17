import React from 'react';
import '../styles/Video.css'
export default function Carousel() {
    return (
      <React.Fragment>   
           
        <div className='vid'>
        <iframe 
       
        src="https://www.youtube.com/embed/MbjBFMKT6Xs" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>

        </iframe>
          </div>
      </React.Fragment>
    );
  }
  
  
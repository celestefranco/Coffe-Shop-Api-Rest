import React from 'react'
import Slide1 from '../../public/image/Slide1.jpg'
import Slide2 from '../../public/image/Slide2.jpg'
import Slide3 from '../../public/image/Slide3.jpg'



export default function Home() {
  return (
    <main>    
      <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false">
          <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={Slide1} className="d-block w-100" alt="Slide 1"/>
              </div>
              <div className="carousel-item">
                <img src={Slide2} className="d-block w-100" alt="Slide 2"/>
              </div>
              <div className="carousel-item">
                <img src={Slide3} className="d-block w-100" alt="Slide 3"/>
              </div>
          </div>
   
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
      </div>

   
   
        
        </main>  
      )
}

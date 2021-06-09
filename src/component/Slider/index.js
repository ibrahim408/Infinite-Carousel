import {useState, useEffect, useRef} from 'react'
import useWindowDimensions from '../../hooks/useWindowDimensions'
import Slide from '../Slide'
import img0 from '../../assets/images/img0.jpeg'
import img1 from '../../assets/images/img1.jpeg'
import img2 from '../../assets/images/img2.jpeg'
import img0Small from '../../assets/images/img0_Small.jpeg'
import img1Small from '../../assets/images/img1_Small.jpeg'
import img2Small from '../../assets/images/img2_Small.jpeg'
import {slide_1, slide_2,slide_3} from '../../data';
import './Slider.css'

function Slider(){
    const [currentSlide,setCurrentSlide] = useState(0);
    const { width } = useWindowDimensions();

    const slideRef = useRef(null)

    useEffect(() => {        
        slideRef.current.style.transitionDuration = '0.5s';
        slideRef.current.style.transform = `translate(-${width * currentSlide}px)`;
    },[currentSlide]);

    useEffect(() => {      
        slideRef.current.style.transitionDuration = '0s';  
        slideRef.current.style.transform = `translate(-${width * currentSlide}px)`;
    },[width]);

    const onPrev = () => {
        if (currentSlide === 0)
            setCurrentSlide(2);
        else
            setCurrentSlide(currentSlide - 1);
    }
    const onNext = () => {
        if (currentSlide === 2)
            setCurrentSlide(0);
        else
            setCurrentSlide(currentSlide + 1);
    }

    // console.log('width: ',width);
    // console.log('currentSlide: ',currentSlide);
    console.log('slide_1: ',slide_1);
    console.log('slide_2: ',slide_2);

    return (
        <div className="slider-container">
              <div style={{display: width < 600 ? 'none' : null}} onClick={onPrev} className="arrow left"></div>
              <div style={{display: width < 600 ? 'none' : null}} onClick={onNext} className="arrow right"></div>
              <div ref={slideRef} className="slide-container">
                <Slide image={img0} imageSmall={img0Small} content={slide_1} slide="one" />
                <Slide image={img1} imageSmall={img1Small} content={slide_2} slide="two"/>
                <Slide image={img2} imageSmall={img2Small} content={slide_3}  slide="three" />
              </div>      
        </div>
    )
}
{/* <button onClick={handleOnLeft}>left</button>
<button onClick={handleOnRight}>right</button> */}


export default Slider;
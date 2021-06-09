import {useState, useEffect, useRef} from 'react'
import useWindowDimensions from '../../hooks/useWindowDimensions'
import Slide from '../Slide'
import img_1 from '../../assets/images/img0.jpeg'
import img_2 from '../../assets/images/img1.jpeg'
import img_3 from '../../assets/images/img2.jpeg'
import img_1_Small from '../../assets/images/img0_Small.jpeg'
import img_2_Small from '../../assets/images/img1_Small.jpeg'
import img_3_Small from '../../assets/images/img2_Small.jpeg'
import {slide_1_data, slide_2_data,slide_3_data} from '../../data';
import './Slider.css'

function Slider(){
    const [currentSlide,setCurrentSlide] = useState(1);
    const slideRef = useRef(null)
    const autoPlay = useRef(null)
    const { width } = useWindowDimensions();


    useEffect(() => {
        autoPlay.current = onNext;
    });

    useEffect(() => {
        let first_slide_clone = slideRef.current.children[0].cloneNode(true);
        let last_card_cline = slideRef.current.children[slideRef.current.children.length - 1].cloneNode(true);

        slideRef.current.insertBefore(last_card_cline,slideRef.current.children[0]);
        slideRef.current.append(first_slide_clone);

        slideRef.current.style.transitionDuration = '0.0s';
        slideRef.current.style.transform = `translate(-${width}px)`;

        const next = () => {
            autoPlay.current();
        }

        const interval = setInterval(next, 5000);
        return () => clearInterval(interval);
    },[]);

    useEffect(() => {        
        slideRef.current.style.transitionDuration = '0.5s';
        slideRef.current.style.transform = `translate(-${width * currentSlide}px)`;

        if (currentSlide === slideRef.current.children.length - 1){
            setTimeout(() => {
                slideRef.current.style.transitionDuration = '0.0s';
                slideRef.current.style.transform = `translate(-${width}px)`;  
                setCurrentSlide(1);
            }, 1500)       
        }

        if (currentSlide === 0 ){
            setTimeout(() => {
                slideRef.current.style.transitionDuration = '0.0s';
                slideRef.current.style.transform = `translate(-${width * (slideRef.current.children.length - 2)}px)`;  
                setCurrentSlide(slideRef.current.children.length - 2);
            }, 1500)            
        }
    },[currentSlide]);

    useEffect(() => {      
        slideRef.current.style.transitionDuration = '0s';  
        slideRef.current.style.transform = `translate(-${width * currentSlide}px)`;
    },[width]);

    const onPrev = () => {
        if (currentSlide > 0){
            setCurrentSlide(currentSlide - 1);
        } 
    }

    const onNext = () => {
        if (currentSlide < slideRef.current.children.length - 1){
            setCurrentSlide(currentSlide + 1);
        }
    }


    return (
        <div className="slider-container">
              <div style={{display: width < 600 ? 'none' : null}} onClick={onPrev} className="arrow left"></div>
              <div style={{display: width < 600 ? 'none' : null}} onClick={onNext} className="arrow right"></div>
              <div ref={slideRef} className="slider-container__slide">
                <Slide image={img_1} imageSmall={img_1_Small} content={slide_1_data} slide="one" />
                <Slide image={img_2} imageSmall={img_2_Small} content={slide_2_data} slide="two"/>
                <Slide image={img_3} imageSmall={img_3_Small} content={slide_3_data}  slide="three" />
              </div>    
              <div className="slider-container__slide__dots">
                <span style={{backgroundColor: currentSlide === 1 ? '#BBB7A4' : null }} className="slider-container__slide__dots__dot"></span>
                <span style={{backgroundColor: currentSlide === 2 ? '#BBB7A4' : null }} className="slider-container__slide__dots__dot"></span>
                <span style={{backgroundColor: currentSlide === 3 ? '#BBB7A4' : null }} className="slider-container__slide__dots__dot"></span>
            </div>  
        </div>
    )
}


export default Slider;
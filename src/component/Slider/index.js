import {useState, useEffect, useRef} from 'react'
import useWindowDimensions from '../../hooks/useWindowDimensions'
import Slide from '../Slide'
import Arrow from './Arrow'
import ToggleSwitch from './ToggleSwitch'
import Dots from './Dots'
import './Slider.css'

function Slider({slides,toggleState,setToggleState}){


    const [timer, setTimer] = useState(3);
    const [currentSlide,setCurrentSlide] = useState(1);
    const timerIdRef = useRef(null);
    const slideRef = useRef(null)
    const autoPlay = useRef(null)
    const { width } = useWindowDimensions();

    useEffect(() => {
        autoPlay.current = onNext;
    });

    useEffect(() => {
        if (timer === 0){
            autoPlay.current();
        }
     }, [timer]);

    useEffect(() => {
        if (slideRef.current.children.length){
            let first_slide_clone = slideRef.current.children[0].cloneNode(true);
            let last_card_cline = slideRef.current.children[slideRef.current.children.length - 1].cloneNode(true);
    
            slideRef.current.insertBefore(last_card_cline,slideRef.current.children[0]);
            slideRef.current.append(first_slide_clone);
    
            slideRef.current.style.transitionDuration = '0.0s';
            slideRef.current.style.transform = `translate(-${width}px)`;
    
            const next = () => {
                setTimer(t => t === 0 ? 3: t - 1);
            }
                
            timerIdRef.current = setInterval(next, 1500);
            return () => clearInterval(timerIdRef.current);

        }
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

    const pauseTimer = () => {
        clearInterval(timerIdRef.current);
    };

    const startTimer = () => {
        const next = () => {
            setTimer(t => t === 0 ? 3: t - 1);
        }
            
        timerIdRef.current = setInterval(next, 1500);
    };



    console.log('timer: ',timer);
    return (
        <div onMouseLeave={startTimer} onMouseEnter={pauseTimer} className="slider-container">
            <Arrow width={width} directionFunction={onPrev} direction="left" />  
            <Arrow width={width} directionFunction={onNext} direction="right" />     
              <div ref={slideRef} className="slider-container__slide">
                {slides.map(slide => 
                    <Slide data={slide} /> 
                )}
              </div>    
            <Dots currentSlide={currentSlide}/>            
            <ToggleSwitch toggleState={toggleState} setToggleState={setToggleState}  />            
        </div>
    )
}


export default Slider;
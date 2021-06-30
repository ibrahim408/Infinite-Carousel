import {useState, useEffect, useRef} from 'react'
import useWindowDimensions from '../../hooks/useWindowDimensions'
import useSwipe from '../../hooks/useSwipe'
import Slide from '../Slide'
import Arrow from './Arrow'
import Dots from './Dots'
import './Slider.css'

function Slider({slides}){

    const [currentSlide,setCurrentSlide] = useState(1);
    const [timer, setTimer] = useState(3);
    const timerIdRef = useRef(null);
    const slideRef = useRef(null)
    const autoPlay = useRef(null)
    const { width } = useWindowDimensions();
    const {touchStart, touchEnd, handleTouchStart, handleTouchMove} = useSwipe();

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
    
            const timerHelper = () => {
                setTimer(t => t === 0 ? 3: t - 1);
            }
                
            timerIdRef.current = setInterval(timerHelper, 1000);
            return () => clearInterval(timerIdRef.current);

        }
    },[]);

    useEffect(() => {     
        if (slideRef?.current?.style){
            slideRef.current.style.transitionDuration = '0.5s';
            slideRef.current.style.transform = `translate(-${width * currentSlide}px)`;


            if (currentSlide >= 4){
                setTimeout(() => {
                    if (slideRef?.current?.style){
                        slideRef.current.style.transitionDuration = '0.0s';
                        slideRef.current.style.transform = `translate(-${width}px)`;  
                        setCurrentSlide(1);
                    }
                }, 1500)       
            }
            if (currentSlide === 0 ){
                setTimeout(() => {
                    if (slideRef?.current?.style){
                        slideRef.current.style.transitionDuration = '0.0s';
                        slideRef.current.style.transform = `translate(-${width * (slideRef.current.children.length - 2)}px)`;  
                        setCurrentSlide(slideRef.current.children.length - 2);
                    }
                }, 1500)            
            }
        }
    },[currentSlide]);

    useEffect(() => {      
        slideRef.current.style.transitionDuration = '0s';  
        slideRef.current.style.transform = `translate(-${width * currentSlide}px)`;
    },[width]);

    const onPrev = () => {
        if (currentSlide > 0){
            setCurrentSlide(currentSlide - 1);
            resetTimer();
        } 
    }

    const onNext = () => {
        if (currentSlide < slideRef.current.children.length - 1){
            setCurrentSlide(currentSlide + 1);
            resetTimer();
        }
    }

    const resetTimer = () => {
        setTimer(3);
    }

    const handlePauseTimer = () => {
        clearInterval(timerIdRef.current);
    };

    const handleStartTimer = () => {
        const next = () => {
            setTimer(t => t === 0 ? 3: t - 1);
        }
            
        timerIdRef.current = setInterval(next, 1000);
    };

    const handleTouchEnd = () => {
        if (touchStart - touchEnd > 150){
            onNext()
        }
        if (touchStart - touchEnd < - 150){
            onPrev();
        }
    }

    return (
        <div className="slider-container"
             onMouseLeave={handleStartTimer} 
             onMouseEnter={handlePauseTimer} 
             onTouchStart={handleTouchStart} 
             onTouchMove={handleTouchMove} 
             onTouchEnd={handleTouchEnd} 
        >
            <Arrow width={width} directionFunction={onPrev} direction="left" />  
            <Arrow width={width} directionFunction={onNext} direction="right" />     
              <div  ref={slideRef} className="slider-container__slide">
                {slides.map(slide => 
                    <Slide data={slide} /> 
                )}
              </div>    
            <Dots currentSlide={currentSlide} timer={timer}/>                  
        </div>
    )
}


export default Slider;
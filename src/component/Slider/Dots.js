import './Slider.css'

const Dots = ({currentSlide, timer}) => {
    
    const color = {
        3: '#000000',
        2: '#808080',
        1: '#A9A9A9',
        0: '#ffffff',
    }
    
    return (
        <div className="slider-container__slide__dots">
            <span style={{backgroundColor: (currentSlide === 1 || currentSlide === 4  ) ? color[timer] : '#ffffff' }} className="slider-container__slide__dots__dot"></span>
            <span style={{backgroundColor: currentSlide === 2 ? color[timer] : '#ffffff' }} className="slider-container__slide__dots__dot"></span>
            <span style={{backgroundColor: (currentSlide === 3 || currentSlide === 0) ? color[timer] : '#ffffff' }} className="slider-container__slide__dots__dot"></span> 
        </div>  
    )
}

export default Dots;

import './Slider.css'

const Dots = ({currentSlide}) => {

    return (
        <div className="slider-container__slide__dots">
            <span style={{backgroundColor: currentSlide === 1 ? '#BBB7A4' : null }} className="slider-container__slide__dots__dot"></span>
            <span style={{backgroundColor: currentSlide === 2 ? '#BBB7A4' : null }} className="slider-container__slide__dots__dot"></span>
            <span style={{backgroundColor: currentSlide === 3 ? '#BBB7A4' : null }} className="slider-container__slide__dots__dot"></span> 
        </div>  
    )
}

export default Dots;





// const num = 3;
// const styles = {
//     borderActive: {
//         backgroundColor: 'BBB7A4',
//         border: `${num}px solid green`
//     },
//     border: {
//         border: `${num}px solid white`
//     }
// }

// <span style={currentSlide === 1 ? styles.borderActive : styles.border }  className="slider-container__slide__dots__dot"></span>
// <span style={currentSlide === 2 ? styles.borderActive : styles.border  }  className="slider-container__slide__dots__dot"></span>
// <span style={currentSlide === 3 ? styles.borderActive : styles.border  }  className="slider-container__slide__dots__dot"></span>
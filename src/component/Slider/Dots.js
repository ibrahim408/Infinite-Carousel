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

// 0 == 3
// 1 === 4


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
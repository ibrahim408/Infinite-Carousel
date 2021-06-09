import React from 'react'
import './Slide.css'
import useWindowDimensions from '../../hooks/useWindowDimensions'

function Slide(props){
    const { width } = useWindowDimensions();

    const styleSlide = {
        one: '',
        two: 'second-slide',
        three: 'third-slide'
    }
    const contentContainer = {
        one: '',
        two: 'align-left',
        three: 'align-right',
    }  
    const buttonContainer = {
        one: 'button-spacing',
        two: '',
        three: '',
    }  

    return (
        <div style={{
            backgroundImage: width > 600 ? `url(${props.image})` : `url(${props.imageSmall})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
        }} className={`slide ${styleSlide[props.slide]}`}>
            <div className={`slide__content-container ${contentContainer[props.slide]}`}>
                <h1>{props.content.header}</h1>
                <p>{props.content.paragraph}</p>
                <div className={`slide__content-container__buttons ${buttonContainer[props.slide]}`}>
                    <div className="slide__content-container__buttons__button">
                        <h3>{props.content.buttonOne}</h3>
                    </div>
                    {props.content.buttonTwo ? 
                        <div className="slide__content-container__buttons__button margin-left">
                            <h3>{props.content.buttonTwo}</h3>
                        </div>
                     : null}
                </div>
            </div>
            <div className="slide__dots">
                <span className="slide__dots__dot"></span>
                <span className="slide__dots__dot"></span>
                <span className="slide__dots__dot"></span>
                <span className="slide__dots__dot"></span>
            </div>
        </div>
    )
}
// const background = {
//     background: "#e0e0e0"
// }

// const styles = {
//     background: {
//     },
//     thirdSlide: {

//     }
// }

export default React.memo(Slide);

// style={{...{
//     backgroundImage: width > 600 ? `url(${props.image})` : `url(${props.imageSmall})`,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     backgroundRepeat: 'no-repeat'
// },...styles.background}}
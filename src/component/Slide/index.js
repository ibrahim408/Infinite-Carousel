import React from 'react'
import './Slide.css'
import useWindowDimensions from '../../hooks/useWindowDimensions'

function Slide({data}){
    const { width } = useWindowDimensions();

    const styleSlide = {
        center: '',
        left: 'second-slide',
        right: 'third-slide'
    }
    const contentContainer = {
        center: '',
        left: 'align-left',
        right: 'align-right',
    }  
    const buttonContainer = {
        center: 'button-spacing',
        left: '',
        right: '',
    }  

    return (
        <div style={{
            backgroundImage: width > 600 ? `url(${data.media.desktop})` : `url(${data.media.mobile})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
        }} className={`slide ${styleSlide[data.ctaPosition]}`}>
            <div className={`slide__content-container ${contentContainer[data.ctaPosition]}`}>
                <h1>{data.title}</h1>
                <p>{data.heading}</p>
                <div className={`slide__content-container__buttons ${buttonContainer[data.ctaPosition]}`}>
                    <div className="slide__content-container__buttons__button">
                        <h3>{data.cta[0].label}</h3>
                    </div>
                    {data.cta.length === 2 ? 
                        <div className="slide__content-container__buttons__button margin-left">
                            <h3>{data.cta[1].label}</h3>
                        </div>
                     : null}
                </div>
            </div>
        </div>
    )
}


export default React.memo(Slide);


import React from 'react'
import './Slide.css'
import useWindowDimensions from '../../hooks/useWindowDimensions'

function Slide({data}){

    const { width } = useWindowDimensions();
    const imageUrl = width > 650 ? data.media.desktop : data.media.mobile;


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
        <div className={`slide ${styleSlide[data.ctaPosition]}`} style={{ backgroundImage:  `url(${imageUrl})`}} >
            <div className={`slide__content-container ${contentContainer[data.ctaPosition]}`}>
                <h1>{data.title}</h1>
                <p>{data.heading}</p>
                <div className={`slide__content-container__buttons ${buttonContainer[data.ctaPosition]}`}>
                    <a href={data.cta[0].url} className="slide__content-container__buttons__button">
                        <h3>{data.cta[0].label}</h3>
                    </a>
                    {data.cta.length === 2 ? 
                        <a href={data.cta[1].url} className="slide__content-container__buttons__button margin-left">
                            <h3>{data.cta[1].label}</h3>
                        </a>
                     : null}
                </div>
            </div>
        </div>
    )
}


export default React.memo(Slide);


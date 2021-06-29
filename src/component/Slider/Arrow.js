import './Slider.css'

const Arrow = ({width,directionFunction,direction}) => {
    return (
        <div style={{display: width < 600 ? 'none' : null}} onClick={directionFunction} className={`arrow ${direction}`}>
        </div>
    )
}

export default Arrow;
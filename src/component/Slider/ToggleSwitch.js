import './Slider.css'

const ToggleSwitch = ({toggleState,setToggleState}) => {
    return (
        <div onClick={() => setToggleState(!toggleState)} className="slider-container__toggle">
            {!toggleState ? <p>Shop</p> : <p>Cars</p>}
        </div>       
    )
}

export default ToggleSwitch;
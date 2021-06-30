import {useState} from 'react'

const useSwipe = () => {
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

    const handleTouchStart = (event) => {
        setTouchStart(event.targetTouches[0].clientX);
    }

    const handleTouchMove = (event) => {
        setTouchEnd(event.targetTouches[0].clientX);
    }

    return {touchStart, touchEnd, handleTouchStart, handleTouchMove}
}

export default useSwipe;
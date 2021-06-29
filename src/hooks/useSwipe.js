import {useState, useEffect} from 'react'

const useSwipe = () => {
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

    const handleTouchStart = (event) => {
        //console.log('start: ',event.targetTouches[0].clientX)
        setTouchStart(event.targetTouches[0].clientX);
    }

    const handleTouchMove = (event) => {
        //console.log('end: ',event.targetTouches[0].clientX)
        setTouchEnd(event.targetTouches[0].clientX);
    }

    // const handleTouchEnd = () => {
    //     console.log('sir');
    //     console.log(' ')
    //     if (touchStart - touchEnd > 200){
    //         onNext()
    //     }
    //     if (touchStart - touchEnd < - 200){
    //         onPrev();
    //     }
    // }

    const handleTest = (event) => {
        console.log('sir sir:',event)
    }

    return {touchStart, touchEnd, handleTouchStart, handleTouchMove}
}

export default useSwipe;
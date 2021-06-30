import { useState } from "react";

const  useToggle = () => {

    const [toggleState,setToggleState] = useState(true);
    
    return {toggleState,setToggleState}
}

export default useToggle;
import { useState } from "react";

export default function useToggle(){

    const [toggleState,setToggleState] = useState(true);
    

    return {toggleState,setToggleState}
}
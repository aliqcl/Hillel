import React, {useState, useEffect} from "react";
import {DEFAULT_COLOR} from '../../constants/todos';


export default function ColorOicker({liftingColor}) {

    const [color, setColor] = useState(DEFAULT_COLOR);

    useEffect(() => {
        liftingColor(color);
    }, [color])

    const handleColorChange = (e) => setColor(e.target.value)

    return <label> Choose color: <input type="color" defaultValue={color} onChange={handleColorChange} /> </label>

}
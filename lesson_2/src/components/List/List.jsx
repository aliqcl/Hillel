import React, {useState, useEffect} from 'react'
import './style.css'

export default function List() {

    const [list, setList] = useState([
        {type: `turtle`, icon: `🐢`},
        {type: `octopus`, icon: `🐙`},
        {type: `fish`, icon: `🐠`},
        {type: `flamingo`, icon: `🦩`},
        {type: `penguin`, icon: `🐧`}
    ]);


    function randomIndex (max) {
      return Math.floor(Math.random() * max);
    }
    

    useEffect(() => {
        let intervalId = setInterval(() => {
            const newList = list.filter((item) => !item.active);
            const itemToUpdate = newList[randomIndex(newList.length)]
            setList(list => 
                list.map((item) => 
                  item === itemToUpdate ? { ...item, active: true } : item
                )
              );
        },1000)

        if (list.every(item => item.active)) {
            console.log("All items are active!");
            clearInterval(intervalId);
            intervalId = null;
            return
        };
        
        return () => clearInterval(intervalId);

    },[list])


    return (
        <table>
            <tbody>
                {list.map((item, index) => <tr key={index} className={item.active === true ? 'active' : ''}>
                    <td>{item.type}</td>
                    <td>{item.icon}</td>
                </tr>)}
            </tbody>
        </table>
    )
}
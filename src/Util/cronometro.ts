import { useState } from "react"

const timers = {
    day: '20',
    hour: '15',
    minut: '00',
    second: '00'
}



export default function Cro(){
    const [timer, setTimer] = useState(timers)
    const [data, setData] = useState({
        days: 0,
        hours: 0,
        minuts: 0,
        seconds: 0,
    })

    const upDateCountDown = () => {
        const currentTime = new Date();
        const days = Math.floor( 1000 / 60 / 60 / 24);
        const hours = Math.floor(1000 / 60 / 60) % 24;
        const minuts = Math.floor(1000 / 60) % 60;
        const seconds = Math.floor(1000) % 60;
        // Salvando nas variáveis useState.
        setData({
          ...data,
          days: days,
          hours: hours,
          minuts: minuts,
          seconds: seconds,
        });
      };

      setInterval(upDateCountDown, 1000);



    return{data}
} 

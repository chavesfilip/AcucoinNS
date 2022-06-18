import { useEffect, useRef, useState } from "react"
import  './styled.css'
import i18n from "../../lang";



export default function Cronometro2(){

    const [timerDays, setTimerDays] = useState('00')
    const [timerHours, setTimerHours] = useState('00')
    const [timerMinutes, setMinutes] = useState('00')
    const [timerSeconds, setTimerSeconds] = useState('00')

    let interval:any  = useRef();

    const startTime = () => {
        const countdownDate = new Date('june 20 2022, 00:00:00:00').getTime();

        interval = setInterval(() => {
            const  now = new Date().getTime();
            const distance = Math.abs((countdownDate - now)/1000);
            const days  = Math.floor(distance / 60 / 60 / 24);
            const hours  = Math.floor(distance / 60 / 60 % 24);
            const minutes  = Math.floor(distance / 60 % 60);
            const seconds  = Math.floor(distance % 60);


                setTimerDays(String(days));
                setTimerHours(String(hours));
                setMinutes(String(minutes));
                setTimerSeconds(String(seconds));


        }, 1000)
    }
    useEffect(() => {
        startTime();
    }, [])



    return (
        <>
             <h1>ICO COMEÇA EM</h1>
             <div className="main-section">
            <div className="number">
                <span className="one">D</span> <br />
                <span>{timerDays}</span>
            </div>
            <div className="number">
                <span>H</span> <br />
                <span className="one">{timerHours}</span>
            </div>
            <div className="number">
                <span>M</span> <br />
                <span className="one">{timerMinutes}</span>
            </div>
            <div className="number">
                <span className="one">S</span> <br />
                <span>{timerSeconds}</span>
            </div>
        </div>
        </>
       
    )
}
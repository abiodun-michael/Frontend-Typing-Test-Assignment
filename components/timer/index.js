import { useState, useEffect } from "react"


const Index = ({duration = 1,...rest})=>{

    const [time, setTime] = useState(0)

    useEffect(()=>{
        setInterval(()=>{
            if((duration * 60) >= (time * 60)){
                setTime(time++)
            }
        },1000)


    },[])

    return(
        <>

        <div className="timer-box" {...rest}>
            <h2>Time Remaining:</h2>
            <h2>{time} / {duration}m</h2>
        </div>
        <style jsx>{`
            .timer-box{
                display:flex;
                justify-content:space-between;
                width:100%;
                margin-top:50px;
            }

            .timer-box h2{
                font-size:20px;
                font-weight:500;
                color:#222222;
            }
        
        `}</style>
        </>
    )
}

export default Index
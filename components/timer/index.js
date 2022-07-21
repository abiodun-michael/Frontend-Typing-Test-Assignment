import { useState, useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { changeIsEnded, changeStatus, addAnswer } from "../../redux/reducer"

const Index = ({...rest})=>{

    const [time, setTime] = useState(60)
    const [elapsed, setElapsed] = useState(0)
    const [active, setActive] = useState(false)


    const {status, isEnded} = useSelector(e=>e.typeData)
    const dispatch = useDispatch()



    useEffect(()=>{
       if(status){
        setInterval(()=>{
            if((time - elapsed) >= 0){
                setElapsed(elapsed++)
            } 
        },1000)
    }

        return ()=>clearInterval()

    },[status,time])


    useEffect(()=>{
        if((time - elapsed) == 0){
            dispatch(changeIsEnded(true))
            dispatch(changeStatus(false))
            clearInterval()
        }
    },[elapsed])

   

    return(
        <>

        <div className="timer-box" {...rest}>
            <div>Time Remaining: {active ?  
            <input id="input"   
                value={time > 60 ? time / 60 : 1} 
                type="number" onBlur={()=>setActive(false)} 
                onChange={(e)=>{
                    setTime(parseInt(e.target.value)* 60)
                    clearInterval()
                    setElapsed(0)
                    dispatch(changeStatus(false))
                    dispatch(changeIsEnded(false))
                }}/>: 
                <span onClick={()=>setActive(true)}>{time - elapsed}s</span>} </div>
                {
                    !status && time - elapsed > 0 ? <button onClick={()=>dispatch(changeStatus(true))}>Start</button>:
                    isEnded ? <button onClick={()=>{
                        dispatch(changeStatus(true))
                        dispatch(changeIsEnded(false))
                        dispatch(addAnswer(""))
                        setElapsed(0)
                    }}>Restart</button>:null
                }
        </div>
       
        <style jsx>{`
            .timer-box{
                width:100%;
                margin-top:50px;
                display:flex;
                justify-content:space-between;
            }

            .timer-box h2{
                font-size:20px;
                font-weight:500;
                color:#222222;
            
            }

            #input{
                width:50px;
                height:30px;
            }
        
        `}</style>
        </>
    )
}

export default Index
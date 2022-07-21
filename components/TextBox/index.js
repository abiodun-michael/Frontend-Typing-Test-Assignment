import Score from '../score'
import { useSelector, useDispatch } from 'react-redux'
import {addChallenge} from '../../redux/reducer'
import { useState } from 'react'




const Index = ()=>{
    const [active, setActive] = useState(true)

    const store = useSelector(e=>e.typeData)

    const dispatch = useDispatch()



    return(
        <>
       
                <div className="container">
                <div id="text-box">
                    <img id='pen' src="/svg/pen.svg" onClick={()=>setActive(!active)}/>
                    <textarea value={store.challenge} disabled={active} onChange={(e)=>dispatch(addChallenge(e.target.value.trim()))}/>
                </div>
                    <Score />
                </div>
            <style jsx>{`

            .container{
                display:flex;
                gap:50px;
                margin-top:50px;
            }
                #text-box{
                    min-height:200px;
                    width:500px;
                    background-color:#f0f0f0;
                    border-radius:4px;
                    padding:25px;
                    position:relative;
                }

                #text-box textarea{
                    height:100%;
                    width:100%;
                    outline:none;
                    border:none;
                    resize:none;
                    font-family:'Roboto', san serif;
                    background:transparent;
                    font-size:15px;
                    line-height:1.5
                }

                #pen{
                    position:absolute;
                    right:10px;
                    top:10px;
                    cursor:pointer;
                    visibility:hidden;
                    transition: visibility 300ms;
                }
                #text-box:hover #pen{
                    visibility:visible
                }
            `}</style>
        </>
    )
}

export default Index
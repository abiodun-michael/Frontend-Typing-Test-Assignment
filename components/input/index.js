import { useSelector, useDispatch } from 'react-redux'
import {addAnswer} from '../../redux/reducer'


const Input = ({...rest})=>{

    const store = useSelector(e=>e.typeData)
    const dispatch = useDispatch()

  

    return(
        <>

        <div id='input-wrapper'>
            {
                store.status && !store.isEnded ? <input {...rest} value={store.answer} onChange={(e)=>dispatch(addAnswer(e.target.value))}/>:
                store.isEnded ? <p>Session Ended</p>:null
            }
        </div>
            

            <style jsx>{`

            #input-wrapper{
                margin-top:150px;
                width:100%;
            }

            #input-wrapper p{
                color:red;
                font-size:20px;
            }
            
                input{
                    height:45px;
                    border:2px solid #f0f0f0;
                    border-radius:4px;
                    outline:none;
                    width:100%;
                    padding:0 10px;
                    transition:border 300ms;
                }

                input:focus{
                    border-color:blue;
                }
            `}</style>
        </>
    )
}

export default Input
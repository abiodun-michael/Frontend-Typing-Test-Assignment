import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'


const Index = ()=>{
    const {challenge, answer} = useSelector(e=>e.typeData)

    const [score, setScore] = useState(0)


    const handleScoreCalculation = ()=>{
        const challengeArray = challenge.split(" ")
        const answerArray = answer.split(" ")
        const filtered = challengeArray.map((item)=>item).filter((i)=>answerArray.includes(i))
        setScore(filtered.length)

    }


    useEffect(()=>{

        handleScoreCalculation()

    },[answer])

    return(
        <>
            <div className="score-wrapper">
                <p>Score</p>
                <h2>{score}/{challenge.split(" ").length}</h2>
            </div>

            <style jsx>{`
                .score-wrapper{
                    text-align:center;
                }

                .score-wrapper p{
                    margin-bottom:10px;
                }
            
            `}</style>
        </>
    )
}

export default Index
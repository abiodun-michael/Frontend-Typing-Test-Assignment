

const Index = ()=>{


    return(
        <>
            <div className="score-wrapper">
                <p>Score</p>
                <h2>0</h2>
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
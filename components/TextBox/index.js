import Score from '../score'

const Index = ()=>{


    return(
        <>
       
                <div className="container">
                <div className="text-box">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                </div>
                <Score />
                </div>
            <style jsx>{`

            .container{
                display:flex;
                gap:50px;
                margin-top:50px;
            }
                .text-box{
                    height:100px;
                    width:500px;
                    background-color:#f0f0f0;
                    border-radius:4px;
                    padding:25px;
                    font-size:15px;
                    line-height:1.5
                }
            `}</style>
        </>
    )
}

export default Index



const Input = ({...rest})=>{

    return(
        <>
            <input {...rest}/>

            <style jsx>{`
            
                input{
                    height:45px;
                    border:2px solid #f0f0f0;
                    border-radius:4px;
                    outline:none;
                    width:100%;
                    margin-top:100px;
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
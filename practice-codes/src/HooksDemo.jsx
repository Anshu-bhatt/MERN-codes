import React from "react";
//counter function using hooks
function HooksDemo(){
    const [counter, setCount] = React.useState(0);
    const [msg, setMessage] = React.useState("");

    const incrementData = () =>{
        if(counter>=5){
            setMessage("Sorry Value is greater than 5")
        }else{
            setCount(counter + 1)
            setMessage("")
        }
    }
        const decrementData = () =>{
            if(counter<=0){
                setMessage("sorry, Value is lesser than 0")
            }else{
                setCount(counter - 1)
                setMessage("")
            }
        }

        return(
            <>
                <h1>Welcome to Hooks!</h1>
                <h1>Counter: {counter}</h1>
                <input type="button" value="Increment" onClick={incrementData} />
                <input type="button" value="Decrement" onClick={decrementData} />
                <input type="button" value="X" onClick={() => setCount(0)} />
                {msg}
            </>
        )
    }
export default HooksDemo;
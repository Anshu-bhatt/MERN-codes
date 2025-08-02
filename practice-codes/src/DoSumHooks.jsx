import React from "react";

function DoSumHooks(){
    const[no1, setNo1] = React.useState(0)
    const[no2, setNo2] = React.useState(0)
    const[choice, setChoice] = React.useState("")
    const[ans, setAns] = React.useState("")

    const doProcess = () =>{
        if(choice=="add"){
            var c= parseInt(no1)+parseInt(no2)
            setAns("Sum is:"+c)
        }
        else if(choice =="sub"){
            var d= parseInt(no1)-parseInt(no2)
            setAns("Sub is:"+d)
        } else{
            setAns("select choice")
        }
    }
    return (
        <div>
            no1: <input type="text" onChange={(e)=>setNo1(e.target.value)}/>
            no2: <input type="text" onChange={(e)=>setNo2(e.target.value)}/>
            choice:
            <input type="radio" onChange={()=>setChoice("add")} name="txt1" value="add" />+
            <input type="radio" onChange={()=>setChoice("sub")} name="txt1" value="sub" />-
            choice: <select onChange={(e)=>setChoice(e.target.value)}>
            <option value="add">Add</option>
            <option value="add">Sub</option>
            </select>
            <input type="button" onClick={doProcess} value="ClickMe"/>
            {ans}
        </div>
    )
}
export default DoSumHooks
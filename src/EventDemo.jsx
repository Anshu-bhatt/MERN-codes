function EventDemo() {
    const demo = ()=>{
        alert("Welcomeee!!")
    }
    const printData = (event) =>{
        // console.log("type is: "+event.type)
        // console.warn("Name is: "+event.target.name)
        // console.error("Value is: "+event.target.value)

        console.log(event.target.value)
    }
    return (
        <>
            <input type="button" onClick={demo} value="ClickMe"/>
            <input type="button" onClick={()=> alert("Inline")} value="Inline"/>
            <input type="button" name="html" value="html" onClick={printData}></input>
            Text1<input type="text" name="txt1" onChange={printData}></input>
            Text2<input type="text" name="txt2" onChange={printData}></input>




        </>
    )
}
export default EventDemo
import React from 'react'
import Header from './Header'

function Home() {
    var a=30
    var b=20
    var mycolor = {color: 'beige', backgroundColor: 'light blue'}
    return (
    <>
        <h1>Home</h1>
        A value is {a} <br/>
        B value is {b} 
        <p style={{color:'red', backgroundColor:'green'}}>Hello i m p tag</p>
        <p style={{color:'red', backgroundColor:'green'}}>Hello i m p tag</p>
        <p style={mycolor}>I am p again</p>
        <p style={mycolor}>I am p again</p>
        <p style={mycolor}>I am p again</p>
    
        </>
        )
}
export default Home
function Header() {
    var myStyle={color:'yellow', backgroundColor:'pink'}
    return (
        <>
            <h1>hello</h1>
            <p > I am from Header file!!!</p>
            <p style={myStyle}> I am from Styled Header file!!!</p>

        </>
      )
}

export default Header;
import React from "react";
import "./loginPage.css";
//completed with using class component

class LoginPage extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className="login-page-root">
                <h1>Login Page</h1>
                <h2>Register</h2>
                Name: <input type="text" name="name" placeholder="Enter your name" onChange={(e)=>this.setState({name:e.target.value})}/>
                Email: <input type="text" name="email" placeholder="Enter your email" onChange={(e)=>this.setState({email:e.target.value})}/>
                Mobile: <input type="text" name="Mobile" placeholder="Enter your mobile number" onChange={(e)=>this.setState({Mobile:e.target.value})}/>
                Semester:S <select onChange={(e)=>this.setState({Semester:e.target.value})}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                </select><br/>
                Gender:
                <div className="gender-group">
                  <label>
                    <input type="radio" name="Gender" value="Male" onChange={(e)=>this.setState({Gender:e.target.value})}/>
                    Male
                  </label>
                  <label>
                    <input type="radio" name="Gender" value="Female" onChange={(e)=>this.setState({Gender:e.target.value})}/>
                    Female
                  </label>
                </div>
                Message: <textarea name="Message" placeholder="Enter your message" onChange={(e)=>this.setState({Message:e.target.value})}/>
                Password: <input type="password" name="Password" placeholder="Enter your password" onChange={(e)=>this.setState({Password:e.target.value})}/> 
                Confirm Password: <input type="password" name="Confirm Password" placeholder="Confirm your password" onChange={(e)=>this.setState({Confirm_password:e.target.value})}/>
                <br/>
                <label>
                <input type="checkbox" onChange={()=>this.setState({Agree:"yes"})}/>
                Agree to terms
                </label>
                {/* <h3>I agree to the terms and conditions</h3>
                <input type="checkbox" name="terms and condition" value="yes"/> */}
                <br/>
                <input type="button" value="Submit"/>
            </div>
        )
    }
}
export default LoginPage;

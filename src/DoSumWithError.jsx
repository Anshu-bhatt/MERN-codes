import React from "react";

class DoSumWithError extends React.Component{
    constructor(props){
        super(props)
        this.state={ errmsg : {}};
    }

    doValidation(){
        const {no1, no2} =this.state    //accessing data from state
        var temperr={} //blank object
        var isValid=false
        //check validations
        if(!no1){
            temperr.text1="Enter no1"
            isValid=false
        }
        if(isNaN(no1)){
            temperr.text1="Enter only digits in no1"
            isValid=false
        }
        if(!no2){
            temperr.text1="Enter no2"
            isValid=false
        }

        //All errors will be assigned to sstate object
        this.setState({errmsg: temperr})

        //return data is valid or not
        return isValid

    }

    doSum(){

        var ans=this.doValidation();
        this.setState({msg:c})
        if(ans==true){
            var c= parseInt(this.state.no1) + parseInt(this.state.no2);
            this.setState({msg:c})
        }
    }
    
    
    render() {
        return(
        <>
            <h1>Sum Demo</h1>
            no1: <input type='text' onChange={(e)=>this.setState({no1: e.target.value})}/>
            no2: <input type='text' onChange={(e)=>this.setState({no2:e.target.value})} />

            <input type='button' onClick={this.doSum.bind(this)}/>
            {this.state.msg}
            {this.state.errmsg}

        </>
        );
    }
}
export default DoSumWithError;
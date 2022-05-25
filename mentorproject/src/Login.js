import React from 'react';
import {Switch,Route} from 'react-router-dom'
class Login extends React.Component{
    state={
        email:'',
        pwd:''
    }
handleChange = (e) =>{
const {nme,value}=e.target
this.setState({[nme]:value})
}
handleSubmit=(e) =>{

}
render(){
    return(
        <div>
            <div>
                <form onSubmit={this.handlesubmit}>
                    <input type='email' nme='email' placeholder='email...' required onChange={this.handleChange}/>
                    <input type='password' nme='pwd' placeholder='password...' required onChange={this.handleChange}/>
                    <button onSubmit>Log In</button>
                    
                </form>

            </div>
        </div>
    )
}

}
export default Login;
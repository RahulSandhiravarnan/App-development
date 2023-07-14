import React,{ Component } from "react";
import './Login.css';
import { Link } from "react-router-dom";

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {Username: '',Password:''};
    }

    handleuName = (eve) => {
        this.setState({Username: eve.target.value});
    };

    handlePass = (eve) => { 
        this.setState({Password: eve.target.value});
    };

    handleSubmit = (eve) => {
        eve.prevantDefault();

        console.log('Username : ', this.state.Username);
        console.log('Password : ',this.state.Password);

        this.setState({Username:'',Password:''});
    };

    render(){
        const{ Username,Password } = this.state;

        return(
            <div style={{backgroundImage: "url(/images/Back.jpg)", minHeight:"150vh", width:"100%", backgroundRepeat: "none", backgroundSize:"cover",position:"fixed"}}>
                <form className='form' onSubmit={this.handleSubmit}>
                    <h2 className="hea">Login Form</h2>
                    <div className='name'>
                        <label className="uName">Username : </label>
                        <input className='in' type="text" placeholder="Enter your Username" onChange={this.handleuName} required></input>
                    </div>
                    <div className='pass'>
                        <label className="uPass">Password : </label>
                        <input className="in2" type="password" placeholder="Enter Your Password" onChange={this.handlePass} required></input>
                    </div>
                    <div>
                    <button className="btn" type="submit"><Link to='/'>Log In</Link></button>
                    </div>
                </form>
                <p className="para">Don't have an account?<Link to='/Register'>Register</Link></p>
            </div>

        );
    }
}

export default Login;
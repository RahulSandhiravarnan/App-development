import { Component } from "react";
import React from "react";
import { Link } from "react-router-dom";
import './Register.css';

class register extends Component{
    constructor(props){
        super(props);
        this.state = {Username:'',email:'',dob:'',gender:'',password:'',cPass:'',};
    }

    handleuName = (eve) =>
    {
        this.setState = ({Username: eve.target.value});
    };

    handleEmail = (eve) =>
    {
        this.setState = ({email: eve.target.value});
    };

    handleDob = (eve) =>
    {
        this.setState = ({dob: eve.target.value});
    };

    handleGender = (eve) =>
    {
        this.setState = ({gender: eve.target.value});
    };

    handlepass = (eve) =>
    {
        this.setState = ({password: eve.target.value});
    };

    handleCpass = (eve) =>
    {
        this.setState = ({cPass: eve.target.value});
    };

    handleSubmit = (eve) =>
    {
        eve.prevantDefault();

        console.log('Username : ',this.state.Username);
        console.log('email : ',this.state.email);
        console.log('Dob : ',this.state.dob);
        console.log('Gender : ',this.state.gender);
        console.log('Password : ',this.state.password);
        console.log('Confirm Password : ',this.state.cPass);

        this.setState({Username:'',email:'',dob:'',gender:'',password:'',cPass:''});
    };

    render(){
        const{ Username,email,dob,gender,password,cPass }=this.state;

        return(
        <div style={{backgroundImage: "url(/images/Back.jpg)", minHeight:"150vh", width:"100%", backgroundRepeat: "none", backgroundSize:"cover",position:"fixed"}}>
            <form className='form1' onSubmit={this.handleSubmit}>
                <h2 className="hea1">Registration Form</h2>
                <div className='uName'>
                    <label className='user'>Username : </label>
                    <input className='in' type='text' placeholder='Enter Your Username' onChange={this.handleuName} required></input>
                </div>
                <div className='email'>
                    <label className='id'>Email Id : </label>
                    <input className='in1' type='email' placeholder='Enter Your Email' onChange={this.handleEmail} required></input>
                </div>
                <div className='dob'>
                    <label className='date'>Date Of Birth : </label>
                    <input className='in2' type='date' onChange={this.handleDob} required></input>
                </div>
                <div className="gen">
                    <label className="gender">Gender : <br/>
                    <select>
                        <option value="Select">Select Your Option</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                    </label>
                </div>
                <div className="pass">
                    <label className="pass1">Password : </label>
                    <input className="p1" type="password" placeholder="Enter Your Password" onChange={this.handlepass} required></input>
                </div>
                <div className='cpass'>
                    <label className='pass2'>Confirm Password : </label>
                    <input className='p2' type='password' placeholder='Enter Your Confirm Password' onChange={this.handleCpass} required></input>
                </div>
                <div>
                    <button className="btn" type="submit"><Link to='/'>Register</Link></button>
                </div>
            </form>
            </div>
        )
    }
}

export default register;

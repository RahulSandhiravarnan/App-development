import React, { Component } from "react";
import './Register.css';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Username: '',
      email: '',
      NOM: '',
      gender: ''
    };
  }

  handleuName = (eve) => {
    this.setState({ Username: eve.target.value });
  };

  handleEmail = (eve) => {
    this.setState({ email: eve.target.value });
  };

  handleNom = (eve) => {
    this.setState({ NOM: eve.target.value });
  };

  handleGender = (eve) => {
    this.setState({ gender: eve.target.value });
  };

  handleSubmit = (eve) => {
    eve.preventDefault();

    console.log('Username: ', this.state.Username);
    console.log('Email: ', this.state.email);
    console.log('NOM: ', this.state.NOM);
    console.log('Gender: ', this.state.gender);

    // Display alert message
    alert("Successfully Reserved");

    this.setState({ Username: '', email: '', NOM: '', gender: '' });
  };

  render() {
    const { Username, email, NOM, gender } = this.state;

    return (
      <div style={{ backgroundImage: "url(/images/Back.jpg)", minHeight: "150vh", width: "100%", backgroundRepeat: "none", backgroundSize: "cover", position: "fixed" }}>
        <form className='form1' onSubmit={this.handleSubmit}>
          <h2 className="hea1">Reservation Form</h2>
          <div className='uName'>
            <label className='user'>Username: </label>
            <input className='in' type='text' placeholder='Enter Your Username' onChange={this.handleuName} value={Username} required></input>
          </div>
          <div className='email'>
            <label className='id'>Email Id: </label>
            <input className='in1' type='email' placeholder='Enter Your Email' onChange={this.handleEmail} value={email} required></input>
          </div>
          <div className='dob'>
          <div className="gen">
            <label className="gender">Gender: <br />
              <select value={gender} onChange={this.handleGender}>
                <option value="Select">Select Your Option</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </label>
          </div>
            <label className='date'>No Of Members</label>
            <input className='in2' type='number' onChange={this.handleNom} value={NOM} required></input>
          </div>
          <div>
            <button className="btn" type="submit">Reserve</button>
          </div>
        </form>
      </div>
    )
  }
}

export default Register;

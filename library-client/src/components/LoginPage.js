import React, { Component } from 'react';
// import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
import {Container, Col,FormGroup, Label, Input, Button,} from 'reactstrap';
// import * as UserActions from '../actions/user.actions'
import axios from 'axios'

class LoginPage extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            email: '' ,
            password: '' ,
            token: ''
        }
        this.handleEmailChange = this.handleEmailChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleEmailChange = (e) => {
      this.setState({ email: e.target.value})
    }

    handlePasswordChange = (e) => {
      this.setState({ password: e.target.value})
    }

    handleSubmit = (e) => {
      e.preventDefault()      
      let data = {
        email : this.state.email,
        password : this.state.password,
      }
      // let headers = {'Content-Type' : "application/json"} 
      // if(!name || !email || !password || !passwordConfirm ) {
      //     alert ('data')
      // };
      // this.props.onSave(name, email, password, passwordConfirm,)
      //  this.setState({ name: '', email: '', password: '', passwordConfirm: '',})
      axios.post('http://localhost:3005/api/user/login', data)
      .then(res => {
        console.log(res);
        this.setState({
            token: res.data.token
        })
        this.props.history.push('/home')
      })
      .catch(err => alert('Email atau password salah'));
        
  } 

    // handleRegister = () => {
    //     if(this.state.password !== this.state.passwordConfirm) {
    //         window.alert('Password')
    //     } 
        
    // }

    render() {
      console.log(this.state);
      return (
        <Container className="App">
          <h2>Login</h2>
            <Col>
              <FormGroup>
                <Label>Email</Label>
                <Input onChange={this.handleEmailChange} value={this.state.email}
                  type="email"
                  name="email"
                  id="exampleEmail"
                  placeholder="myemail@email.com"
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input onChange={this.handlePasswordChange} value={this.state.password}
                  type="password"
                  name="password"
                  id="examplePassword"
                  placeholder="********"
                />
              </FormGroup>
            </Col>
        
            <Button type="submit" value="Submit" onClick={this.handleSubmit}>Submit</Button>
        </Container>
      );
    }
  }
  
// function mapsStateToProps(state) {
//     return {
//         user: state.user
//     }
// }

// function mapDispatchToProps(dispatch) {
//     return {
//         actions: bindActionCreators(UserActions, dispatch)
//     }
// }

// export default connect (
//     mapsStateToProps,
//     mapDispatchToProps
// )(RegisterPage)

export default LoginPage
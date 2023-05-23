import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';
import styled from 'styled-components';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            provider: '',
        }
    }

    // Google Login
    responseGoogle = (res) => {
        this.setState({
            id: res.googleId,
            name: res.profileObj.name,
            provider: 'google'
        });
    }

    // Login Fail
    responseFail = (err) => {
        console.error(err);
    }

    render() {
        return (
            <Container>
                <GoogleLogin
                    clientId={"776077792728-0v8tgb96g69g38e3sb39sr6gfn9qmnb6.apps.googleusercontent.com"}
                    buttonText="Google"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseFail}
                />
            </Container>
        );
    }
}

const Container = styled.div`
    display: flex;
    flex-flow: column wrap;
`


export default Login;
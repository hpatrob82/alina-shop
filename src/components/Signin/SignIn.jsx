import React, { Component } from 'react';
import './styles.scss';
import Button from './../forms/Button';
import { signInWithGoogle } from './../../firebase/utils';

class SignIn extends Component {

    handleSubmit = async (e) => {
        e.preventDefault();
    }
    render() {
return (
    <div className="signIn">
<div className="wrap">
    <h2> Login </h2>

    <div className="fromWrap">
        <form onSubmit={this.handleSubmit}>
            <div className="socialSignin">
                <div className="row">
                    <Button onClick={signInWithGoogle}>
                        Sign in with Google
                    </Button>
                </div>
            </div>
        </form>
    </div>
</div>
    </div>
)
}
}
export default SignIn;
import React, { Component } from 'react';
import './App.css';
import validator from 'validator';

export default class Form extends React.Component {
    state = {
        name: "",
        nameError: "",
        email: "",
        emailError: "",
        username: "",
        usernameError: "",
        password: "",
        passwordError: "",
        confirmPassword: "",
        confirmPasswordError: "",
        url: "",
        urlError: ""
    };

    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onSubmit = e => {
        e.preventDefault();

        let valid = true

        if (this.state.name === '') {
            valid = false
            this.setState({
                nameError: 'Cannot be blank',
                nameClass: 'error'
            })
        } else {
            this.setState({
                nameError: ''
            })
        }

        if (!validator.isEmail(this.state.email)) {
            valid = false
            this.setState({
                emailError: 'Must be a valid email',
                nameClass: 'error'
            })
        } else {
            this.setState({
                emailError: ''
            })
        }

        if (this.state.username === '') {
            valid = false
            this.setState({
                usernameError: 'Cannot be blank',
                nameClass: 'error'
            })
        } else {
            this.setState({
                usernameError: ''
            })
        }

        if (this.state.password === '') {
            valid = false
            this.setState({
                passwordError: 'Cannot be blank',
                nameClass: 'error'
            })
        } else {
            this.setState({
                passwordError: ''
            })
        }

        if (this.state.confirmPassword === this.state.password) {
            this.setState({
                confirmPasswordError: ''
            })
        } else {
            valid = false;

            this.setState({
                confirmPasswordError: 'Must match the password',
                nameClass: 'error'
            })
        }

        if (validator.isURL(this.state.url)) {
            this.setState({
                urlError: ''
            })
        } else {
            valid = false;

            this.setState({
                urlError: 'Must be a valid url',
                nameClass: 'error'
            })

        }

        if (valid) {
            this.props.history.push('/thanks')
        }
    };
    render() {
        return (
            <React.Fragment>
                <meta name="viewport" content="width=device-width"></meta>
                <form className="container">
                    <h1>Profile Form - All fields required</h1>
                    <p>FIRST NAME {this.state.nameError}</p>
                    <input onChange={this.change} value={this.state.name} className={this.state.nameClass} name="name" type="text" placeholder="Michael" />
                    <p>Email {this.state.emailError}</p>
                    <input onChange={this.change} value={this.state.email} className={this.state.nameClass} name="email" type="text" placeholder="email@test.com" />
                    <p>Username {this.state.usernameError}</p>
                    <input onChange={this.change} value={this.state.username} className={this.state.nameClass} name="username" type="text" placeholder="myusername" />
                    <p>Password {this.state.passwordError}</p>
                    <input onChange={this.change} value={this.state.password} className={this.state.nameClass} name="password" type="password" placeholder="Not12345!" />
                    <p>Confirm Password {this.state.confirmPasswordError}</p>
                    <input onChange={this.change} value={this.state.confirmPassword} className={this.state.nameClass} name="confirmPassword" type="password" placeholder="Confirm password" />
                    <p>Website {this.state.urlError}</p>
                    <input onChange={this.change} value={this.state.url} className={this.state.nameClass} name="url" type="text" placeholder="Website" />
                    <button className="submit" onClick={this.onSubmit}>Submit</button>
                </form>
            </React.Fragment>
        )
    }
}


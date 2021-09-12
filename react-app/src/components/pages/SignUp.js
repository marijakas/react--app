import React, { Component } from "react";
import './SignUp.css'
 
export default class SignUp extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          fields: {},
          errors: {},
        };
      }
    
      handleValidation() {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
    
        //Name
        if (!fields["name"]) {
          formIsValid = false;
          errors["name"] = "Cannot be empty";
        }
        if (typeof fields["name"] !== "undefined") {
            if (!fields["name"].match(/^[a-zA-Z]+$/)) {
              formIsValid = false;
              errors["name"] = "Only letters";
            }
          }
      
          if (!fields["lname"]) {
            formIsValid = false;
            errors["lname"] = "Cannot be empty";
          }
          if (typeof fields["lname"] !== "undefined") {
              if (!fields["lname"].match(/^[a-zA-Z]+$/)) {
                formIsValid = false;
                errors["lname"] = "Only letters";
              }
            }

          //Email
          if (!fields["email"]) {
            formIsValid = false;
            errors["email"] = "Cannot be empty";
          }
                
          this.setState({ errors: errors });
          return formIsValid;
        }
        contactSubmit(e) {
            e.preventDefault();
        
            if (this.handleValidation()) {
              alert("Form submitted");
            } else {
              alert("Form has errors.");
            }
          }
        
          handleChange(field, e) {
            let fields = this.state.fields;
            fields[field] = e.target.value;
            this.setState({ fields });
          }
        render() {
        return (
            <div className='mojDiv'>
                <form className="forma"  name="contactform"
           
          onSubmit={this.contactSubmit.bind(this)}>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" ref = 'name' className="form-control" placeholder="First name" onChange={this.handleChange.bind(this, "name")} />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" ref = 'lname' className="form-control" placeholder="Last name" onChange={this.handleChange.bind(this, "lname")} />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" ref='email' className="form-control" placeholder="Enter email" onChange={this.handleChange.bind(this, "email")}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="/log-in">sign in?</a>
                </p>
            </form>
            </div>
            
        );
    
}}
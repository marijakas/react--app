import React, { Component } from "react";
import './SignUp.css'

export default class LogIn extends Component{
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
    
        //Password
        if (!fields["password"]) {
          formIsValid = false;
          errors["password"] = "Cannot be empty";
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
            let fields = this.state.fields;
            if (this.handleValidation()) {
                alert("Successful.");
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
                <form name="contactform"
           
           onSubmit={this.contactSubmit.bind(this)}>
                    <h3>Log In</h3>

                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" ref='email' className="form-control" placeholder="Enter email"  onChange={this.handleChange.bind(this, "email")}/>
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" ref='password' className="form-control" placeholder="Enter password" onChange={this.handleChange.bind(this, "password")}/>
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">Submit</button>
                    
                </form>
            </div>

        );
        }
}
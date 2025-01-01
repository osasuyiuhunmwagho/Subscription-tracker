import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { Card } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Header from './Header';
import "./regorlogin.css";
import { useNavigate } from 'react-router-dom';
const Login = () => {

    const navigate = useNavigate();



    const[errors, setErrors] = useState({
        username : '' ,
        password: ''
        
        });
    const [formData, setFormData] = useState({ 
        username: '', password: ''
        });

    const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData({ ...formData, [name]: value }); // to Update form data dynamically back tp the value
    };
    
    const handlesubmit = (e) => {
        //prevents page from refreshing
        e.preventDefault();
        
        

        const isValid = validator(formData);
        // if fumction is valid sign into homepage
        
        if(isValid){
            navigate("/user");
            console.log("The form is valid", formData);

        }
    }
    
    const validator =(formData) => {
        
        const newErrors= {};
        
        const regexusername = /^[a-zA-Z]+$/ ;
        const regexpassword = /^[a-zA-Z]+$/;
        
        if(regexusername.test(formData.username)){
            console.log('VALID USERNAME!');

        } else {
            newErrors.username = ('username should contain only letters.');
        }
        
        if (regexpassword.test(formData.password)){
            console.log('VALID PASSWORD!');
        }
        else{
            newErrors.password = ('passowrd must be  be.....');
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
        
    }

    return (<>
        <Header/>
        
        <Container className="d-flex justify-content-center align-items-center h-100" style={{
            width: "300px", // Adjust the width to make it bigger
            padding: "30px", // Add padding for content
            borderRadius: "20px", // Adds rounded corners
            backgroundColor: "#ffffff", // White box
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", // Subtle shadow
        }} >
            <h2> Sign in </h2>
            
            <Form onSubmit={handlesubmit}>
                <Form.Label>Username: </Form.Label>
                <Form.Group controlId="username">
                    
                {/* value was necessary in extracting user input */}
                    <Form.Control 
                        className='custom-input' 
                        type="text" placeholder="Enter username(username must contain only letters and numbers)"
                         name="username" 
                         value ={formData.username}  
                         onChange = {handleChange}
                         required />

                        {errors.username && <p className="text-danger" style =
                         {{color: "#B22222"}}>{errors.username}</p>}
                </Form.Group>
                <Form.Label>Password: </Form.Label>
                <Form.Group controlId="password">
                    
                    <Form.Control className="custom-input" 
                        type="password" 
                        placeholder="Enter Password(Password must contain more than 5 characters)" 
                        name="password" 
                        value = {formData.password} 
                        onChange={handleChange}required />
                        {errors.password && <p className="text-danger" style =
                         {{color: "#B22222"}} >{errors.password}</p>}
                </Form.Group>
                <br/>

                <Button className="custom-button" type="submit">Sign Up</Button>
            </Form>
            <div className="mt-3 ">
                <p>Already have an account? <a href="www.google.com">Log in</a></p>
                
            </div>
       
        </Container>

        </>
        
    );
}
export default Login;


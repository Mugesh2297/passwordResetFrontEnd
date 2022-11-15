import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

function RegisterComponent() {
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
           
        },  validate: (values) => {
            let errors = {};
            if (values.name === "") {
                errors.name = "Please Enter Name"
            }
            if (values.email === "") {
                errors.email = "Please Enter Email Id"
            }
            if (values.password === "") {
                errors.password = "Please Enter Password"
            }
            if (values.confirmPassword === "") {
                errors.confirmPassword = "Please Enter Confirm Password"
            }
           

            return errors;
        },
        onSubmit: async (values) => {
            try {
                var response = await axios.post("https://passwordreset.onrender.com/register/signup", values);
                localStorage.setItem("token", response.data);
                alert("User Created");
                navigate("/");
            }
            catch (err) {
                console.log(err.response);
                alert(err.response.data.msg);
            }
        }


    })

  return (
    <div style={{ margin: "10%", paddingLeft: "30%" }}><Typography variant="h4">
    Sign In
</Typography>
    <br />
    <form onSubmit={formik.handleSubmit}>
    <div>
            <TextField id="filled-basic" label="Name"
                name="name"
                variant="filled"
                type="name" style={{ width: "35%" }} placeholder="Enter Your Name"
                value={formik.values.name} onChange={formik.handleChange}
            /><br/>
            <span style={{ color: 'red' }}>{formik.errors.name}</span>

        </div> <br />
        <div>
            <TextField id="filled-basic" label="Email"
                name="email"
                variant="filled"
                type="email" style={{ width: "35%" }} placeholder="Enter Your Email"
                value={formik.values.email} onChange={formik.handleChange}
            /><br/>
            <span style={{ color: 'red' }}>{formik.errors.email}</span>
        </div>
        <br />
        <div>
            <TextField id="filled-basic" label="Password" variant="filled"
                name="password"
                type="password" style={{ width: "35%" }}
                placeholder="Enter Your Password"
                value={formik.values.password} onChange={formik.handleChange}

            /><br/>
            <span style={{ color: 'red' }}>{formik.errors.password}</span>
        </div>
        <br />
        <div>
            <TextField id="filled-basic" label="Confirm Password"
                name="confirmPassword"
                variant="filled"
                type="password" style={{ width: "35%" }} placeholder="Enter confirm Password"
                value={formik.values.confirmPassword} onChange={formik.handleChange}

            /><br/><span style={{ color: 'red' }}>{formik.errors.confirmPassword}</span>
        </div><br />
        <Button variant="contained" type="submit">Register</Button>
              <br /> <br />

      
        


    </form>
    <br />
        


    {/* <h3><Link to={/Resetpassword}>ResetPassword </h3></Link> */}
</div>
  )
}

export default RegisterComponent

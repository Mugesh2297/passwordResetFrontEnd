import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


function LoginComponent() {
    const navigate = useNavigate();
    const [value, setValue] = useState("");
    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validate: (values) => {
            let errors = {};
            if (values.email === "") {
                errors.email = "Please Enter Email Id"
            }
            if (values.password === "") {
                errors.password = "Please Enter Password"
            }

            return errors;
        },

        onSubmit: async (values) => {
            try {
                var response = await axios.post("https://passwordreset.onrender.com/register/signin", values);
                console.log(response)
                localStorage.setItem("token", response.data);
                navigate("/products");


            } catch (err) {
                console.log(err.response.status);
                if (err.response.status = 400) {
                    setValue(err.response.data.msg);

                }
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
                    <TextField id="filled-basic" label="Email"
                        name="email"
                        variant="filled"
                        type="email" style={{ width: "35%" }} placeholder="Enter Your Email"
                        value={formik.values.email} onChange={formik.handleChange}
                    />
                    <br/>                                                
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
               <div>
               <span style={{ color: "red" }}>{value}</span></div>
                <br />
                <Button variant="contained" type="submit">SignIn</Button>
                      <br /> <br />

               <Link to="/register">Don't have an Account Signup</Link>
               <br />  <br />
                <Link to="/resetpassword">Forget Password</Link>
                


            </form>
            <br />
                


            {/* <h3><Link to={/Resetpassword}>ResetPassword </h3></Link> */}
        </div>
    )
}

export default LoginComponent

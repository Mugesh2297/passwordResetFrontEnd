import { Button, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

function Confirm() {
    const navigate = useNavigate();
    const test = useParams()
    let formik = useFormik({
        initialValues: {
            password: "",
            confirmPassword: ""
        },
        validate: (value) => {
            let errors = {}
            //Password;
            if (value.password === "") {
                errors.password = "Enter password"
            }
            if (value.confirmPassword === "") {
                errors.confirmPassword = "Enter confirm password"
            }
            return errors
        },
        onSubmit: async (values) => {
          
            try {
               var response =  await axios.post(`https://passresetbackend22.herokuapp.com/resetpass/${test.id}/${test.token}`, values);
               console.log(response)
                Swal.fire({ title: 'Password reset Successful', text: 'Updated Done', icon: 'success', confirmButtonText: 'Login'});
                navigate("/")

                
            } catch (err) {
               console.log(err.response);
                alert(err.response.data.Message);
                navigate("/")
            }
        }
    });
    return (
        <>
            <div style={{ margin: "10%", paddingLeft: "30%" }}><Typography variant="h4">
           Create a New Password 
        </Typography>
            <br />
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <TextField id="filled-basic" label="Password"
                        name="password"
                        variant="filled"
                        type="password" style={{ width: "35%" }} placeholder="Enter Your Password"
                        value={formik.values.password} onChange={formik.handleChange}
                    />
                    <br/>                                                
                    <span style={{ color: 'red' }}>{formik.errors.password}</span>

                </div>
                <br />
                <div>
                    <TextField id="filled-basic" label="Confirm Password" variant="filled"
                        name="confirmPassword"
                        type="password" style={{ width: "35%" }}
                        placeholder="Repeat Your Password"
                        value={formik.values.confirmPassword} onChange={formik.handleChange}
                    /><br/>
                     <span style={{ color: 'red' }}>{formik.errors.confirmPassword}</span>
                </div>
                <br/>
                <Button variant="contained" type="submit"> Update Password</Button>


            </form>
            <br />
                


            {/* <h3><Link to={/Resetpassword}>ResetPassword </h3></Link> */}
        </div>
        </>
    )
}

export default Confirm;
import React, { useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, TextField, Typography } from "@mui/material";

function Passwordreset() {
  
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
        
        email: "",
       
       
    },  
    validate: (values) => {
        let errors = {};
       
        if (values.email === "") {
            errors.email = "Please Enter Email Id"
        }
        
       

        return errors;
    },
    onSubmit: async (values) => {
        try {
            var response = await axios.post("https://passresetbackend22.herokuapp.com/forgotpassword", values);
          console.log(response)
        }
        catch (err) {
            console.log(err.response);
            alert(err.response.data.msg);
        }
    }


})
  
  return (
    <div style={{ margin: "10%", paddingLeft: "30%" }}><Typography variant="h4">
    Reset Password
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
        <Button variant="contained" type="submit">Reset Password</Button>
              <br /><br />
              
        


    </form>
    <br />
        


    {/* <h3><Link to={/Resetpassword}>ResetPassword </h3></Link> */}
</div>
  );
}

export default Passwordreset;

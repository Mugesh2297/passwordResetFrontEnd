import React, { useState } from "react";
// import { env } from "../config";
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, TextField, Typography } from "@mui/material";

function Passwordreset() {
  // let formik = useFormik({
  //   initialValues: {
  //     email: "",
  //   },
  //   onSubmit: async (values) => {
  //     let user = await axios.post('http://localhost:3001/forgotpassword', values);
  //     console.log(user);
  //     alert(user.data.message);
  //   },
  // });
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
      email: "",
    
  })

  const handleSubmit = async (e) => {
      e.preventDefault();
      const response = await axios.post("https://passresetbackend22.herokuapp.com/forgotpassword", { ...formData });
     console.log(response);
     if(response.status===200){
      alert("Email Sent")
      navigate("/")
     }else{
      alert("Enter Valid email or Existing email")
     }
  }
  return (
    <div style={{ margin: "10%", paddingLeft: "30%" }}><Typography variant="h4">
    Reset Password
</Typography>
    <br />
    <form onSubmit={handleSubmit}>
        <div>
            <TextField id="filled-basic" label="Email"
                name="email"
                variant="filled"
                type="email" style={{ width: "35%" }} placeholder="Enter Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
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
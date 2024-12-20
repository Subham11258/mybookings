import { useEffect } from 'react';
import { Button, Form, Input } from 'antd';
import { LoginUser } from '../../api/users';
import { useNavigate } from 'react-router-dom';
import {message} from 'antd';

function Login() {
      const navigate = useNavigate();
      const onFinish = async(values)=>{
        try{
        console.log(values);
        const response = await LoginUser(values);
        if(response.success){
          localStorage.setItem('token',response.token);
          window.location.href='/';
          message.success('user logged in')
          console.log(response);
        }else{
          message.error(response.error);
        }
        
    }
    catch(err){

      console.log(err);
    }
    
    }


    useEffect(()=>{
      if(localStorage.getItem('token')){
        navigate("/");
      }
    },[])
 return (
 <header className="App-header">
   <main className="main-area mw-500 text-center px-3">
     <section className="left-section">
       <h1>
         Login to MyBookings
       </h1>
     </section>
     <section className="right-section">
       <Form
         layout='vertical'
         onFinish={onFinish}
       >
         <Form.Item
           label="Email"
           htmlFor="email"
           name="email"
           className="d-block"
           rules={[{ required: true, message: "Email is required" }]}
         >
           <Input
             id="email"
             type="text"
             placeholder="Enter your Email"
           ></Input>
         </Form.Item>
         <Form.Item
           label="Password"
           htmlFor="password"
           name="password"
           className="d-block"
           rules={[{ required: true, message: "Password is required" }]}
         >
           <Input
             id="password"
             type="password"
             placeholder="Enter your Password"


           ></Input>
         </Form.Item>
         <Form.Item className="d-block">
           <Button
             type="primary"
             block
             htmlType="submit"
             style={{ fontSize: "1rem", fontWeight: "600" }}
           >
             Login
           </Button>
         </Form.Item>
       </Form>
     </section>
   </main>
   </header>
 )
}




export default Login;

//Protect the route for home page
//If user is logged in only then route for homepage should be accessible
//don't show login page again if user is logged in
//check the token in the local storage
//add a check in login page for local storage
//if token exists take the user to home page
//else ask the user to login
//The route for homepage should be protected
//check if they have a valid token or not and let them go to homepage
//else take them back to the login page
//how to check for validity of the token
//Api call to the backend to check the token for validity
//if the backend says all is well
//let them in or them them login


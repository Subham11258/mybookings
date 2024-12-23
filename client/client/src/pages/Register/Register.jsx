import { useEffect } from 'react';
import { Button, Form, Input } from 'antd';
import { RegisterUser } from '../../api/users';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';

function Register() {
      const navigate = useNavigate();
      const onFinish = async(values)=>{
        try{
        console.log(values);
        const response = await RegisterUser(values);
        if(response.success){
          message.success('User registered successfully! Please login.');
          navigate('/login');
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
         Register to MyBookings
       </h1>
     </section>
     <section className="right-section">
       <Form
         layout='vertical'
         onFinish={onFinish}
       >
         <Form.Item
           label="Name"
           htmlFor="name"
           name="name"
           className="d-block"
           rules={[{ required: true, message: "Name is required" }]}
         >
           <Input
             id="name"
             type="text"
             placeholder="Enter your Name"
           ></Input>
         </Form.Item>
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
             Register
           </Button>
         </Form.Item>
         <Form.Item className="d-block">
           <span>Already have an account? <a href="/login">Login here</a></span>
         </Form.Item>
       </Form>
     </section>
   </main>
   </header>
 )
}


export default Register;

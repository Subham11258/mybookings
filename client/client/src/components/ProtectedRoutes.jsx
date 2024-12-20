import { useEffect,useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { getCurrentUser } from "../api/users.js";
import {message, Menu, Layout} from 'antd';
import { Header } from "antd/es/layout/layout.js";
import {
    HomeOutlined,
    LogoutOutlined,
    ProfileOutlined,
    UserOutlined
} from '@ant-design/icons'
// eslint-disable-next-line react/prop-types
export default function ProtectedRoute({children}){
    const [user,setUser] = useState({});
    const navigate = useNavigate();

    const navItems = [
        {
            label:"Home",
            icon:<HomeOutlined/>,
        },
        {
            label:`${user?user.name:""}`,
            icon:<UserOutlined/>,
            children:[{
                label:<span onClick={()=>{
                    user.isAdmin?navigate("/admin"):navigate("/profile")

                }}>
                    my Profile
                </span>,
                icon:<ProfileOutlined/>
            },
            {
                label:<Link to="/login" onClick={()=>localStorage.removeItem("token")}>Logout</Link>
                ,
                icon:<LogoutOutlined/>,
            }

        ]
        }
        
    ]
    const getValidUser = async()=>{
        try{
            const response = await getCurrentUser();
            
            console.log(response.data.name);
            setUser(response.data);
            

        }
        catch(err){
            console.log(err);
            message.error(err.message);
        }
    }
    useEffect(()=>{
        if(localStorage.getItem('token')){
            getValidUser();
            
        }
        else{
            navigate('/login'); 
        }
    },[])
    return (
        <div>
        <Layout>
        <Header className="d-flex justify-content-between"
        style={{
            position:"sticky",
            top:0,
            zIndex:1,
            width:"100%",
            display:"flex",
            alignItems:"center",
        }}>
        <h3 className="demo-logo text-white m-0" style={{color:"white"}}>MyBookings</h3>
        <Menu theme="dark" mode="horizontal" items={navItems}/>

        
        </Header>
        <div style={{padding:24,minHeight:380,background:'#fff'}}>{children}</div>
        </Layout>
        </div>
        
    )
}
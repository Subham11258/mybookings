import { useEffect,useState } from "react"
import { useNavigate } from "react-router-dom"
import { getCurrentUser } from "../api/users.js";
import {message} from 'antd';
// eslint-disable-next-line react/prop-types
export default function ProtectedRoute({children}){
    const [user,setUser] = useState({});
    const navigate = useNavigate();
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
        <div>{user.name}</div>
            {children}
        </div>
    )
}
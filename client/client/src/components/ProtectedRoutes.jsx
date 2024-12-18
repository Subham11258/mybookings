import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { getCurrentUser } from "../api/users";
export default function ProtectedRoute({children}){
    
    const navigate = useNavigate();
    const getValidUser = async()=>{
        try{
            const response = await getCurrentUser();
            console.log(response);
            navigate('/');

        }
        catch(err){
            console.log(err);
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
            {children}
        </div>
    )
}
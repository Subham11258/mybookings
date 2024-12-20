import { axiosInstance } from "./index";
export const getAllMovies = async()=>{
    try{
        const response = await axiosInstance.get('api/movies/get-all-movies')
        return response.data;
    }
    catch(err){
        console.log(err);
    }
}
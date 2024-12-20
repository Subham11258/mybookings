import { useEffect, useState } from "react"
import { getAllMovies } from "../../api/movies";
import { Table } from "antd";


export default function MovieList() {
    const [movies,setMovies] = useState([]);
  async function getData(){
    const response = await getAllMovies();
    const allMovies = response.data;
    setMovies(allMovies.map((item)=>{
        return {...item,key:`movie${item._id}`}
    }));
  }

  useEffect(()=>{
    getData();
  },[])
  
  const tableHeadings = [{
    title:'Poster',
    dataIndex:'poster',
    render:(text,data)=>{
        return(
            <img src={data.poster} width="75" height="115"/>
        )
    }
  },
  {
    title:'Movie Name',
    dataIndex:"title",
  },
  {
    title:'Description',
    dataIndex:"description",
  },
  {
    title:'Duration',
    dataIndex:"duration",
  },
  {
    title:'Genre',
    dataIndex:"genre",
  },
  {
    title:'Release Date',
    dataIndex:"releaseDate",
  },
  {
    title:'Language',
    dataIndex:"language",
  }
]
  return (
    <Table columns={tableHeadings} dataSource={movies}/>
  )
}

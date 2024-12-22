import { useEffect, useState } from "react"
import { getAllMovies } from "../../api/movies";
import { Button, Table } from "antd";
import MovieForm from "./MovieForm";


export default function MovieList() {
    const [movies,setMovies] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
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
    <>
    <div className="d-flex justify-content-end">
      <Button onClick={()=>{
        setIsModalOpen(true);
      }}>
        Add Movie
      </Button>
    </div>
    {isModalOpen && <MovieForm isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>}
    <Table columns={tableHeadings} dataSource={movies}/>
    </>
  )
}

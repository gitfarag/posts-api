import { useContext, useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import { PostsContext } from '../../context/postsContext';
import { handlePagination } from '../../controller/paginattion.controller';
import "./pagination.css"
const Pagesbar = () => {
    const {setPosts} = useContext(PostsContext)
    const [active, setActive] = useState(1)
    const [next, setNext] = useState(3)

    const handlePage= async (page)=>{
          await handlePagination(page,setActive,setNext,setPosts)
    }



  return (
    <Pagination variant='secondary'>

      <Pagination.First onClick={()=>{handlePage(1)}}/>
      <Pagination.Prev onClick={()=>{handlePage(active-1)}}/>
      <Pagination.Item 
      active={active===1} 
      onClick={()=>{handlePage(1)}}>{1}</Pagination.Item>
      <Pagination.Item 
      active={active===2} 
      onClick={()=>{
        handlePage(2)}}>{2}</Pagination.Item>
      <Pagination.Item 
      active={active===next} 
      onClick={()=>{handlePage(next)}}>{next}</Pagination.Item>
      <Pagination.Next 
      onClick={()=>{handlePage(active+1)}}
      />
      <Pagination.Last onClick={()=>{handlePage(12)}}/>

    </Pagination>
  )
}

export default Pagesbar
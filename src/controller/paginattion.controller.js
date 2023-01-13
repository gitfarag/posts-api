import { getPage } from "./posts.controller"

    const handlePagination = async (page,setActive,setNext,setPosts)=>{
      
        if(page<1){
          const res = await getPage(1)
          setActive(1)
          setPosts(res)
          return 
        }
        if(page>=1 && page<=3){
          const res = await getPage(page)
          setNext(3)
          setActive(page)
          setPosts(res)
          return 
        }
        if(page>3 && page < 13){
          const res = await getPage(page)
          setNext(page)
          setActive(page)
          setPosts(res)
        }
      }

export {handlePagination }
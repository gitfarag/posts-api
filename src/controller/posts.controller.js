import axios from "axios";


    const index = async ()=>{
        try {
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
            return res.data
        } catch (error) {
            console.log(err)
        }
    }

    const getPage = async (page)=>{
        try {
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
            const data =await res.data.slice((page-1)*9,page*9)
            return(data) 
        } catch (error) {
            console.log(error) 
        }
    }

export {index, getPage}
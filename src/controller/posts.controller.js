import axios from "axios";

// this method to get all posts from the endpoint
const index = async () => {
    try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
        return res.data
    } catch (error) {
        console.log(err)
    }
}
// this method to get all posts per page from the endpoint
const getPage = async (page) => {
    try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
        const data = await res.data.slice((page - 1) * 9, page * 9)
        return (data)
    } catch (error) {
        console.log(error)
    }
}

export { index, getPage }
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import NavBar from './components/nav/nav'
import Home from './pages/home/home'
import { PostsContext } from './context/postsContext';
import { useContext, useEffect } from 'react';
import { index } from './controller/posts.controller';
import Footer from './components/footer/footer';
import PostPage from './pages/post/postPage';

function App() {
  const {setPosts} = useContext(PostsContext)
  const handlePosts = async()=>{
    try {
      const res = await index()
      const data = await res.slice(1,9)
      setPosts(data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    handlePosts().catch(err=>{console.log(err)})
  },[])
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route
       path='/'
       element={<Home/>}/>

    <Route
       path='/post-details'
       element={<PostPage/>}/>
       
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App

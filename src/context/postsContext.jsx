import React, { createContext, useState } from "react";

export const PostsContext = createContext(null);

export const PostsContextProvider = ({ children }) => {
  const [posts,setPosts] = useState([])
  const [slides,setSlides] = useState([])
  const [postInfo,setPostInfo] = useState({})

  const value = {
    posts,
    setPosts,
    slides,
    setSlides,
    postInfo,
    setPostInfo
  };

  return (
    <PostsContext.Provider value={value}> {children} </PostsContext.Provider>
  );
};
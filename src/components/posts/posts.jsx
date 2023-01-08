import React, { useContext, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { PostsContext } from "../../context/postsContext";
import Pagesbar from "../Pagination/toolBar";
import PostCard from "../postCard/postCard";
import "./posts.css";

const Posts = () => {
    const {posts} = useContext(PostsContext)
  return (
    <>
      <h2 className="posts-head">Featured Posts </h2>
      
      <Container>
      <Col className="d-flex justify-content-center">
      <Pagesbar/>
      </Col>
        <Row>
          {posts.map((post) => {
            return (
              <Col sm="12" md="4" key={post.id}>
                <PostCard post={post}/>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default Posts;

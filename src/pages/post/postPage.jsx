import React, { useEffect, useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Posts from "../../components/posts/posts";
import { useParams } from "react-router-dom";
import BtnHome from "../../components/btnhome/btnHome";
import { index } from "../../controller/posts.controller";
import { PostsContext } from "../../context/postsContext";

const PostPage = () => {
  const { id } = useParams()
  const { postInfo, setPostInfo } = useContext(PostsContext)

  const handlePost = async () => {
    const res = await index()
    const data = res.filter(e => { return e.id == id })
    setPostInfo(data[0])
  }

  useEffect(() => {
    handlePost().catch(err => console.log(err))
  }, [])
  return (
    <>
      <BtnHome />
      <Container>
        <Row className="pt-5">
          <>
            <Col sm="12" lg="8" className="d-flex justify-content-center">
              <img src={`https://picsum.photos/600/300/?image=${postInfo.id}`} />
            </Col>
            <Col sm="12" lg="4" className="text-start">
              <h3>{postInfo.title}</h3>
              <p>{postInfo.body}</p>
              <p>user id : {postInfo.userId}</p>
              <p>postInfo id : {postInfo.id}</p>
            </Col>
          </>
        </Row>
      </Container>
      <Posts />
    </>
  );
};

export default PostPage;

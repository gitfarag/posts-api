import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { PostsContext } from "../../context/postsContext";
import Posts from "../../components/posts/posts";
import { useNavigate } from "react-router-dom";
import BtnHome from "../../components/btnhome/btnHome";

const PostPage = () => {
  const navigate = useNavigate()
  const { postInfo } = useContext(PostsContext);
  console.log(postInfo);
  return (
<>
<BtnHome/>
<Container>
      <Row className="pt-5">
        {postInfo.id ? (
          <>
            <Col sm="12" lg="8" className="d-flex justify-content-center">
              <img src={`https://picsum.photos/600/300/?image=${postInfo.id}`}/>
            </Col>
            <Col sm="12" lg="4" className="text-start">
              <h3>{postInfo.title}</h3>
              <p>{postInfo.body}</p>
              <p>user id : {postInfo.userId}</p>
              <p>post id : {postInfo.id}</p>
            </Col>
          </>
        ) : (
          "sorry there is no post to show"
        )}
      </Row>
    </Container>
    <Posts/>
</>
  );
};

export default PostPage;

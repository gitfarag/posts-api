import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './post.css'
import { Link } from 'react-router-dom';
import { PostsContext } from "../../context/postsContext";
import { useContext } from 'react';

function PostCard({post}) {
  const{setPostInfo} = useContext(PostsContext)
  const handleClick = ()=>{
    setPostInfo(post)
    window.scrollTo(0,0)
  }

  return (
    <Card className='m-4 a-card'>
      <Card.Img variant="top" src={`https://picsum.photos/600/300/?image=${post.id}`} />
      <Card.Body className='b-body'>
        <Card.Title className='post-title'>"{post.title}.."</Card.Title>
        <Card.Text>
        </Card.Text>
        <Button variant="primary" onClick={handleClick}>
          <Link to={`/post-details/${post.id}`} className="readLink">read post</Link>
        </Button>
      </Card.Body>
    </Card>
  );
}

export default PostCard;
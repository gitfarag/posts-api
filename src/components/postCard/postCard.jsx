import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { PostsContext } from '../../context/postsContext';
import './post.css'
import { useNavigate } from 'react-router-dom';

function PostCard({post}) {
  const {setPostInfo} = useContext(PostsContext)
  const navigate = useNavigate()
  const handleClick = (e)=>{
      e.preventDefault()
      console.log('clicked')
      setPostInfo(post)
      navigate('/post-details')
      window.scrollTo(0,0)
  }
  
  return (
    <Card className='m-4 a-card'>
      <Card.Img variant="top" src={`https://picsum.photos/600/300/?image=${post.id}`} />
      <Card.Body className='b-body'>
        <Card.Title className='post-title'>"{post.title}.."</Card.Title>
        <Card.Text>
        </Card.Text>
        <Button variant="primary" onClick={(e)=>{handleClick(e)}}>Read Post</Button>
      </Card.Body>
    </Card>
  );
}

export default PostCard;
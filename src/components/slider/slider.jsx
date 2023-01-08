import { useContext, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import { PostsContext } from "../../context/postsContext";
import { index } from "../../controller/posts.controller";
import "./slider.css";

const Hero = () => {
  const { slides, setSlides } = useContext(PostsContext);
  const handleSlides = async () => {
    const res = await index();
    const data = await res.slice(0, 5);
    setSlides(data);
  };

  useEffect(() => {
    handleSlides().catch((err) => console.log(err));
  }, []);
  return (
    <Carousel>
      {slides.map((el) => {
        return (
          <Carousel.Item className="mainCar" key={el.id}>
            <img
              src={`https://picsum.photos/600/300/?image=${el.id}`}
              alt=""
              srcSet=""
            />
            <Carousel.Caption className="brief">
              <h3>{el.title}</h3>
              <p>{el.body}</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default Hero;

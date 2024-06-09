import { Container } from "./hero.styled";

const Hero = () => {
  return (
    <Container>
      <div>
        <div className="container-button">
          <button className="bt1">Watch Now</button>
          <button className="bt2">Watch Later</button>
        </div>
      </div>
    </Container>
  );
};

export default Hero;

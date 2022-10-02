import styled from 'styled-components';
import './Cover.css'

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100vh;
  justify-content: center;
  margin: 0 auto;
  text-align: left;

  h1 {
    font-size: clamp(var(--fs-sm), 4vw, var(--fs-lg));
    color: var(--green);
    margin: 0 0 20px 10px;
  }

  h2 {
    color: var(--lightest-slate);
  }

  p {
    text-align: left;
    line-height: 1.5;
    margin-top: 2%;
    font-size: clamp(var(--fs-xs), 4vw, var(--fs-lg));
    width: 50%;

    @media (max-width: 768px) {
      width: 100%;
      margin-top: 4%;
    }
  }
`;

const StyledWrapperDiv = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  margin: 0 auto 20px;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
    margin: 0 auto 35px;
  }

  @media (max-width: 480px) {
    width: 150px;
    height: 150px;
    margin: 0 auto 50px;
  }
`;

const StyledImg = styled.img`
  width: 100%;
  height: auto;
`;

export default function AboutMe() {
  const one = <h1>Hi, my name is</h1>;
  const two = <h2 className='heading'>Adam Ascencio.</h2>;
  const three = <h3 className='heading'>I build things for the web.</h3>;
  const four = (
    <p>
      I'm a former accountant turned full stack web developer who values the honest pursuit of something meaningful. I’m fascinated with front-end development and building real-world applications. 
    </p>
  );

  const items = [one, two, three, four];

  return (
    <StyledSection id='home'>
      <StyledWrapperDiv>
        <StyledImg src='https://i.imgur.com/U2FVrZG.jpg' alt='cover photo' />
      </StyledWrapperDiv>
      {items.map((item, i) => (
        <div key={i}>{item}</div>
      ))}
    </StyledSection>
  );
}
import styled from 'styled-components';
import './Cover.css'

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100vh;
  justify-content: center;
  width: 100%;
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
  }
`;

const StyledWrapperDiv = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin: 0 auto 30px;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
    margin: 0 auto 35px;
  }

  @media (max-width: 480px) {
    width: 150px;
    height: 150px;
    margin: 0 auto 40px;
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
      I am a former accountant turned software engineer who values the honest pursuit of something meaningful. I’m fascinated with front-end development and building real-world applications. I’m looking to work on consumer-facing products that improve people’s lives. 
    </p>
  );

  const items = [one, two, three, four];

  return (
    <StyledSection>
      <StyledWrapperDiv>
        <StyledImg src='https://i.imgur.com/U2FVrZG.jpg' alt='cover photo' />
      </StyledWrapperDiv>
      {items.map((item, i) => (
        <div key={i}>{item}</div>
      ))}
    </StyledSection>
  );
}
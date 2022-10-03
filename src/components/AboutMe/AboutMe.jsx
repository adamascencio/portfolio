import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faBootstrap,
  faReact,
  faNode
 } from '@fortawesome/free-brands-svg-icons';

const StyledSection = styled.section`
  min-height: 100vh;
`;

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
  justify-items: center;
  align-items: start;
  gap: 40px;
  margin-bottom: 100px;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const StyledText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  p {
    text-align: left;
    font-size: clamp(var(--fs-sm), 4vw, var(--fs-lg));
    line-height: 1.5;
    margin-bottom: 20px;
  }
`;

const StyledDivWrapper = styled.div`
  width: clamp(300px, 100%, 600px);
  justify-self: center;

  @media (max-width: 1000px) {
    width: clamp(250px, 40vw, 350px);
  }

  @media (max-width: 480px) {
    width: 60%;
  }
`;

const StyledImg = styled.img`
  width: 100%;
  border-radius: 20px;
`;

const StyledSkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  align-items: center;
  gap: 40px 30px;
  width: 80%;
  margin: 40px 0 0 10%;

  @media (max-width: 1000px) {
    width: 80%;
    margin: 50px auto;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    row-gap: 30px;
    column-gap: 20px;
  }
`;

const StyledSkill = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-size: clamp(var(--fs-sm), 4vw, var(--fs-lg));
    margin: 5px 0;
    color: var(--white);
    text-align: center;
  }
`;

const StyledLogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--green-tint);
  padding: 20px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;

const StyledExpressLogo = styled.span`
  font-family: helvetica, arial, sans-serif;
  font-weight: 100;
  font-size: clamp(var(--fs-sm), 4vw, var(--fs-lg));
  margin: 0;
  color: var(--white);
  align-self: center;
`;

export default function AboutMe() {
  const about = (
    <>
      <p>
        Hi! I'm Adam and I love building things for the web. My passion for coding was sparked when I built my first cat photo app on FreeCodeCamp. I've been hooked ever since.
      </p>

      <p>
         In my previous career as an accountant-auditor, I worked in customer-service oriented roles and gained experience with working in team settings, using Microsoft Excel and other cloud-based accounting software, and creating tests to ensure the organization was achieving its objectives.
      </p>

      <p>
        I'm looking to work on consumer-facing products that improve people's lives. I've recently completed a full-stack software engineering bootcamp at General Assembly. See below for some of the technologies I've been working with recently.
      </p>
    </>
  );

  return (
    <StyledSection id='about'>
      <h1 className='align-heading'>About Me</h1>
      <StyledDiv>
        <StyledText>
          {about}
          <StyledSkillsContainer>
            <StyledSkill>
              <StyledLogoContainer>
                <FontAwesomeIcon icon={faHtml5} size='2x' color={'var(--html5-orange)'} />
              </StyledLogoContainer>
              <p>HTML5</p>
            </StyledSkill>
            <StyledSkill>
              <StyledLogoContainer>
                <FontAwesomeIcon icon={faCss3Alt} size='2x' color={'var(--css3-blue)'} />
              </StyledLogoContainer>
              <p>CSS3</p>
            </StyledSkill>
            <StyledSkill>
              <StyledLogoContainer>
                <FontAwesomeIcon icon={faJsSquare} size='2x' color={'var(--js-yellow)'} />
              </StyledLogoContainer>
              <p>JavaScript</p>
            </StyledSkill>
            <StyledSkill>
              <StyledLogoContainer>
                <FontAwesomeIcon icon={faBootstrap} size='2x' color={'var(--bs-purple)'} />
              </StyledLogoContainer>
              <p>Bootstrap</p>
            </StyledSkill>
            <StyledSkill>
              <StyledLogoContainer>
                <FontAwesomeIcon icon={faReact} size='2x' color={'var(--blue)'} />
              </StyledLogoContainer>
              <p>React</p>
            </StyledSkill>
            <StyledSkill>
              <StyledLogoContainer>
                <FontAwesomeIcon icon={faNode} size='2x' />
              </StyledLogoContainer>
              <p>Node</p>
            </StyledSkill>
            <StyledSkill>
              <StyledLogoContainer>
                <i class="icon-mongodb" style={{transform: 'scale(2.5)', color: 'var(--mongo-green)'}}></i>
              </StyledLogoContainer>
              <p>MongoDB</p>
            </StyledSkill>
            <StyledSkill>
              <StyledLogoContainer>
                <StyledExpressLogo>Express</StyledExpressLogo>
              </StyledLogoContainer>
              <p>Express</p>
            </StyledSkill>
          </StyledSkillsContainer>
        </StyledText>
        <StyledDivWrapper>
          <StyledImg src='https://i.imgur.com/vXY6brV.jpg' alt='about' />
        </StyledDivWrapper>
      </StyledDiv>
    </StyledSection>
  );
}
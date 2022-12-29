import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 50px;
  margin-bottom: 100px;

  div {
    h2 {
      font-size: clamp(var(--fs-xxl),4vw,var(--fs-heading));
      color: var(--lightest-slate);
    }

    p {
      font-size: clamp(var(--fs-lg),4vw,var(--fs-xl));
      color: var(--light-slate);
    }
  }

  @media (min-width: 950px) {
    display: grid; 
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
    grid-template-areas:
      'project1 project1'
      'project2 project3';
    gap: 3% 7%;

    div:first-child {
      grid-area: project1;
      width: 90%;
      justify-self: center;

      div {
        margin: 0 auto;
      }
    }
  }
`;

const StyledProjectDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;

  * {
    margin: 0;
  }
`;

const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 10px;
`;

const StyledWrapperDiv = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 20px;

  @media (max-width: 950px) {
    width: 90%;
  }
`;

const StyledText = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;

  span {
    font-size: clamp(var(--fs-sm),4vw,var(--fs-lg));
  }

  span:last-child, span:nth-child(2) {
    color: var(--white);
    text-decoration: underline;
  }

  span:last-child:hover, span:nth-child(2):hover {
    color: var(--green);
    transform: scale(1.02);
  }
`;

const StyledImg = styled.img`
  width: clamp(300px, 40vw, 400px);
  height: clamp(300px, 40vw, 400px);
  object-fit: cover;

  @media (max-width: 950px) {
    width: 100%;
    height: 100%;
  }
`;

export default function Projects() {
  const projects = [
    {
      name: 'HomeCourt', 
      description: 'A platform to find and create pick-up games in your local community.',
      tech: ['MongoDB', 'Express', 'React', 'Node.js', 'Google Maps API'],
      src: 'https://i.imgur.com/0ZgfHL4.png',
      href: 'https://home-court-cap.herokuapp.com/',
      github: 'https://github.com/adamascencio/HomeCourt'
    },
    {
      name: 'Power List', 
      description: 'A tool for managing important tasks',
      tech: ['MongoDB', 'Express', 'Node.js'],
      src: 'https://i.imgur.com/R6FeFdz.png', 
      href: 'https://the-power-list.herokuapp.com/',
      github: 'https://github.com/adamascencio/The-Power-List'
    },
    {
      name: 'Blackjack', 
      description: 'A simple game of Blackjack',
      tech: ['HTML', 'CSS', 'JavaScript'],
      src: 'https://i.imgur.com/Ipi0qn0.png', 
      href: 'https://adamascencio.github.io/Blackjack/',
      github: 'https://github.com/adamascencio/Blackjack'
    }
  ];

  const projectList = projects.map(project => {
    return (
      <StyledProjectDiv>
        <StyledHeader>
          <h2>{project.name}</h2>
          <p>{project.description}</p>
        </StyledHeader>
        <StyledText>
          <span>{project.tech.join(', ')}</span>
          <span><a href={project.href} target='_blank' rel='noopener noreferrer'>View Deployed App</a></span>
          <span><a href={project.github} target='_blank' rel='noopener noreferrer'>View Github Repo</a></span>
        </StyledText>
        <StyledWrapperDiv>
          <StyledImg src={project.src} alt={project.name} />
        </StyledWrapperDiv>
      </StyledProjectDiv>
    );
  });

  return (
    <section className='Projects heading-margin' id='projects'>
      <h1 className='align-heading'>Projects</h1>
      <StyledContainer>
        {projectList}
      </StyledContainer>
    </section>
  );
}
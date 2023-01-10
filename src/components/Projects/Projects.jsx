import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 50px;
  margin-bottom: 100px;
  text-align: left;

  div {
    h2 {
      font-size: clamp(var(--fs-xxl),5vw,var(--fs-heading));
      color: var(--lightest-slate);
    }

    p {
      font-size: clamp(var(--fs-lg),3.5vw,var(--fs-xl));
      color: var(--light-slate);
    }
  }

  @media (min-width: 768px) {
    display: grid; 
    grid-template-columns: repeat(2, 1fr);
    gap: 75px 50px;
  }
`;

const StyledProjectDiv = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;

  * {
    margin: 0;
  }
`;

const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

const StyledWrapperDiv = styled.div`
  position: relative;

  @media (max-width: 950px) {
    
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
  border-radius: 20px;

  @media (max-width: 950px) {
    width: 100%;
    height: 100%;
  }
`;

export default function Projects() {
  const projects = [
    {
      name: 'Travel Buddy',
      description: 'A web app to find restaurants, hotels, and attractions in a given city.',
      tech: ['React', 'Node.js', 'Google Maps API', 'Google Autocomplete', 'Travel Advisor API'],
      src: 'https://i.imgur.com/Q2z0h0f.png',
      href: 'https://travel-bud-react.netlify.app',
      github: 'https://github.com/adamascencio/Travel-App'
    },
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
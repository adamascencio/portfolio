import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneAlt, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faCodepen } from '@fortawesome/free-brands-svg-icons';

const StyledFooter = styled.footer`
  padding-top: 16px;
  width: 100vw;
  height: auto;
  align-self: end;
  text-align: center;
  background-color: var(--lightest-navy);
`;

const StyledContactContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ul {
    padding: 0;
    width: 50%;
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    justify-content: space-between;

    li {
      font-size: clamp(var(--fs-sm), 1vw, var(--fs-lg));

      svg {
        color: var(--green);
        transform: scale(1.2);
        margin-bottom: 2px;
      }
    }
  }

  ul:last-child {
    justify-content: center;
    column-gap: 30px;
  }

  @media (max-width: 950px) {
    ul:first-child {
      flex-direction: column;
      row-gap: 10px;
    }
  }
`;

export default function Footer() {
  const contactInfo = [
    {
      text: 'ascencioadam@gmail.com',
      icon: faEnvelope,
    },
    {
      text: '562-335-4892',
      icon: faPhoneAlt,
    },
    {
      text: 'Los Angeles, CA',
      icon: faLocationDot,
    }
  ];

  const socialMedia = [
    {
      name: 'GitHub',
      url: 'https://github.com/adamascencio',
      icon: faGithub,
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/adamadevs/',
      icon: faLinkedin
    },
    {
      name: 'Codepen',
      url:'https://codepen.io/adam-ascencio',
      icon: faCodepen
    }
  ];

  const contactInfoList = contactInfo.map((info, index) => {
    return (
      <li key={index}>
        <FontAwesomeIcon icon={info.icon} size='xl' />
        <p>{info.text}</p>
      </li>
    );
  });

  const socialMediaLinks = socialMedia.map((media, index) => {
    return (
      <li key={index}>
        <a href={media.url} target='_blank' rel='noreferrer'>
          <FontAwesomeIcon icon={media.icon} size='2x' />
        </a>
      </li>
    );
  });

  return (
    <StyledFooter id='contact'>
      <FontAwesomeIcon icon='envelope' />
      <StyledContactContainer>
        <ul>
          {contactInfoList}
        </ul>
        <p>Check me out on these platforms!</p>
        <ul>
          {socialMediaLinks}
        </ul>
      </StyledContactContainer>
    </StyledFooter>
  );
}
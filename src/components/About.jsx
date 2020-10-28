import React from "react";
import photo from "../images/photo.jpg";
import twitter from "../images/gorjeo.png";
import linke from "../images/linkedin.png";
import git from "../images/github.png";
import styled, { keyframes } from "styled-components";
import { slideInDown, bounceInLeft, fadeInRight } from "react-animations";

const Profile = styled.div`
  display: grid;
  grid-template-columns: 35% 45%;
  align-items: center;
`;

const ContentImg = styled.div`
  width: 60%;
  margin-left: 12%;
  animation: 1s ${keyframes`${slideInDown}`};
  img {
    width: 100%;
    border-radius: 45%;
  }
`;

const Text = styled.p`
  font-family: "Lato";
  font-weight: bold;
  color: #8100b9;
  width: 45%;
  font-size: 22px;
  animation: 2s ${keyframes`${fadeInRight}`} 0.9s backwards;
`;

const Text2 = styled.p`
  font-family: "Lato";
  font-weight: bold;
  color: #8100b9;
  width: 45%;
  font-size: 22px;
  animation: 2s ${keyframes`${fadeInRight}`} 2s backwards;
`;

const ContentIcon = styled.div`
  display: flex;
  width: 30%;
  justify-content: center;
  margin-top: 2%;
  animation: 2s ${keyframes`${bounceInLeft}`} 4.5s backwards;
`;

const Icon = styled.div`
  width: 30px;
  margin-right: 1rem;
  a img {
    width: 100%;
    color: #006eaf;
  }
`;

const About = () => {
  return (
    <div>
      <Profile>
        <ContentImg>
          <img src={photo} alt="photoProfile" />
        </ContentImg>
        <div>
          <Text>Hi 👋, I'm Juan Andres.</Text>
          <Text2>
            I studied Electronic but my passion is Development Fron-Tend
          </Text2>
        </div>
      </Profile>
      <ContentIcon>
        <Icon>
          <a
            href="https://www.linkedin.com/in/juantuberquia/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linke} alt="linkedin" />
          </a>
        </Icon>
        <Icon>
          <a
            href="https://twitter.com/JuanTuberquiaa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={twitter} alt="twitter" />
          </a>
        </Icon>
        <Icon>
          <a
            href="https://github.com/juantuberquia"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={git} alt="github" />
          </a>
        </Icon>
      </ContentIcon>
    </div>
  );
};

export default About;

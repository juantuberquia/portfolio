import React from "react";
import photo from "../images/photo.jpg";
import twitter from "../images/twitter.png";
import linke from "../images/linkedin.png";
import git from "../images/github.png";
import styled from "@emotion/styled";
import { bounce } from "react-animations";

const Profile = styled.div`
  display: flex;
`;

const DivImg = styled.div`
  width: 25%;
  margin-left: 5%;
  margin-top: -5%;
  img {
    width: 100%;
  }
`;

const Text = styled.p`
  font-family: "Lato";
  font-weight: bold;
  color: #8100b9;
  width: 25%;
  margin-left: 4%;
`;

const ContentIcon = styled.div`
  display: flex;
  width: 32%;
  justify-content: center;
  margin-top: 2%;
`;

const Icon = styled.div`
  width: 30px;
  margin-right: 1rem;
  a img {
    width: 100%;
  }
`;

const About = () => {
  return (
    <div>
      <Profile>
        <DivImg>
          <img src={photo} alt="photoProfile" />
        </DivImg>
        <Text>
          Hi, I'm Juan Andres. Currently full stack web developer at Acamica
        </Text>
      </Profile>
      <ContentIcon>
        <Icon>
          <a href="https://www.linkedin.com/in/juantuberquia/">
            <img src={linke} alt="linkedin" />
          </a>
        </Icon>
        <Icon>
          <a href="https://twitter.com/JuanTuberquiaa">
            <img src={twitter} alt="twitter" />
          </a>
        </Icon>
        <Icon>
          <a href="https://github.com/juantuberquia">
            <img src={git} alt="github" />
          </a>
        </Icon>
      </ContentIcon>
    </div>
  );
};

export default About;

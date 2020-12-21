import React from "react";
import Icons from "./Icons";
import photo from "../images/photo.jpg";
import styled, { keyframes } from "styled-components";
import { slideInDown, fadeInRight } from "react-animations";

const Profile = styled.div`
  display: grid;
  grid-template-columns: 35% 45%;
  align-items: center;
`;

const ContentImg = styled.div`
  width: 60%;
  margin-left: 12%;
  margin-top: 5%;
  animation: 1s ${keyframes`${slideInDown}`};
  img {
    width: 100%;
    border-radius: 45%;
  }
`;

const Text = styled.h1`
  font-family: "Lato";
  font-weight: bold;
  color: #8100b9;
  width: 48%;
  font-size: 2rem;
  animation: 2s ${keyframes`${fadeInRight}`} 0.9s backwards;
`;

const Text2 = styled.p`
  font-family: "Lato";
  font-weight: bold;
  color: #8100b9;
  width: 45%;
  font-size: 1.2rem;
  animation: 2s ${keyframes`${fadeInRight}`} 2.4s backwards;
`;

const About = () => {
  return (
    <div>
      <Profile>
        <ContentImg>
          <img src={photo} alt="photoProfile" />
        </ContentImg>
        <div>
          <Text>
            <span role="img" aria-label="hand">
              👋
            </span>
            Hi <br></br>I'm Juan Andres T.
          </Text>
          <Text2>
            I'm Frontend Developer, passionate about technology. I studied at
            Acamica Full Stack Developer<br></br> If you want to know more about
            me, here are my social networks.
          </Text2>
        </div>
      </Profile>
      <Icons />
    </div>
  );
};

export default About;

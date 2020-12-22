import React, { Fragment } from "react";
import Icons from "./Icons";
import photo from "../images/photo.jpg";
import styled, { keyframes } from "styled-components";
import { slideInDown, fadeInRight } from "react-animations";

const Profile = styled.div`
  display: grid;
  grid-template-columns: 35% 45%;
  align-items: center;
  @media (max-width: 576px) {
    grid-template-columns: 100%;
    margin-top: 12%;
  }
`;

const ContentImg = styled.div`
  width: 60%;
  margin-left: 12%;
  margin-top: 5%;
  animation: 1s ${keyframes`${slideInDown}`};
  @media (max-width: 576px) {
    width: 70%;
    margin-left: auto;
    margin-right: auto;
  }
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
  @media (max-width: 576px) {
    width: 90%;
    font-size: 1.2rem;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }
`;

const Text2 = styled.p`
  font-family: "Lato";
  font-weight: bold;
  color: #8100b9;
  width: 45%;
  font-size: 1.2rem;
  animation: 2s ${keyframes`${fadeInRight}`} 2.4s backwards;
  @media (max-width: 576px) {
    width: 90%;
    font-size: 1.1rem;
    margin-left: auto;
    margin-right: auto;
  }
`;

const About = () => {
  return (
    <Fragment>
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
    </Fragment>
  );
};

export default About;

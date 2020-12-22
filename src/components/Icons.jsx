import React from "react";
import styled, { keyframes } from "styled-components";
import { bounceInLeft } from "react-animations";
import twitter from "../images/gorjeo.png";
import linke from "../images/linkedin.png";
import git from "../images/github.png";

const ContentIcon = styled.div`
  display: flex;
  width: 30%;
  justify-content: center;
  margin-top: 2%;
  animation: 2s ${keyframes`${bounceInLeft}`} 1 backwards;
  @media (max-width: 576px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

const Icon = styled.div`
  width: 30px;
  margin-right: 1rem;

  a img {
    width: 100%;
    color: #006eaf;
  }
`;

const Icons = () => {
  return (
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
  );
};

export default Icons;

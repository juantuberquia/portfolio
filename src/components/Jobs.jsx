import React from "react";
import insurance from "../images/insurance.gif";
import gifos from "../images/gifos.gif";
import admin from "../images/admin.gif";
import crypto from "../images/crypto.gif";
import financial from "../images/financial.gif";
import weather from "../images/weather.gif";
import styled, { keyframes } from "styled-components";
import { Zoom } from "react-slideshow-image";
import { zoomIn } from "react-animations";
import "react-slideshow-image/dist/styles.css";

const GridContainer = styled.div`
  width: 60%;
  margin: 2rem auto 0 auto;
`;

const GridItem = styled.div`
  width: 100%;
  height: 450px;
`;

const Text = styled.div`
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background: rgb(100, 21, 163);
  background: rgb(92, 11, 156);
  background: linear-gradient(
    90deg,
    rgba(92, 11, 156, 1) 0%,
    rgba(165, 51, 255, 1) 100%
  );

  p {
    color: #ffffff;
    font-family: "Lato";
    margin: 0;
    font-size: 20px;
    font-weight: bold;
    letter-spacing: 1px;
  }
`;

const ContentImg = styled.div`
  width: 100%;
  /* background: rgba(30, 29, 29, 0.9);  */

  &:hover {
    /* filter: grayscale(100%); */
    /* filter: opacity(0.4); */

    p {
      display: block;
      animation: 0.2s ${keyframes`${zoomIn}`};
      /* transition: 2s; */
    }

    button {
      display: block;
      animation: 0.2s ${keyframes`${zoomIn}`};
      z-index: 100;
    }

    img {
      filter: opacity(0.1);
      /* filter: grayscale(50%); */

      /* background: rgba(30, 30, 39, 0.9); */
    }
  }
`;

const Image = styled.img`
  width: 100%;
  height: 400px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const Paragraph = styled.p`
  color: #1e0730;
  font-family: "Lato";
  font-weight: bold;
  font-size: 25px;
  letter-spacing: 1px;
  position: relative;
  top: -260px;
  width: 80%;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  display: none;
`;

const Button = styled.button`
  position: relative;
  left: 43%;
  top: -200px;
  width: 15%;
  height: 40px;
  border: none;
  background: #4180f6;
  border-radius: 10px;
  display: none;

  :hover {
    background: rgb(100, 21, 163);
    background: rgb(92, 11, 156);
    background: linear-gradient(
      90deg,
      rgba(92, 11, 156, 1) 0%,
      rgba(165, 51, 255, 1) 100%
    );
  }

  a {
    text-decoration: none;
    color: #ffffff;
    font-family: "Lato";
    margin: 0;
    font-size: 20px;
    letter-spacing: 1px;
  }
`;

const proprietes = {
  // duration: 5000,
  transitionDuration: 1000,
  infinite: true,
  indicators: true,
  // arrows: true,
};

const Jobs = () => {
  return (
    <GridContainer className="slide-container">
      <Zoom {...proprietes} scale={0.4}>
        <GridItem>
          <Text>
            <p> Insurance Your Car</p>
          </Text>
          <ContentImg>
            <Image src={insurance} alt="insuran" />
            <Paragraph>
              HTML, spinner CSS, React.js, react-transition-group and styled
              components
            </Paragraph>
            <Button>
              <a href="https://insuranceyourcar.netlify.app" target="_blanck">
                Project
              </a>
            </Button>
          </ContentImg>
        </GridItem>
        <GridItem>
          <Text>
            <p> Gifos Project</p>
          </Text>
          <ContentImg>
            <Image src={gifos} alt="gif" />
            <Paragraph>
              HTML, CSS, Javascript and consuming the Giphy API'S
            </Paragraph>
            <Button>
              <a href="https://gifosproject.netlify.app" target="_blanck">
                Project
              </a>
            </Button>
          </ContentImg>
        </GridItem>
        <GridItem>
          <Text>
            <p> Admin Appointment </p>
          </Text>
          <ContentImg>
            <Image src={admin} alt="gif" />
            <Paragraph>HTML, CSS, React.js and skeleton</Paragraph>
            <Button>
              <a href="https://adminappointment.netlify.app" target="_blanck">
                Project
              </a>
            </Button>
          </ContentImg>
        </GridItem>
        <GridItem>
          <Text>
            <p> Crypto</p>
          </Text>
          <ContentImg>
            <Image src={crypto} alt="gif" />
            <Paragraph>
              HTML, CSS, React.js and consuming the Crypto API'S
            </Paragraph>
            <Button>
              <a href="https://apicriptomonedas.netlify.app" target="_blanck">
                Project
              </a>
            </Button>
          </ContentImg>
        </GridItem>
        <GridItem>
          <Text>
            <p> Financial Plan</p>
          </Text>
          <ContentImg>
            <Image src={financial} alt="gif" />
            <Paragraph>HTML, CSS, React.js and skeleton</Paragraph>
            <Button>
              <a href="https://financialplan.netlify.app" target="_blanck">
                Project
              </a>
            </Button>
          </ContentImg>
        </GridItem>
        <GridItem>
          <Text>
            <p>Clima App</p>
          </Text>
          <ContentImg>
            <Image src={weather} alt="gif" />
            <Paragraph>
              HTML, CSS, React.js and consuming the weather API'S
            </Paragraph>
            <Button>
              <a href="https://weather-clima-app.netlify.app/" target="_blanck">
                Project
              </a>
            </Button>
          </ContentImg>
        </GridItem>
      </Zoom>
    </GridContainer>
  );
};

export default Jobs;

import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMapMarkerAlt,
  faMobile,
} from "@fortawesome/free-solid-svg-icons";

// import Icons from "./Icons";

const InfoContact = styled.div`
  display: grid;
  grid-template-columns: 15% auto;
  background-color: #ffffff;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  width: 35%;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  margin-top: 8%;
  padding: 2% 2% 3% 2%;
  -webkit-box-shadow: 0px 0px 66px 10px rgba(0, 0, 0, 0.31);
  -moz-box-shadow: 0px 0px 66px 10px rgba(0, 0, 0, 0.31);
  box-shadow: 0px 0px 66px 10px rgba(0, 0, 0, 0.31);
`;

const Paragraph = styled.p`
  font-family: "lato";
  padding: 2%;
  font-weight: bold;
  font-size: 18px;
  letter-spacing: 1px;
  text-shadow: 4px 4px 10px rgba(150, 150, 150, 1);
`;

export default function Contact() {
  return (
    <InfoContact>
      <div className="center">
        <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
      </div>
      <div>
        <Paragraph> Medellin, Antioquia </Paragraph>
      </div>
      <div className="center">
        <FontAwesomeIcon icon={faMobile} className="icon" />
      </div>
      <div>
        <Paragraph>(+57) 3185861827</Paragraph>
      </div>
      <div className="center">
        <FontAwesomeIcon icon={faEnvelope} className="icon" />
      </div>
      <div>
        <Paragraph>tuberquia26@hotmail.com</Paragraph>
      </div>
      <div className="paragraphIcon">
        <Paragraph> You can follow me on: </Paragraph>
      </div>

      {/* <Paragraph>
        E-mail: <span> tuberquia26@hotmail.com </span>{" "}
      </Paragraph>
      <Paragraph>
        Number: <span> (+57) 3185861827 </span>{" "}
      </Paragraph>
      <Paragraph> You can follow me on: </Paragraph>
      <Icons /> */}
    </InfoContact>
  );
}

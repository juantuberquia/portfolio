import React from "react";
import styled from "styled-components";

const InfoContact = styled.div`
  background-color: #ffffff;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  width: 30%;
  height: auto;
  /* text-align: center; */
  /* position: absolute; */
  margin-left: auto;
  margin-right: auto;
  margin-top: 15%;
  /* padding-top: 1%; */
  padding-bottom: 3%;
  -webkit-box-shadow: 0px 0px 66px 10px rgba(0, 0, 0, 0.31);
  -moz-box-shadow: 0px 0px 66px 10px rgba(0, 0, 0, 0.31);
  box-shadow: 0px 0px 66px 10px rgba(0, 0, 0, 0.31);
`;

export default function Contact() {
  return <InfoContact></InfoContact>;
}

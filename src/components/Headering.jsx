import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import imgAvatar from "../images/logo.ico";

const NavDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 5%;
  background-color: #a533ff;
  height: 70px;
  align-items: center;
  -webkit-box-shadow: 0px 15px 66px -11px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 15px 66px -11px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 15px 66px -11px rgba(0, 0, 0, 0.75);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  @media (max-width: 576px) {
    align-items: center;
  }
`;

const Button = styled.div`
  margin: 1rem;
  font-family: "Lato";
  display: inline-block;
  box-sizing: border-box;

  :hover {
    a {
      color: #fff;
      text-shadow: 2px 1px 5px rgba(0, 0, 0, 0.68);
      font-size: 20px;
      transition: 0.1s;
    }
  }

  a {
    text-decoration: none;
    font-weight: bold;
    color: #2a2c2a;
    font-size: 20px;
    letter-spacing: 1px;
    box-sizing: border-box;
  }
`;

const ContentImg = styled.div`
  width: 4%;
  margin-left: 5%;
  @media (max-width: 576px) {
    width: 12%;
  }

  img {
    width: 100%;
    border-radius: 40%;
  }
`;

const Headering = () => {
  return (
    <NavDiv>
      <ContentImg>
        <Link to="/">
          <img src={imgAvatar} alt="logo" />
        </Link>
      </ContentImg>
      <div className="content">
        <Button>
          <Link to="/">About me</Link>
        </Button>
        <Button>
          <Link to="/jobs">Jobs</Link>
        </Button>
        <Button>
          <Link to="/contact"> Contact</Link>
        </Button>
      </div>
    </NavDiv>
  );
};

export default Headering;

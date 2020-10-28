import React from "react";
import styled from "@emotion/styled";

// @media (min-width: 576px) { ... }

// // Medium devices (tablets, 768px and up)
// @media (min-width: 768px) { ... }

// // Large devices (desktops, 992px and up)
// @media (min-width: 992px) { ... }

// // Extra large devices (large desktops, 1200px and up)
// @media (min-width: 1200px) { ... }

const NavDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 5%;
  @media (max-width: 576px) {
    align-items: center;
  }
`;

const Button = styled.div`
  margin: 1rem;
  font-family: "Lato";
  a {
    text-decoration: none;
    font-weight: bold;
    color: #2a2c2a;
  }
`;

const Headering = () => {
  return (
    <div>
      <NavDiv>
        <Button>
          <a href="/#">About me</a>
        </Button>
        <Button>
          <a href="/#"> Jobs </a>
        </Button>
        <Button>
          <a href="/#"> Contact </a>
        </Button>
      </NavDiv>
    </div>
  );
};

export default Headering;

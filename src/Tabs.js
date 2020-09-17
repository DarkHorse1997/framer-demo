import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const StyledMain = styled(motion.main)`
  height: 80vh;
  width: 80vw;
  display: grid;
  background: blue;
  grid-template-areas:
    "tabs"
    "tabcontent";
`;

const StyledGrid = styled(motion.div)`
  grid-area: "tabs";
  display: grid;
  background: red;
`;

const StyledContent = styled(motion.div)`
  grid-area: "tabcontent";
  display: flex;
  flex-direction: column;
  background: green;
`;

const Main = (props) => {
  return (
    <StyledMain>
      <StyledGrid />
      <StyledContent />
    </StyledMain>
  );
};

export default Main;

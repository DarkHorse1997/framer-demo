import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const StyledCard = styled(motion.div)`
  color: yellow;
`;

const Card = (props) => {
  return <StyledCard></StyledCard>;
};

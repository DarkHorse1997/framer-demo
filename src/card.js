import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const StyledCard = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-color:green;
  height:150px;
  width:100px;
  border:2px solid white;

  &:hover{
      color:grey;
      cursor:pointer;
  }

  &.active{
      background-color:whitesmoke;
      color:black;
      border:2px solid black;
  }
`;

const Card = (props) => {

    const handleClick = () => {
        props.setActive(props.id)
    }

  return( <StyledCard 
            onClick={handleClick}
            className = {props.id === props.active ? "active": ""}
                    >
      {props.title}
      </StyledCard>
    )
  ;
};

export default Card;
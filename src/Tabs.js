import React,{useState} from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Card from './card'
import data from './data'

const StyledMain = styled(motion.main)`
  height: 80vh;
  width: 80vw;
  display: grid;
  // background: blue;
  grid-template-areas:
    "tabs"
    "tabcontent";
  grid-template-rows: 3fr 8fr;
`;

const StyledGrid = styled(motion.div)`
  grid-area: "tabs";
  display: flex;
  justify-content:space-evenly;
  align-items:center;
  // background: red;
  background:whitesmoke;
`;

const StyledContent = styled(motion.div)`
  grid-area: "tabcontent";
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content:center;
  background: whitesmoke;
  overflow:auto;
  padding:10px;
`;

const StyledList = styled(motion.ul)`
  list-style-type:disc;
`
const StyledListItem = styled(motion.li)`

`
const StyledImage = styled(motion.img)`
  display:block;
  padding:10px;
  margin-top:20px;
  height:calc(400px *0.8);
  width:calc(500px * 0.8);
  
`

const Content = ({image, list, title}) => {

  return(
    <>
    <StyledContent>


    {image && 
      <StyledImage 
         src={image} 
         alt={title}
         initial={{x:-100}}
         animate={{x:0}}
         />}

    {list && <StyledList>{
        list.map(listitem => <StyledListItem key={listitem.id}>{listitem.text}</StyledListItem>)
    }
      </StyledList>}
      </StyledContent>
      </>
      
  )
};

const Main = (props) => {
  const [active, setActive] = useState(0);
  const [details, setDetails] =  useState({});
  const deets = data.find(card=> card.id === active)
  // console.log(deets.image)

  return (
    <StyledMain>
      <StyledGrid>
        {data.map((tab) => (
          <Card key={tab.id} 
                id={tab.id} 
                title={tab.title} 
                active={active}
                setActive={setActive}
                />
        ))}
      </StyledGrid>
      {deets && <Content image={deets.image} title={deets.title} list={deets.list}/>}
    </StyledMain>
  );
};

export default Main;

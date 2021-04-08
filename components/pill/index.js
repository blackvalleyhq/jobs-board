import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { color, fontSize, neutral, typeface } from "../../theme/utils";

const Pill = styled.div`
  padding: 8px 16px;
  background-color: ${neutral('light')};
  border-radius: 99999px;
  font-family: ${typeface('display')};
  font-size: ${fontSize('m')};
  font-weight: 400;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  > * {
  margin-top: 1rem; // y spacing for all children
  }

  > * + * {
  margin-left: 1rem; // x spacing for all children apart from the first 
}
`;


export const PillContainer = ({ pills }) => {

 return( 
   <Container>
      {pills.map( (el) => (
        <Pill key={el}>
          {el}
        </Pill>
      ))}
   </Container>
 )
};
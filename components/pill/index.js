import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { color, fontSize, neutral, typeface } from "../../theme/utils";

const Pill = styled.div`
  padding: 8px 16px;
  background-color: ${neutral('light')};
  border-radius: 24px;
  font-family: ${typeface('display')};
  font-size: ${fontSize('m')};
  font-weight: 400;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: .6rem 1rem;
  margin: 1rem 0;
`;


export const PillContainer = ({ pills }) => {

 return( 
   <Container>
      {pills.map((el, idx) => (
        <Pill key={el}>
          {el}
        </Pill>
      ))}
   </Container>
 )
};
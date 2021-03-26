import styled from "styled-components";
import Fuse from "fuse.js";
import SearchIcon from "../public/bv-caret.svg";
import { fontSize, color, neutral } from "../theme/utils";

/* SEARCH BAR */
/*
  TODO: Add media queries for desktop, tablet, and mobile (dependent on header being completed)
*/

const Container = styled.div`
  width: 95%;
  max-width: 650px;
  color: ${neutral("white")};
  margin: auto;
  margin-top: 1rem;
`;

const SearchBar = styled.div`
  border-radius: 4px;
  margin: 0;
  width: 100%;
  height: 3.8rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 8px 8px 8px 8px;
  box-shadow: 0px 3px 5px 0px rgba(128, 128, 128, 0.75);
`;

const InputBar = styled.input`
  width: 150px;
  flex-grow: 3;
  display: inline;
  outline: none;
  font-size: ${fontSize("l")};
  border: none;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  padding: 0 1rem;
`;
InputBar.displayName = "InputBar";

const SubmitButton = styled.button`
  width: 33px;
  flex-grow: 1;
  background: ${color("primary")};
  border: none;
  outline: none;
  border-radius: 0px 4px 4px 0px;
`;

/* TODO: Change color property of LABEL and HINTTEXT to ${neutral('white')} */
const Label = styled.label`
  font-size: ${fontSize("xl")};
`;

const HintText = styled.p`
  font-size: ${fontSize("m")};
  margin: 0.5rem 0 1rem 0;
`;

const OffscreenText = styled.span`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  width: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
`;

export function Search({ allJobs, onComplete }) {
  const fuse = new Fuse(allJobs, {
    keys: ["name", "company"],
    options: {
      findAllMatches: true,
      shouldSort: true,
    },
  });

  const handleSearch = (e) => {
    const {
      target: { value },
    } = e;

    if (!value) return onComplete(allJobs);

    const results = fuse.search(value);
    return onComplete(results.map(({ item }) => item));
  };

  return (
    <Container>
      <Label htmlFor="search-input">
        Find a job
        <HintText>Search for a keyword, company or job title</HintText>
      </Label>
      <SearchBar>
        <InputBar type="text" onChange={handleSearch} id="search-input" />
        <SubmitButton>
          <SearchIcon
            width="32"
            height="32"
            style={{ transform: "rotate(90deg)" }}
          />
          <OffscreenText>Submit search</OffscreenText>
        </SubmitButton>
      </SearchBar>
    </Container>
  );
}

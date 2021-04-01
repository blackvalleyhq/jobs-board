import styled from "styled-components";
import Fuse from "fuse.js";
import SearchIcon from "../public/bv-caret.svg";
import { fontSize, color, neutral } from "../theme/utils";

/* SEARCH BAR */
/*
  TODO: Add media queries for desktop, tablet, and mobile (dependent on header being completed)
*/

const Container = styled.div`
  max-width: 650px;
  margin: auto;
  margin-top: 1rem;
`;

const SearchBar = styled.div`
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0px 3px 5px 0px rgba(128, 128, 128, 0.75);
`;

const InputBar = styled.input`
  display: block;
  flex-grow: 1;
  font-size: ${fontSize("l")};
  border: 2px solid ${neutral("white")};
  padding: 0.75rem 1rem;
  outline: 0;
  margin: 0;
  transition: border-color 100ms ease-out;

  &:focus {
    border-color: ${color("primary")};
  }
`;
InputBar.displayName = "InputBar";

const SubmitButton = styled.button`
  width: 60px;
  background: ${color("primary")};
  border: none;
  outline: none;
  margin: 0;
`;

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

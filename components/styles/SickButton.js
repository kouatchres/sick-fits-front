import styled from 'styled-components';

const SickButton = styled.button`
  background: midNightBlue;
  color: white;
  font-weight: 400;
  border: 0;
  border-radius: 0;
  text-transform: uppercase;
  font-size: 1.6rem;
  padding: .5rem 0.5rem;
  /* transform: skew(-2deg); */
  display: inline-block;
  transition: all 0.5s;
  &[disabled] {
    opacity: 1;
  }
`;

export default SickButton;

import styled from 'styled-components';

interface Props {
  index: number;
  currentIndex: number;
}

export default styled.img<Props>`
  display: ${props =>
    props.index === props.currentIndex ? 'initial' : 'none'};
  max-width: 100%;
  max-height: 40em;
`;

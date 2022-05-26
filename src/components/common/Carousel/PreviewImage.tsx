import styled from 'styled-components';

interface Props {
  index: number;
  currentIndex: number;
}
export default  styled.img<Props> `
  border: ${props => (props.index === props.currentIndex ? '.5em solid #555' : '')};
`;

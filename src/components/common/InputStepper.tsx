import styled from 'styled-components';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { ChangeEvent } from 'react';

const InputStepperContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 2.5em;
  > * :hover {
    cursor: pointer;
  }
`;

const QuantityBox = styled.input`
  width: 2em;
  height: 2em;
  background: transparent;
  border: 1px solid whitesmoke;
  color: whitesmoke;
  text-align: center;
  font-weight: bold;
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const StepperContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-inline-end: 0.3em;
`;

const InputStepper = ({ state }) => {
  const [quantity, setQuantity] = state;

  const onChange = (event: { target: HTMLInputElement }) => {
    setQuantity(event?.target?.value);
  };

  return (
    <InputStepperContainer>
      <StepperContainer>
        <FaChevronUp onClick={() => setQuantity(quantity + 1)} />
        <FaChevronDown onClick={() => setQuantity(Math.max(0, quantity - 1))} />
      </StepperContainer>
      <QuantityBox type="number" value={quantity} onChange={onChange} />
    </InputStepperContainer>
  );
};

export default InputStepper;

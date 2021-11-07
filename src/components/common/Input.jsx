import styled from "styled-components";

const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  display: block;
  border: 1px solid gainsboro;
  border-radius: 3px;
  margin-top: 5px;
`;

const StyledLabel = styled.label`
  display: block;
  text-align: left;
`;

const Input = (props) => {
    console.log(props)
  props = props.props;
  const cb = props.callback;
  
  return (
    <StyledLabel for={props.id} className="p-2">
      {props.label}
      <StyledInput
        onChange={(event) => cb(event)}
        type={props.type}
        className={props.classes}
        id={props.id}
        placeholder={props.placeHolder}
      />
    </StyledLabel>
  );
};

export default Input;

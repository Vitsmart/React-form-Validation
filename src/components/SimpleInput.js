import { useRef, useState } from "react";



const SimpleInput = (props) => {

const [enteredName, setEnteredName] = useState('');
const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false);
const nameInputRef = useRef();

const nameChangeHandler = (event) => {
setEnteredName(event.target.value);
setEnteredNameIsTouched(true);
if (event.target.value.trim() !== '') {
  setEnteredNameIsValid(false);
}
};
const nameInputBlurHandler = () => {
  setEnteredNameIsTouched(true);
  if (enteredName.trim() === '') {
    setEnteredNameIsValid(false)
  }
};
const formSubmissionHandler = event => {
  event.preventDefault();
  
  setEnteredNameIsTouched(true);
  if (enteredName.trim() === '') {
    setEnteredNameIsValid(false)
    return;
  }
setEnteredNameIsValid(true);

console.log(enteredName);
const enteredValue = nameInputRef.current.value;
console.log(enteredValue);
setEnteredName('');
};
const nameInputIsInValid = !enteredNameIsValid && enteredNameIsTouched;
const nameInputClasses = nameInputIsInValid ? "form-control invalid" : "form-control" ;

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input ref={nameInputRef} 
        type='text' 
        id='name' 
        onChange={nameChangeHandler} 
        onBlur={nameInputBlurHandler}
        value={enteredName}/>
        {nameInputIsInValid && <p className="error-text">Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

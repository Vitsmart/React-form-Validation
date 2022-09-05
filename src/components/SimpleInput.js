import {  useState } from "react";



const SimpleInput = (props) => {

const [enteredName, setEnteredName] = useState('');
const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false);
const [formIsValid, setFormIsValid] = useState(false);

const enteredNameIsValid = enteredName.trim() !== '';
const nameInputIsInValid = !enteredNameIsValid && enteredNameIsTouched;

// useEffect(() => {
//   if (enteredNameIsValid){
//     setFormIsValid(true)
//   } else {
//     setFormIsValid(false)
//   }
// }, [enteredNameIsValid]);

 //formIsValid = false;

if (enteredNameIsValid){
  setFormIsValid(true)
}


const nameChangeHandler = (event) => {
setEnteredName(event.target.value);
};

const nameInputBlurHandler = () => {
  setEnteredNameIsTouched(true);
  };

const formSubmissionHandler = event => {
  event.preventDefault();
  
  setEnteredNameIsTouched(true);
  if (!enteredNameIsValid) {
    return;
  }

console.log(enteredName);

setEnteredName('');
setEnteredNameIsTouched(false);
};

const nameInputClasses = nameInputIsInValid ? "form-control invalid" : "form-control" ;

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input 
        type='text' 
        id='name' 
        onChange={nameChangeHandler} 
        onBlur={nameInputBlurHandler}
        value={enteredName}/>
        {nameInputIsInValid && <p className="error-text">Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

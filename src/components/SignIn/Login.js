import React, { useState } from "react";



const Login = (props) => {
    const [userName, setUserName] = useState('');
    const [password, setpassword] = useState('');


const onChangeUsername = (event) => {
    const userName = event.target.value;
    setUserName(userName)
};
const onChangePassword = (event) => {
    const password = event.target.value;
    setpassword(password);
};

const LoginHandler = (event) => {
    event.preventDefault();
    console.log(userName, password);
}

return(
<main>
    <form>
        <legend>Sign in</legend>
        <div className='control-group'>
            <div className='form-control'>
            <label htmlFor="name">Username</label>
        <input type="text" placeholder="Enter Username" onChange={onChangeUsername} />
            </div>
        
        <div className='form-control'>
        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Enter password" minLength={4} name='psw' onChange={onChangePassword} />
        </div>
        <div>
        <input type="submit" name="submit" className="button" onClick={LoginHandler}/>
        </div>
        <a href="Register">Register</a>
        
        </div>
      
    </form>
</main>
)
};


export default Login;
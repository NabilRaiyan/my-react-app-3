import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';

export default function Form() {

    // const [name, setName] = useState("");
    // const [password, setPassword] = useState("");
    // const [email, setEmail] = useState("");

    // useState with object
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
    });

    const { name, email, password } = user;

    // const handleName = (e)=>{
    //     // setName(e.target.value);
    //     setUser({
    //         name: e.target.value, 
    //         email, 
    //         password
    //     })
    // }

    // const handleEmail = (e)=>{
    //     // setEmail(e.target.value);
    //     setUser({
    //         email: e.target.value, 
    //         name, 
    //         password
    //     });
    // }

    // const handlePassword = (e)=>{
    //     // setPassword(e.target.value);
    //     setUser({
    //         password: e.target.value, 
    //         email, 
    //         name
    //     });
    // }

    //handle change with one function
    const handleChange = (e)=>{
        // const fieldName = e.target.name;
        setUser({
            ...user, // spread operator
            [e.target.name]: e.target.value
        });
        // if (fieldName === 'name'){
        //     setUser({
        //     password, 
        //     email, 
        //     name: e.target.value,
        //     });
        // }

        // else if (fieldName === 'email'){
        //     setUser({
        //     password, 
        //     email: e.target.value, 
        //     name,
        //     });
        // }

        // else if (fieldName === 'password'){
        //     setUser({
        //         password: e.target.value, 
        //         email, 
        //         name
        //     });
        // }
    }

    const handleSubmit = (e)=>{
        // let userInfo = {
        //     name: name,
        //     email: email,
        //     password: password
        // };
        alert(`User Information: \n${user.name}\n${user.email}\n${user.password}`);
        e.preventDefault();

    }


  return (
    <div className='formDiv'>
      <h1>Registration</h1>
      <div className='form'>
        <form action='' onSubmit={handleSubmit}>
            <div>
                <label htmlFor='name'>Name: </label>
                {/* <input type='text' name='name' id='name' value={name} required onChange={handleName}></input> */}
                <input type='text' name='name' id='name' value={name} required onChange={handleChange}></input>

            </div>
            <div>
                <label htmlFor='email'>Email: </label>
                {/* <input type='email' name='email' id='email' value={email} required onChange={handleEmail}></input> */}
                <input type='email' name='email' id='email' value={email} required onChange={handleChange}></input>

            </div>

            <div>
                <label htmlFor='password'>Password: </label>
                {/* <input type='password' name='password' id='password' value={password} required onChange={handlePassword}></input> */}
                <input type='password' name='password' id='password' value={password} required onChange={handleChange}></input>

            </div>
            <Button type="submit">Register</Button>
        </form>
      </div>
    </div>
  )
}

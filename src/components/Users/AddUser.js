
import React,{useState} from "react";
import "./AddUser.css"
import Card from "../UI/Card";
import Button from "../UI/Button";

const AddUser = () => {
const [nameInput,setNameInput]=useState("");
const [ageInput,setAgeInput]=useState("");
  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(nameInput,ageInput);
    setNameInput("");
    setAgeInput("");
  };
  const nameInputHandler=(event)=>{
    setNameInput(event.target.value);
  }
  const ageInputHandler=(event)=>{
    setAgeInput(event.target.value);
  }

  return (
    <Card  className="input">
    <form onSubmit={addUserHandler}>
      <label htmlFor="username">Username</label>
      <input id="username" type="text" value={nameInput} onChange={nameInputHandler} />
      <label htmlFor="age">Age</label>
      <input id="age" type="number" value={ageInput} onChange={ageInputHandler}/>
      <Button type="submit">Add User</Button>
    </form>
    </Card>  
  );
};

export default AddUser;

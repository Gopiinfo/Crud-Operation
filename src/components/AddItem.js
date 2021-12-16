import React, { useState } from "react";
import axios from "axios";
import Button from "./UI/Button";
import Card from "./UI/Card";
import Input from "./UI/Input";
import Label from "./UI/Label";

const AddItem=(props)=> {
  var today = new Date(),
    date =
      today.getFullYear() +
      "-" +
      (today.getMonth()+1) +
      "-" +
      today.getDate();

  const [allValues, setAllValues] = useState({
    name: '',
    age: '',
    dob: date,
    salary: '',
    designation: ''
 });
 const changeHandler = e => {
    setAllValues({...allValues, [e.target.name]: e.target.value})
 }

  // const [name, setName] = useState("");
  // const [age, setAge] = useState("");
  // const [dob, setDob] = useState("");
  // const [salary, setSalary] = useState("");
  // const [designation, setDesignation] = useState("");

  const handleSubmit=(e)=> {
    e.preventDefault();
    axios.post(`https://crud-538b1-default-rtdb.firebaseio.com/Employee.json`,{
      ...allValues
    })
    //props.onAddItem(name,age,dob,salary,designation);
    e.target.reset();
  }
  
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <Label htmlFor="name">Employee Name:</Label>
        <Input
          type="text"
          id="name"
          name="name"
          onChange={changeHandler}
          required
        />
        <Label htmlFor="age">Employee Age:</Label>
        <Input
          type="number"
          id="age"
          name="age"
          onChange={changeHandler}
          required
        />
        <Label htmlFor="dob">Employee DOB:</Label> 
        <Input
          type="date"
          id="dob"
          name="dob"
          defaultValue={date}
          onChange={changeHandler}
          required
        />
        <Label htmlFor="salary">Employee Salary:</Label>
        <Input
          type="number"
          id="salary"
          name="salary"
          onChange={changeHandler}
          required
        />
        <Label htmlFor="designation">Employee Designation:</Label>
        <Input
          type="text"
          id="designation"
          name="designation"
          onChange={changeHandler}
          required
        />
        <Button type="submit" >
          Add Item
        </Button>
      </form>
    </Card>
  );
}

export default AddItem;

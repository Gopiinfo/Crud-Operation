import './App.css';
import axios from 'axios'
import React,{useState,useEffect,Fragment} from 'react';
import AddItem from './components/AddItem';
import ListItem from './components/ListItem';

 function App() {

  const [itemList, setitemList] = useState([]);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/todos`)
        .then((response) => {
          setitemList(response.data);
        })
}, [])

console.log(itemList);


  // const [itemList, setitemList] = useState([]);
  

  // const onAddItemHandler = (name, age,dob,salary,designation) => {
  //   setitemList((prevItemList) => {
  //     return [
  //       ...prevItemList,
  //       { name: name, age: age,dob: dob,salary: salary,designation: designation},
  //     ];
  //   });
  // };

  const hasItem=itemList.length > 0;

  // console.log(hasItem);

  return (
    <Fragment>
      {/* <AddItem onAddItem={onAddItemHandler}/> */}
      <AddItem/>
      {hasItem && <ListItem employee={itemList}/>}
    </Fragment>
  );
}

export default App;

import Form from './Components/Forms/Form';
import Child from './Components/State Lifting/Child';
import Todo from './Components/State Lifting/Todo';
import NewTodo from './Components/State Lifting/newTodo';


// Sending data from parent (App) to child (Child.js) and Sending data from Child.js to Parent(App) 

function App() {
  const data = "I am from parent";
  const handleChildData = (childData)=>{
    console.log(childData);
  }

  const handleNewTodo = (newTodoData)=>{
    console.log(newTodoData);
  }

  return (
    <div className="App">
     <Form />
      <Todo title="Learn react js"/>
     <Child  data2 = {data} onChildData={handleChildData}/>
     <NewTodo onHandleNewTodo={handleNewTodo}/>
    </div>
  );
}

export default App;

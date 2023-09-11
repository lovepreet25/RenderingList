import "./App.css";
import DessertsList from "./DessertsList";
import { useState } from "react";

const desserts = [
  {
    name: "Chocolate Cake",
    calories: 400,
    createdAt: "2022-09-01",
  },
  {
    name: "Ice Cream",
    calories: 200,
    createdAt: "2022-01-02",
  },
  {
    name: "Tiramisu",
    calories: 300,
    createdAt: "2021-10-03",
  },
  {
    name: "Cheesecake",
    calories: 600,
    createdAt: "2022-01-04",
  },
];
const ToDo = props => (
  <tr>
    <td>
      <label>{props.id}</label>
    </td>
    <td>
      <input/>
    </td>
    <td>
      <label>{props.createdAt}</label>
      </td>
  </tr>
)

function App() {
  const [todos, setTodos] = useState([{
    id: 'todo1',
    createdAt: '18:00',
  },
{
    id: 'todo2',
    createdAt: '20:00',
}]);
const reverseOrder = () => {
  setTodos([...todos].reverse());
}
  return (
    <div className="App">

      <h2>List of low calorie desserts:</h2>
      <DessertsList data={desserts} />
      <div>
        <button onClick={reverseOrder}>Reverse Order</button>
      <table>
        <tbody>
        {todos.map((todo, index)=> (
          <ToDo key={index} id={todo.id} createdAt={todo.createdAt} key={index} /> 
      ))} 
          </tbody>
          </table>
      </div>
    

    </div>
  );
}

export default App;

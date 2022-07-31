
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="todo-app">
      <h1>Tod App</h1>
      {/* <TodoForm/> */}
      <TodoList/>
    </div>
  );
}

export default App;


import './App.css';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import Todos from './components/todos';
function App() {
  return (
    <div className="App">
      <Header />
      <TodoForm />
      {/* <Todos /> */}
    </div>
  );
}

export default App;

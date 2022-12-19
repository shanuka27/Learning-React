// import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';

function App() {
  return (
    <div className="App">
      <EventBind />
      {/* <FunctionClick /> */}
      {/* <ClassClick />  */}
      {/* <Counter /> */}
      {/* <Message /> */}
      {/* <Greet name="shanu" heroName = "SM" >
        <p>this is Super man</p>
      </Greet> */}
      {/* <Greet name="shau" heroName="hehe">
        <p>this is Iron man<button>action</button></p>
      </Greet> */}
      {/* <Greet name = "gamage"/> */}
      {/* <Welcome name="shanu" heroName = "SM" /> */}
      {/* <Welcome />
      <Welcome /> */}
      {/* <Hello /> */}
    </div>
  );
}

export default App;

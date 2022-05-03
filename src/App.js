import "./App.css";
import Main from "./Components/Main";
import { ContextProvider } from "./Context";

function App() {
  return (
    <ContextProvider>
      <div className='main'>
        <Main />
      </div>
    </ContextProvider>
  );
}

export default App;

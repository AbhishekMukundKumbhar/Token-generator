import { createContext, useReducer } from 'react';
import './App.css';
import DetailsForm from './components/DetailsForm';
import TokenContainer from './components/TokenContainer';
import { TokenReducer } from './components/TokenReducer';

export const tokenContext = createContext();

function App() {
  const [tokens,dispatch] = useReducer(TokenReducer,[]);
  return (
    <div className="App">
      <tokenContext.Provider value={{ tokens, dispatch }}>
        <DetailsForm />
        <TokenContainer />
      </tokenContext.Provider>
    </div>
  );
}

export default App;

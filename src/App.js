
import './App.css';
import Accounts from './components/Accounts/Accounts';
import Bonous from './components/Bonous/Bonous';
import { useSelector } from 'react-redux';

function App() {
  const amount = useSelector(state => state.accountRedcer.amount)
  const points = useSelector(state => state.bonousReducer.points)
  return (
    <div className="App">
      <div style={{ padding: "1rem" }}>
        <h1>App component</h1>
        <h1>Amount : ${amount}</h1>
        <h1>Points: ${points}</h1>
      </div>
      <div style={{ border: "2px solid yellow" }}>
        <Accounts />
      </div>
      <div style={{ border: "2px solid yellow", padding: "2rem" }}>
        <Bonous />
      </div>
    </div>
  );
}

export default App;

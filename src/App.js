import './App.css';

//Components 
import ReactSearch from './components/ReactSearch';
function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>React Search!</h1>
        <p>Here is a list of Reggae artists rendered from a JSON object</p>
      </div>
      <ReactSearch />
    </div>
  );
}

export default App;

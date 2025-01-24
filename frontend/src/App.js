import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {

    const [data, setData] = useState('');
    const handleClick = async () => {
        try {
            const response = await fetch(
                'http://localhost:8080/getUser');
            const data = await response.text();
            setData(data);
            console.log(data);
        } catch (error) {
            console.error('Error getting data:', error);
        }

    };

    return (
    <div className="App">
      <header className="App-header">
        <p>
          <button onClick={handleClick}>Click Me!</button>
            <p>{data}</p>
        </p>
      </header>
    </div>
  );
}

export default App;

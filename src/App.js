import logo from './logo.svg';
import './App.css';
import {checkWrongBrowsers, macOsOrIosHigher15ver} from "./checkBrowsers";

function App() {
  const ifWrong = checkWrongBrowsers()
  const ifHigher15 = macOsOrIosHigher15ver()
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {`Ваш браузер ${ifWrong ? 'НЕ' : ''} поддерживается`}
        {ifHigher15 && 'Ваша платформа = xOS, ее версия >= 15'}
      </header>
    </div>
  );
}

export default App;

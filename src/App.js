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
        <div>{`Ваш браузер ${ifWrong ? 'НЕ' : ''} поддерживается`}</div>
        <div>{ifHigher15 && 'Ваша платформа = xOS, ее версия >= 15'}</div>
        <div>Платформа: {navigator.platform}</div>
        <div>Полная версия: {navigator.appVersion}</div>
        <div>Мажорная версия: {parseInt(navigator.appVersion, 10)}</div>
      </header>
    </div>
  );
}

export default App;

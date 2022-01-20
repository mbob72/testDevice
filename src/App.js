import logo from './logo.svg';
import './App.css';
import {checkWrongBrowsers, macOsOrIosHigher15ver} from "./checkBrowsers_";

function App() {
  const ifWrong = checkWrongBrowsers()
  const ifHigher15 = macOsOrIosHigher15ver()
  return (
    <div className="App">
      <header className="App-header">
        <div>AppVersion: {navigator.appVersion}</div>
        <img src={logo} className="App-logo" alt="logo" />
        <div>{`Ваш браузер ${ifWrong ? 'НЕ' : ''} поддерживается`}</div>
        <div>{ifHigher15 && 'Ваша платформа = xOS, ее версия  15.1.x'}</div>
        <div>Платформа: {navigator.platform}</div>
        <div>Полная версия: {navigator.appVersion}</div>
      </header>
    </div>
  );
}

export default App;

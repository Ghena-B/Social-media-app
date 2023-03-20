import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Menu from "./components/Menu";
import Profile from "./components/Profile";

const App = () => {
  return (
      <div className="App">
         <Header />
         <Menu />
         <Profile />
      </div>
  )
};

export default App;

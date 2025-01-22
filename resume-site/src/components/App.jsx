import logo from '../logo.svg';
import '../css/App.css';
import { BrowserRouter, useNavigate } from "react-router-dom";

const Button = ({ children, onClick }) => {
  return (
    <button className='menu-button' onClick={onClick}>
      {children}
    </button>
  );
};

function App() {

  const navigate = useNavigate();

  return (
    <div className="App">
      {/* <header className="App-header">
        
      </header> */}
      <div className="App-body" >
        <div className="name">Jeffrey Ongley</div>
        <div className="title">Software Engineer</div>
        <div className="picture"><img src={logo} className='App-logo' alt="portrait"></img></div>
        <div className="menu">
          <Button onClick={() =>navigate('/workExperience')}>Work Experience</Button>
          <Button onClick={() =>navigate('/Education')}>Education</Button>
          <Button onClick={() =>navigate('/langAndTech')}>Languages and Technologies</Button>
        </div>
      </div>
    </div>
  );
}

// function displayApplciationTracker() {
//   return(
//     <div className="App">
//       <header className="App-header">
//       </header>
//     <div>test</div>
//     </div>
//   )
//   console.log('Application Tracker');
// }



export default App;

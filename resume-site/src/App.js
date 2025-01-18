import logo from './logo.svg';
import './App.css';

const Button = ({ children, onClick }) => {
  return (
    <button class='menu-button' onClick={onClick}>
      {children}
    </button>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
      <body className="App-body" >
        <div className="name">Jeffrey Ongley</div>
        <div className="title">Software Engineer</div>
        <div className="picture"><img src={logo} className='App-logo' alt="portrait"></img></div>
        <div className="menu">
          <Button>Biography</Button>
          <Button>Work Experience</Button>
          <Button>Education</Button>
          <Button>Languages and Technologies</Button>
        </div>
      </body>
    </div>
  );
}



export default App;

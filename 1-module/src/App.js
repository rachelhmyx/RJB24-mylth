import logo from './logo.svg';
import './App.css';
import Hotel1 from './images/Hotel1.jpg';

function App() {
  return (
    <div className="App">
      <img src={Hotel1} className="profile-img" alt="profile-img"/>
      <h1 className="name">Rachel</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur in neque iure eligendi eaque eius quaerat est unde velit libero!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur in neque iure eligendi eaque eius quaerat est unde velit libero!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur in neque iure eligendi eaque eius quaerat est unde velit libero!</p>

      <button className="btn" type="submit">More Detail</button>
        
        
    </div>
  );
}

export default App;

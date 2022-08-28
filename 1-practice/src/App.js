import image from './Images/profile-img.jpg';
import './App.css';

const textIntro= 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.'

const cardStyle= {
  width: "400px",
  height: "600px",
  margin: "50px 80px",
  border:"1px solid gray",
  background:"#fff",
};

const person= {
  firstName:"Carol",
  lastName:"Danvers",
  nickName:"Captain Mavel",
  profile:"https://www.marvel.com/characters/captain-marvel-carol-danvers",
};

const personLeft= [
  {
    firstName:"Carol1",
    lastName:"Danvers",
    nickName:"Captain Mavel",
    profile:"https://www.marvel.com/characters/captain-marvel-carol-danvers",
  },
  {
    firstName:"Carol2",
    lastName:"Danvers",
    nickName:"Captain Mavel",
    profile:"https://www.marvel.com/characters/captain-marvel-carol-danvers",
  },
  {
    firstName:"Carol3",
    lastName:"Danvers",
    nickName:"Captain Mavel",
    profile:"https://www.marvel.com/characters/captain-marvel-carol-danvers",
  },
];

let gotoProfile= (
  <a href={person.profile} className="btn btn-primary">More Detail</a>
);

function render(person) {
  return (
    <>
    <div className="card" style={cardStyle}>
      <img 
      className="card-img" 
      src={image} 
      alt={formatName(person)} 
      ></img>

      <div className="card-body">
        <h5 className="card-title">{formatName(person)}</h5>
        <p className="card-content">
        {textIntro}
        </p>
        <button className="more-detail-btn">
        {gotoProfile}
        </button>
      </div>
    </div>
    </>
  )
};

function formatName(person) {
  return person.firstName +" "+ person.lastName
}

function intro() {
  return (
    <>
    <div className="row">
      <div className="col">
        {[...Array(3)].map(() => render(person))}
      </div>

      <div className="col">{personLeft.map((u) => render(u))}
      </div>
    </div>
    </>
  );
}

export default intro;











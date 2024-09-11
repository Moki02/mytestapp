import React from 'react';
import './App.css';

function ProfileCard({ name, age, location }) {
  return (
    <div className="profile-card">
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Location: {location}</p>
    </div>
  );
}

function App() {
  return (
    <div className="profile-container">
      <ProfileCard name="John Doe" age={30} location="New York" />
      <ProfileCard name="Jane Smith" age={25} location="San Francisco" />
      <ProfileCard name="Ace Reyes" age={27} location="Valenzuela" />
    </div>
  );
}
//asdada
export default App;
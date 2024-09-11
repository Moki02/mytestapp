import React from 'react';
import './App.css';

function ProfileCard({ name,type, location }) {
  return (
    <div className="profile-card">
      <h2>{name}</h2>
      <p>Type: {type}</p>
      <p>Location: {location}</p>
    </div>
  );
}

function App() {
  return (
    <div className="profile-container">
      <ProfileCard name="Treecko" type="Grass" location="Hoenn" />
      <ProfileCard name="Torchic" type="Fire" location="Hoenn" />
      <ProfileCard name="Mudkip" type="Water" location="Hoenn" />
    </div>
  );
}
//asdada
export default App;
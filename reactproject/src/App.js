import React, {useState} from 'react';
import Tweet from './Tweet';

function App(){

  const [users, setUser] = useState([
    {name:'Monika S', message:'This is a random tweet'},
    {name:'Nandi P', message:'Spontaneous attitude'},
    {name:'Devi G', message:'My Shoes are missing'},
    {name:'Monica P', message:'Nanduuuuuuuuu'}
  ]);

  return(
    <div className="app">
      {users.map(user =>(
        <Tweet name={user.name} message={user.message}/>
      ))}
    </div>
  );
}

export default App;
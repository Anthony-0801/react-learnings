import React from 'react'

function App({name, age, address}) {
    return (
       <div>
          <GreetingHead name ={name}/>
          <GreetingBody age={age} address={address}/>
       </div>
    );
 }
 
 function GreetingHead({name}) {
    return (
       <h1>Hi {name}</h1>
    );
 }
 
 function GreetingBody({age, address}) {
    return (
       <p>You're currently at the age of {age} years old. You live in {address}</p>
    ) 
 }

 export default App;
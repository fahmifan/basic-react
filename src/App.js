import React from 'react';
import './App.css';

// Profile component
// component adalah
// - return jsx(html with superpower), bisa dipake/reusable
function Profile({ age, name, addr, ...props }) {
  const nameStyle = {
    color: 'red',
  }

  if (age > 20) {
    nameStyle.color = 'blue'
  }

  return (<>
    <span>{props.no}</span>
    <p style={nameStyle}>Name: {name}</p>
    <p>Age: {age}</p>
    <p>Address: {addr}</p>
  </>);
}

// const printProfile = (e) => {
//   return <Profile 
//     name={e.name} 
//     age={e.age} 
//     addr={e.addr ? e.addr : 'nomaden'}
//   />
// }

const printProfile = (e, idx) => <Profile 
  no={idx}
  name={e.name} 
  age={e.age} 
  addr={e.addr ? e.addr : 'nomaden'}
/>

function App() {
  const data = [
    {
      name: 'fahmi',
      age: 20,
    },
    {
      name: 'ibnu',
      age: 40,
    },
    {
      name: 'islam',
      age: 60,
      addr: 'antapani'
    }
  ]

  return <main>
    { // map itu melakukan looping dan
      // mengembalikan array baru
      data.map(e => <Profile name={e.name} 
        age={e.age} 
        addr={e.addr ? e.addr : 'nomaden'}
      />)

      // data.map(printProfile)

      // data.map(function (d) {
      //   return <Profile name={d.name} 
      //     age={d.age} 
      //     addr={d.addr ? d.addr : 'nomaden'}
      //   />
      // })
    }
  </main>
}

export default App;

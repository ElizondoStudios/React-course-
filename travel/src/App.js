import Card from './Card'
import globe from './images/globe.png'
import data from './data';

let Card_data= data.map(item=>{
  return(
    <Card
      key={item.title}
      item={item}
      />
  )
});

function App() {
  return (
    <div className="App">
      <div className="App--header">
        <img
          src={globe}
          alt="Globe"
        />
        <p>My travel journal</p>
      </div>
      <div className='App--body'>
        {Card_data}
      </div>
    </div>
  );
}

export default App;

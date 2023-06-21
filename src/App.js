import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Form from './components/Form';

function App() {
  
  const [colaboradores, setColaboradores] = useState([]);

  const newContributorAdded = (colaborador) => {
    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Form registeredEmployee={colaborador => newContributorAdded(colaborador)}/>
    </div>
  );
}

export default App;

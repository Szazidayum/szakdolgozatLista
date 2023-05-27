import './App.css';
import { Routes, Route} from 'react-router-dom';
import Layout from './Layout';
import SzakdogaEdit from './SzakdogaEdit';
import { useEffect, useState } from 'react';
import UserService from './UserService';
import Szakdolgozatok from './Szakdolgozatok';

function App() {
  const [szakdogak, setSzakdogak] = useState([]);
  const [ujDoga, setUjDoga] = useState({szakdoga_nev:'', githublink:'', oldallink:'', tagokneve:''})
  const [message, setMessage] = useState("");
  
  useEffect(() => {
    UserService.getData("szakdogak").then((data) => {
      setSzakdogak(data);
    });
  }, [szakdogak]);
  
  function dataChange(event) {
    ujDoga[event.target.id] = event.target.value;
    setUjDoga(ujDoga);
  }
  
  
  function kuld(){
    UserService.postData("szakdogak", ujDoga)
    setMessage("Sikeresen hozzáadtad az új szakdolgozatot!")
   
  }
  return (

<>
<Routes>
<Route path="/" element={<Layout />}>
<Route path='edit/:idSzakdoga' element={<SzakdogaEdit />} />
  </Route>
  
</Routes>
      
      
<div className='App'>
      <h1>Számalk-Szalézi technikum és Szakgimnázium</h1>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead className="table-thead">
            <tr className='bg-dark text-white'>
              <th scope="col">Szakdolgozat címe</th>
              <th scope="col">Készítők neve</th>
              <th scope="col">GitHub link</th>
              <th scope="col">Szakdolgozat elérhetősége</th>
              <th scope="col">szerkesztés</th>
              <th scope="col">törlés</th>
            </tr>
          </thead>
          <tbody>
            {szakdogak.map((szakdoga, index) => {
              return (
                <Szakdolgozatok
                szakdoga={szakdoga}
                  key={index}
                />
              );
            })}
          </tbody>
        </table>
      </div>

      {message.length > 1 ? (
        <div className="alert alert-success" role="alert">
          {message}
        </div>
      ) : (
        <div></div>
      )}

      <div className='ujSzakdoga'>
      <form>
        <div className="form-group" >
        <div className='form-group row'>

        <label htmlFor="szakdoga_nev" className='col-sm-2 col-form-label'>Szakdolgozat címe:</label>
        <div className='col-sm-10'>
        <input type="text" id="szakdoga_nev" className='form-control' name="szakdoga_nev" onChange={dataChange}></input>
        </div>
        </div>
       
        <div className='form-group row'>

        <label htmlFor="tagokneve" className='col-sm-2 col-form-label'>Készítők:</label>
        <div className='col-sm-10'>
        <input type="text" id="tagokneve" className='form-control' name="tagokneve" onChange={dataChange}></input>
        </div>
        </div>

        
        <div className='form-group row'>

        <label htmlFor="oldallink" className='col-sm-2 col-form-label'>Az oldal elérhetősége:</label>
        <div className='col-sm-10'>
        <input type="text" id="oldallink" className='form-control' name="oldallink" onChange={dataChange}></input>
        </div>
        </div>
        <div className='form-group row'>
          
        <label htmlFor="githublink" className='col-sm-2 col-form-label'>GitHub elérhetősége:</label>
        <div className='col-sm-10'>
        <input type="text" id="githublink" className='form-control' name="githublink" onChange={dataChange}></input>
        </div>
        </div>

        <div className="col-xs-12">
        <button type="button" style={{width: "5rem", maxWidth: "100%"}} className="btn btn-primary" onClick={kuld}>
        Új
      </button>
      </div>
      </div>
      </form>
      </div>
      </div>
</>
  );
}

export default App;

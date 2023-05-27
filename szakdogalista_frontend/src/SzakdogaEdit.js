import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserService from "./UserService";

function SzakdogaEdit(){

    let { idSzakdoga } = useParams();
    const [szakdoga, setSzakdoga] = useState({});

    useEffect(() => {

        UserService.getData("szakdogak/" + idSzakdoga).then((data) => {
          setSzakdoga(data)
        })
    }, [szakdoga])

    function dataChange(event) {
        const dataName = event.target.value;
        const name = event.target.id;
        setSzakdoga({ [name]: dataName });
      }

      function kuld(){
        let data = {};
        data.szakdoga_nev = document.getElementById("szakdoga_nev").value;
        data.tagokneve = document.getElementById("tagokneve").value;
        data.oldallink = document.getElementById("oldallink").value;
        data.githublink = document.getElementById("githublink").value;
        UserService.putData("szakdogak/"+ idSzakdoga, data)
      }

    return(
        <form>
        <div className="form-group" >
        <div className='form-group row'>

        <label htmlFor="szakdoga_nev" className='col-sm-2 col-form-label'>Szakdolgozat címe:</label>
        <div className='col-sm-10'>
        <input type="text" id="szakdoga_nev" className='form-control' name="szakdoga_nev" value={szakdoga.szakdoga_nev} onChange={dataChange}></input>
        </div>
        </div>
       
        <div className='form-group row'>

        <label htmlFor="tagokneve" className='col-sm-2 col-form-label'>Készítők:</label>
        <div className='col-sm-10'>
        <input type="text" id="tagokneve" className='form-control' name="tagokneve" value={szakdoga.tagokneve} onChange={dataChange}></input>
        </div>
        </div>

        
        <div className='form-group row'>

        <label htmlFor="oldallink" className='col-sm-2 col-form-label'>Az oldal elérhetősége:</label>
        <div className='col-sm-10'>
        <input type="text" id="oldallink" className='form-control' name="oldallink" value={szakdoga.oldallink}  onChange={dataChange}></input>
        </div>
        </div>
        <div className='form-group row'>
          
        <label htmlFor="githublink" className='col-sm-2 col-form-label'>GitHub elérhetősége:</label>
        <div className='col-sm-10'>
        <input type="text" id="githublink" className='form-control' name="githublink" value={szakdoga.githublink} onChange={dataChange}></input>
        </div>
        </div>

        <div className="col-xs-12">
        <button type="button" style={{width: "5rem", maxWidth: "100%"}} className="btn btn-primary" onClick={kuld}>
        Módosít
      </button>
      </div>
      </div>
      </form>
    )
}

export default SzakdogaEdit;
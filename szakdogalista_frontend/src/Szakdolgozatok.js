import UserService from "./UserService";
import SzakdogaEdit from "./SzakdogaEdit";
import { Link } from "react-router-dom";

function Szakdolgozatok(props){


    function deleteSzakdoga(){
        UserService.deleteData(`szakdogak/${props.szakdoga.id}`)
    }

    return(
      <>
        <tr>
      <td>{props.szakdoga.szakdoga_nev}</td>
      <td>{props.szakdoga.tagokneve}</td>
      <td>{props.szakdoga.githublink}</td>
      <td>{props.szakdoga.oldallink}</td>
      <td><button><Link to={"/edit/" + props.szakdoga.id}>edit</Link></button></td>
      <td><a className="text-danger pe-auto" onClick={deleteSzakdoga}>
            <button>delete</button>
          </a></td>
    </tr>
    </>
    )
}

export default Szakdolgozatok;
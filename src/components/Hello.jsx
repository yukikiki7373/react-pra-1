// import Name from "./name";
// import Discription from "./discription";
import {Name, Discription} from './index.js';

const Hello = (props) =>{
    return(
        <div>
            <Name name = {props.name} />
            <Discription discription = {props.discription} />
        </div>
    )
};


export default Hello;
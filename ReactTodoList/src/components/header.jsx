import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEyeSlash, faEye} from '@fortawesome/free-solid-svg-icons';

export default function Header  ({showCompleted, setShowCompleted}) {
    const toggleCompleted = () => {
        console.log('toggleCompleted: ', toggleCompleted);
        setShowCompleted(!showCompleted);
    }
    return(
       <header className="header">
        <h1 className="header__titulo">ToDo List</h1>
        {showCompleted ? 
        <button 
        className="header__button"
        onClick={() => toggleCompleted()}
        >show not completed
        <FontAwesomeIcon icon={faEyeSlash} className="header__icon-buton" />
        </button>
        :
        <button 
        className="header__button"
        onClick={() => toggleCompleted()}
        >show completed
        <FontAwesomeIcon icon={faEye} className="header__icon-buton" />
        </button>
        }
        
       </header> 
    )
}
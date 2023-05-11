import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';

const NavBar = ({ onSearch }) => {

    return (
        <div>

            <SearchBar onSearch={onSearch} />
            <Link to={'/home'}>
                <button>Home </button>
            </Link>
            <Link to={'/about'}>
                <button>About </button>
            </Link>


        </div>



    )


}
export default NavBar
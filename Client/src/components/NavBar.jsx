import SearchBar from './SearchBar';
import { Link, NavLink } from 'react-router-dom';

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

<NavLink to='/favorites'>
<button>Favorites</button>

</NavLink>
        </div>



    )


}
export default NavBar
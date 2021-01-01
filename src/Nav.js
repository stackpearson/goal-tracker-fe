import {Link} from 'react-router-dom';

const MyNav = () => {
    return (
        <nav>
            <div className='nav-bar__container'>
                <div><Link to='/goals'>Goals</Link></div>
                <div><Link to='/tasks'>Tasks</Link></div>
            </div>
        </nav>
    )
}

export default MyNav
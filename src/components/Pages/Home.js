import {Link, useNavigate} from 'react-router-dom';
import MainNavigation from '../MainNavigation';


export default function Home(){
    const navigate = useNavigate();

    function navigateHandler(){
       navigate('/products');
    }
    return(
    <>
    <h1>Home Page</h1>
    <li>Go to <Link to='products'>List of products</Link></li>
    <p><button onClick={navigateHandler}>Navigate</button></p>
    </>
    );
}
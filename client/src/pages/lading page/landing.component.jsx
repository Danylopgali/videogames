import { Link } from 'react-router-dom';
import './landing.style.css';

function Landing() {
  return (
    <div className="Landing">
      <Link to="/home">
    <button className='button'>START</button>  
    </Link>
    </div>
  );
}

export default Landing;


import './index.css';
import image from './../image/Fashion Street -logos.jpeg';
import nav from './../data/navbar';

const Navbar=(props)=>{

  return (
    <div className='navbar__outer'>
        <div className='navbar__inner'>
            <div className="navbar__logo">
                <img src={image} className="logo"></img>
            </div>
            <div className="navbar__right">
                {nav.map((ele)=>{
                    const{id,name,img}=ele;
                    return(
                    <div key={id} className="navbar__each" onClick={()=>{props.changeDisplay(name)}}>
                        <img src={img} className="navbar__each__img"></img>
                    </div>
                    )
                })}
            </div>
        </div>
    </div>
  );
}

export default Navbar;

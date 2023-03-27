import background from '../../images/header.jpg'
import logo from '../../images/logo.png'

function Header() {
    return (
      <div style={{backgroundImage: `url(${background})`}} className="Header">
        <div className='headerTop'>
            <div className='topWrap'>
                <div className='col-center'>
                    <div className='logo'>
                        <a href='https://owassochamber.com'>
                            <img src={`${logo}`} />
                        </a>
                    </div>
                </div>
                <div className='col-left'></div>
                <div className='col-right'></div>
            </div>
        </div>
      </div>
    );
  }
  
  export default Header;
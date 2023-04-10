import background from '../../images/header.jpg'
import logo from '../../images/logo.png'

function Header() {
    return (
      <div style={{backgroundImage: `url(${background})`}} className="Header">
        <div className='headerTop'>
            <div className='topWrap'>
                <div className='infoLeft'>
                    <div className='infoTop'></div>
                    <div className='infoBottom'>
                        <div className='infoBottomLeft'></div>
                        <div className='infoBottomRight'></div>
                    </div>
                </div>
                <div className='col-center'>
                    <div className='logo'>
                        <a href='https://owassochamber.com'>
                            <img src={`${logo}`} alt="Owasso Chambbe of Commerce Logo" />
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
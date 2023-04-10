import background from '../../images/header.jpg'
import logo from '../../images/logo.png'
import pin from '../../images/icon-ionic-ios-pin.svg'
import phone from '../../images/icon-awesome-phone-alt.svg'
import mail from '../../images/icon-zocial-email.svg'

function Header() {
    return (
      <div style={{backgroundImage: `url(${background})`}} className="Header">
        <div className='headerTop'>
            <div className='topWrap'>
                <div className='infoLeft'>
                    <div className='infoTop'>
                        <img src={`${pin}`} alt="" />
                        <p>315 S. Cedar Street, Owasso, OK 74055</p>
                    </div>
                    <div className='infoBottom'>
                        <div className='infoBottomLeft'>
                        <img src={`${phone}`} alt="" />
                        <p>918.272.2141</p>
                        </div>
                        <div className='infoBottomRight'>
                        <img src={`${mail}`} alt="" />
                        <p>info@owassochamber.com</p>
                        </div>
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
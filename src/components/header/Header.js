import background from '../../images/header.jpg'
import logo from '../../images/logo.png'
import pin from '../../images/icon-ionic-ios-pin.svg'
import phone from '../../images/icon-awesome-phone-alt.svg'
import mail from '../../images/icon-zocial-email.svg'
import twit from '../../images/icon-ionic-twitter.svg'
import fb from '../../images/icon-zocial-facebook.svg'
import ln from '../../images/icon-zocial-linkedin.svg'

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
                <div className='col-right'>
                    <div className='rightTop'>
                        <div className='socialBlock'>
                            <a href="" target="_blank">
                                <img src={`${twit}`} alt="" />
                            </a>
                            <a href="" target="_blank">
                                <img src={`${fb}`} alt="" />
                            </a>
                            <a href="" target="_blank">
                                <img src={`${ln}`} alt="" />
                            </a>
                        </div>
                        <a href=''>
                            <div className='joinButt'>
                                <p>JOIN NOW</p>
                            </div>
                        </a>
                        <a href=''>
                            <div className='logButt'>
                                <p>Member Log-In</p>
                            </div>
                        </a>
                    </div>
                    <div className='rightBottom'></div>
                </div>
            </div>
        </div>
      </div>
    );
  }
  
  export default Header;
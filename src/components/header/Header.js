import background from '../../images/header.jpg'

function Header() {
    return (
      <div style={{backgroundImage: `url(${background})`}} className="Header">
        <h1>Owasso TRC Header</h1>
      </div>
    );
  }
  
  export default Header;
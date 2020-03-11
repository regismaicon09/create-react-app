import React from 'react';
import LinkWrapper from './LinkWrapper';

const Header = () => {

return(
  <nav>
  <div className="nav-wrapper #2196f3 blue">
    <LinkWrapper to="/" className="brand-logo" activeStyle={{}}>Drogaria Plus</LinkWrapper>
    <ul  className="right">
      <li><LinkWrapper to='/'>Inicial</LinkWrapper></li>
      <li><LinkWrapper to='/clientes'>clientes</LinkWrapper></li>
      <li><LinkWrapper to='/empresas'>Empresas</LinkWrapper></li>
    </ul>
  </div>
</nav>

)


}
export default Header;
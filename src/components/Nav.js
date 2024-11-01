import logo from "../assets/Logo.svg";
function Nav() {
  return (
    <div>
      {/* logo */}

      <a href="/">
        <img src={logo} alt="Little Lemon Logo" />
        <nav>
          <ul>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>MENU</li>
            <li>RESERVATIONS</li>
            <li>ORDER ONLINE</li>
            <li>LOGIN</li>
          </ul>
        </nav>
      </a>
    </div>
  );
}
export default Nav;

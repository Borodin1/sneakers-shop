//React
import { Link } from "react-router-dom";

export const Header = (props) => {
  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to="/">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/assets/logo.png" alt="logo" />
          <div className="headerInfo">
            <h3>REACT SNEAKERS</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>
      <ul className="d-flex ">
        <li className="mr-30 cu-p" onClick={props.onOpenCart}>
          <img width={18} height={18} src="/assets/card.svg" alt="card" />
          <span>1205 грн.</span>
        </li>
        <li>
          <Link to="/favorites">
            <img
              width={18}
              height={18}
              src="/assets/favourites.png"
              alt="favourites"
            />
          </Link>
        </li>
        <li>
          <img width={18} height={18} src="/assets/user.svg" alt="user" />
        </li>
      </ul>
    </header>
  );
};

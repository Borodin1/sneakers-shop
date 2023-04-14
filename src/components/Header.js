export const Header = () => {
  return (
    <header className="d-flex justify-between align-center p-40">
      <div className="d-flex align-center">
        <img width={40} height={40} src="/assets/logo.png" alt="logo" />
        <div className="headerInfo">
          <h3>REACT SNEAKERS</h3>
          <p className="opacity-5">Магазин лучших кроссовок</p>
        </div>
      </div>
      <ul className="d-flex ">
        <li className="mr-30">
          <img width={18} height={18} src="/assets/card.svg" alt="card" />
          <span>1205 грн.</span>
        </li>
        <li>
          <img width={18} height={18} src="/assets/user.svg" alt="user" />
        </li>
      </ul>
    </header>
  );
};

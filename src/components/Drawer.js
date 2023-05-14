

export const Drawer = ({ onCloseCart, items, onRemove }) => {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30">
          Корзина
          <img
            className="cu-p"
            src="/assets/btn-remove.svg"
            alt="remove"
            onClick={onCloseCart}
          />
        </h2>

        {
          items.length > 0
            ? (
              <>
                <div className="items">
                  {items.map((item) => (
                    <div key={item.id} className="cartItem d-flex align-center mb-20">
                      <div
                        style={{ backgroundImage: `url(${item.imgUrl})` }}
                        className="cartItemImg"></div>

                      <div className="mr-20 flex">
                        <p className="mb-5">{item.title}</p>
                        <b>{item.price} грн.</b>
                      </div>
                      <img
                        onClick={() => onRemove(item.id)}
                        className="removeBtn"
                        src="/assets/btn-remove.svg"
                        alt="Remove"
                      />
                    </div>
                  ))}
                </div>
                <div className="cartTotalBlock">
                  <ul>
                    <li className="d-flex">
                      <span>Итого:</span>
                      <div></div>
                      <b>21 498 грн.</b>
                    </li>
                    <li className="d-flex">
                      <span>Налог 5%</span>
                      <div></div>
                      <b>1074 грн.</b>
                    </li>
                  </ul>
                  <button className="greenButton">
                    Оформить заказ <img src="/assets/arrow.svg" alt="arrow" />
                  </button>
                </div>
              </>)
            : (<div className="cartEmpty d-flex align-center justify-center flex-column flex">
              <img
                className="mb-20"
                width='120px'
                height='120px'
                src="/assets/empty-cart.png" alt="cart" />
              <h2>Корзина пустая</h2>
              <p className="opacity-6">Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ</p>
              <button
                onClick={onCloseCart}
                className="greenButton">
                <img src="/assets/arrow.svg" alt="arrow" />
                Вернуться назад
              </button>
            </div>)
        }



      </div>
    </div>
  );
};

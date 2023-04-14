export const Card = () => {
  return (
    <div className="card">
      <div className="favorite">
        <img src="/assets/heart-unlike.svg" alt="unliked" />
      </div>

      <img
        width={133}
        height={112}
        src="/assets/sneakers/1.jpg"
        alt="sneaker-1"
      />
      <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column ">
          <span> Цена:</span>
          <b>1205 грн.</b>
        </div>
        <button className="button">
          <img width={11} height={11} src="/assets/plus.svg" alt="plus" />
        </button>
      </div>
    </div>
  );
};

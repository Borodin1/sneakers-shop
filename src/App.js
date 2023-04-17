import { Drawer, Header } from "./components/";
import { Card } from "./components/Card";

const arr = [
  {
    id: 1,
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 12000,
    img: "/assets/sneakers/1.jpg",
  },
  {
    id: 2,
    title: "Мужские Кроссовки Nike Air Max 270",
    price: 12000,
    img: "/assets/sneakers/2.jpg",
  },
  {
    id: 3,
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 10000,
    img: "/assets/sneakers/3.jpg",
  },
  {
    id: 4,
    title: "Кроссовки Puma X Aka Boku Future Rider",
    price: 9000,
    img: "/assets/sneakers/4.jpg",
  },
];

function App() {
  return (
    <div className="wrapper clear ">
      <Drawer />

      <Header />

      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/assets/search.svg" alt="search" />
            <input placeholder="Поиск ..." />
          </div>
        </div>

        <div className="d-flex">
          {arr.map((sneakers) => {
            return (
              <Card
                key={sneakers.id}
                title={sneakers.title}
                price={sneakers.price}
                imgUrl={sneakers.img}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;

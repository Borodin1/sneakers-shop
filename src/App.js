//React
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

//Axios
import axios from "axios";

//Components
import { Drawer, Header } from "./components/";

//Pages
import {HomePage,FavoritePage} from './pages'

function App() {
  const [items, setItems] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [cartOpened, setCardOpened] = useState(false);


  const onAddToCart = (obj) => {
    axios.post("https://6445882a914c816083d0eb64.mockapi.io/cart", obj);
    setCartItems((prev) => [...prev, obj]);
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://6445882a914c816083d0eb64.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onAddToFavorite = (obj) => {
    try {
      if(favorites.find(favObj=>favObj.id === obj.id)){
        axios.delete(`https://6445882a914c816083d0eb64.mockapi.io/favourites/${obj.id}`);
        setFavorites((prev) => prev.filter((item) => item.id !== obj.id))
      } else {
        axios.post("https://6445882a914c816083d0eb64.mockapi.io/favourites", obj);
        setFavorites((prev) => [...prev, obj]);
      }
    } catch (error) {
      alert('Не удалось добавить в закладки')
    }
  };

  useEffect(() => {
    axios
      .get("https://6445882a914c816083d0eb64.mockapi.io/sneakers")
      .then((res) => {
        setItems(res.data);
      });

    axios
      .get("https://6445882a914c816083d0eb64.mockapi.io/cart")
      .then((res) => {
        setCartItems(res.data);
      });
  }, []);

  return (
    <div className="wrapper clear ">
      {cartOpened && (
        <Drawer
          items={cartItems}
          onCloseCart={() => setCardOpened(false)}
          onRemove={onRemoveItem}
        />
      )}

      <Header onOpenCart={() => setCardOpened(true)} />
<Routes>
<Route path="/" element={<HomePage 
                searchValue={searchValue} 
                setSearchValue={setSearchValue} 
                onChangeSearchInput={onChangeSearchInput}
                items={items}
                onAddToFavorite={onAddToFavorite}
                onAddToCart={onAddToCart}
   />}/>
   <Route path="/favorites" element={<FavoritePage 
                            items={favorites}
                            onAddToFavorite={onAddToFavorite}
                            />}/>

</Routes>

    </div>
  );
}

export default App;

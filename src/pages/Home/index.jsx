//Components
import { Card } from "../../components/Card";


export const HomePage = (
  {searchValue,setSearchValue,onChangeSearchInput,
    onAddToFavorite,items,onAddToCart})=>{
    return(
        <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>
            {searchValue !== ""
              ? `Поиск по запросу:"${searchValue}"`
              : "Все кроссовки"}
          </h1>
          <div className="search-block d-flex">
            <img src="/assets/search.svg" alt="search" />

            {searchValue && (
              <img
                onClick={() => setSearchValue("")}
                className="clear cu-p"
                src="/assets/btn-remove.svg"
                alt="clear"
              />
            )}
            <input
              onChange={onChangeSearchInput}
              value={searchValue}
              placeholder="Поиск ..."
            />
          </div>
        </div>

        <div className="d-flex flex-wrap">
          {items
            .filter((item) =>
              item.title.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((sneakers) => {
              return (
                <Card
                  key={sneakers.id}
                  title={sneakers.title}
                  price={sneakers.price}
                  imgUrl={sneakers.imgUrl}
                  onFavorite={() => onAddToFavorite(sneakers)}
                  onPlus={() => onAddToCart(sneakers)}
                />
              );
            })}
        </div>
      </div>
      
    )
}

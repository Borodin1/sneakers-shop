//Components
import { Card } from "../../components";

export const FavoritePage = (
  {items,onAddToFavorite})=>{
    return(
        <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>
           Мои закладки
          </h1>
        </div>

        <div className="d-flex flex-wrap">
        {items
            .map((sneakers) => {
              return (
                <Card
                  key={sneakers.id}
                  id={sneakers.id}
                  title={sneakers.title}
                  price={sneakers.price}
                  imgUrl={sneakers.imgUrl}
                  favorited={true}
                  onFavorite={onAddToFavorite}
                />
              );
            })}
        </div>
      </div>
      
    )
}

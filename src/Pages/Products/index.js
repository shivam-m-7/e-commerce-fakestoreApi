import React, {useState, useEffect} from "react";
import { useProduct } from "../../Context/ProductContext";
import styles from "./styles.module.css";
import Spinner from "../../Components/Spinner";
import SearchBar from '../../Components/SearchBar/SearchBar';
import { useParams } from "react-router-dom";
import { useCart } from '../../Context/CartContext'
import { useFavorite } from '../../Context/FavoriteContext'
import Card from "../../Components/Card";
import "../../../node_modules/slick-carousel/slick/slick.css"; 
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Products = () => {
  const {addToCart, items} = useCart()
  const {addToFavorite, favoriteItems} = useFavorite()
  const [sortState, setSortState] = useState("none");
  const [input, setInput] = useState("")
  const { productList, loading, setProductID, setCategory } = useProduct();
  
  const {category_id} = useParams()

  const sortMethods = {
    none: { method: (a, b) => null },
    ascending: { method: (a, b) => (a.price > b.price ? 1 : -1) },
    descending: { method: (a, b) => (a.price > b.price ? -1 : 1) },
  };
  const inputHandler = (event) => {
    setInput(event.target.value);
    
    
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,    
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

  useEffect(() => {
    setCategory(category_id)

  }, [category_id, input])

  return (
   <>
   <div className='carousel'>        
        <Slider {...settings}>
          <div>
          <img src='https://i.postimg.cc/x8cQt2Ty/tamanna-rumee-lp-Gm415q9-JA-unsplash-3.jpg' width={'100%'} border='0' alt='promotion-fashion-banner'/>
          </div>
          <div>
          <img src='https://i.postimg.cc/rm9GgBYm/aayudh-bhattacharya-87a-Wa1mutz-U-unsplash-1.jpg' width={'100%'} border='0' alt='promotion-fashion-banner'/>
          </div>
          <div >
          <img src='https://i.postimg.cc/v8PCXknD/markus-spiske-BTKF6-G-O8f-U-unsplash-1.jpg' width={'100%'} border='0' alt='promotion-fashion-banner'/>
          </div>
        
        </Slider>
      </div>
   <div className="sort">
   &nbsp;&nbsp;<h2><b>Sort</b></h2>
   <select id="sortbutton" defaultValue={'DEFAULT'} onChange={(e) => setSortState(e.target.value)}>
        <option value="DEFAULT" disabled>None</option>
        <option value="ascending">Low to High</option>
        <option value="descending">High to Low</option>
      </select>
   
   <SearchBar  handleChange={inputHandler} input={input}/>
   </div>
    <div className={styles.cardGroup}>
      {!loading ? (
        productList?.filter((product) => {
          if (input === null || input === "") {
            return product;
          } else if (
            product.title.toLowerCase().includes(input.toLowerCase())
          ) {
            return product;
          }
        }).sort(sortMethods[sortState].method).map((item, index) => {
          const findCartItem = items.find((cart_item) => cart_item.id === item.id)
          const findFavoriteItem = favoriteItems.find((favorite_item) => favorite_item.id === item.id)
          return (
            <Card key={`product-${index}`} item={item} setProductID={setProductID} findCartItem={findCartItem} findFavoriteItem={findFavoriteItem} addToCart={addToCart} addToFavorite={addToFavorite} />
          );
        })
      ) : (
        <Spinner />
      )}
    </div>
    </>
  );
};

export default Products;

import {useContext, useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import {CategoryContext} from '../../contexts/categories.context';
import ProductCart from "../../components/product-cart/product-cart.component";
import {CategoryContainer,CategoryTitle} from './category.style'

const Category = () => {
  const {category} = useParams()
  const {categoriesMap} = useContext(CategoryContext)
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category])
  }, [category, categoriesMap]);
  return (
    <>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      <CategoryContainer>

        {
          products && products.map((product) => (
            <ProductCart key={product.id} product={product}/>
          ))
        }
      </CategoryContainer>
    </>
  );
};

export default Category;
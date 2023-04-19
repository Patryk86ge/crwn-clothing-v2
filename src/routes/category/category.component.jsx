import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";

import ProductCart from "../../components/product-cart/product-cart.component";
import {CategoryContainer, CategoryTitle} from './category.style'
import {useSelector} from "react-redux";
import {selectCategoriesIsLoading, selectCategoriesMap} from "../../store/categories/category.selector";
import Spinner from '../../components/spinner/spinner.component'

const Category = () => {
  const {category} = useParams();
  const categoriesMap = useSelector(selectCategoriesMap)
  const isLoading = useSelector(selectCategoriesIsLoading)
  const [products, setProducts] = useState(categoriesMap[category]);


  useEffect(() => {
    setProducts(categoriesMap[category])
  }, [category, categoriesMap]);
  return (
    <>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      {
        isLoading ? <Spinner/> : <CategoryContainer>
          {
            products && products.map((product) => (
              <ProductCart key={product.id} product={product}/>
            ))
          }
        </CategoryContainer>
      }
    </>
  );
};

export default Category;
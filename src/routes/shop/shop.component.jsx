import {Route, Routes} from "react-router-dom";
import { useDispatch } from 'react-redux';
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
import {useEffect} from "react";
import {getCategoriesAndDocuments} from "../../utils/firebase/firebase.utile";
import {setCategories} from "../../store/categories/category.action";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(()=>{
    const getCategoriesMap = async () => {
      const categoriesArray = await getCategoriesAndDocuments();
      dispatch(setCategories(categoriesArray));
    }
    getCategoriesMap();
  },[]);
  return (
    <Routes>
      <Route index element={<CategoriesPreview/>}/>
      <Route path=':category' element={<Category/>}/>
    </Routes>
  );
}

export default Shop;
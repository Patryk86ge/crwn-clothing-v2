import React from 'react';
import categories from "./categories.json";
import CategoryItemComponent from "../category-item/category-item.component";
import './categories.styles.scss'

const CategoryMenu = () => {
  return (
    <div className='categories-container'>
      {
        categories.map(( category ) => (
          <CategoryItemComponent
            category={category}
            key={category.id}
          />
        ))
      }
    </div>
  );
};

export default CategoryMenu;
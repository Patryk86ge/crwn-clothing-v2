import React from 'react';
import categories from "./categories.json";
import DirectoryItemComponent from "../directory-item/directory-item.component";

import {CategoriesContainer} from './categories.styles'

const CategoryMenu = () => {
  return (
    <CategoriesContainer>
      {
        categories.map(( category ) => (
          <DirectoryItemComponent
            key={category.id}
            category={category}
          />
        ))
      }
    </CategoriesContainer>
  );
};

export default CategoryMenu;
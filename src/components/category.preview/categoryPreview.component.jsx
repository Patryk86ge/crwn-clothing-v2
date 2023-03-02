import React, {useContext} from 'react';
import ProductCart from "../product-cart/product-cart.component";
import {CategoryPreviewContainer ,Preview,LinkTitle} from './categoryPreview.style'

const CategoryPreview = ({title, products}) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <LinkTitle
          to={title}>
          <span>{title.toUpperCase()}</span>
        </LinkTitle>
      </h2>
      <Preview>
        {
          products.filter((_,idx) => idx < 4)
            .map((product) =>
            <ProductCart
              key={product.id}
              product={product}
            />
          )
        }
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
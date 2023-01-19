import  './cart-item.style.scss'

const CartItem = ({cartItem}) => {
  const { name,quantity ,imageUrl } = cartItem;
  return (
    <div className={'cart-item-container'}>
      <img src={imageUrl} alt={name}/>
      <div className={'item-details'}>
        <h2 className={'name'}>{name}</h2>
        <span>{quantity}</span>
      </div>
    </div>
  );
};

export default CartItem;
import { useState } from "react";
import "./Cart.css";
const Cart = ({ products }) => {
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [total, setTotal] = useState(0);


 
  return (
    <section className="cart">
      <article className="header">
        <div id='my-cart'>Meu carrinho</div>
        <div>Quantidade</div>
        <div>Unitário</div>
        <div>Total</div>
      </article>
      <ul className="list-products">
        {products.map((product, index) => (
          <li key={index}>
            <div className="product">
                <div className="thumbnail">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="details">
                    <div className="name">{product.name}</div>
                    <span>Cor: {product.color} </span>
                    <span>Tamanho: {product.size}</span>
                </div>
            </div>
            <div className="quantity">
              <button
                onClick={() => setCart([...cart, product]) }
              >
                +
              </button>
              <span>
                {cart.filter((item) => item.name === product.name).length}
              </span>
              <button
                // remover item atual do carrinho
                //
                onClick={() =>{ 
                    let indexProduct = cart.findIndex((item) => item.name === product.name)
                    if(indexProduct !== -1){
                      cart.splice(indexProduct, 1)
                      setCart([...cart])
                    }
                }}
              >
                -
              </button>
            </div>

            <span className="unit">
              {product.price.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
            <span className="total">
              {(
                cart.filter((item) => item.name === product.name).length *
                product.price
              ).toLocaleString("pt-br", { style: "currency", currency: "BRL" })}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default Cart;

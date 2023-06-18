import "./recipe_card.css";
// import latte from '../../assets/caffe_latte.png';

import images from "../../../index2.json";
import additives from "../../../index3.json";

export default function Recipe_card() {
  return (
    <div className="main_container">
      <div className="recipe_card">
        {images &&
          images.map((item) => (
            <div key={item.id} className="recipe_card_container">
              <div className="cross_button"></div>

              {/* product type and sizes */}

              <div className="recipe_card_container_upper">
                <div className="">
                  <img
                    src={item.image}
                    alt=""
                    className="recipe_card_product_pic"
                  />
                </div>
                <div className="recipe_card_product_details">
                  <div className="product_head">
                    <h4>{item.head}</h4>
                  </div>
                  <div className="hot_cold">
                    <button className="product_button green_button" id="green_button">Hot Coffee</button>
                    <button className="product_button">Cold Coffee</button>
                  </div>
                  <div className="product_size">
                    <h5>Size options</h5>
                    <div className="option_bar">
                      <div className="options">
                        <button className="product_button green_button">Short</button>
                        {/* <p>{item.sizes.s1}</p> */}
                      </div>
                      <div className="options">
                        <button className="product_button">Tall</button>
                        {/* <p>{item.sizes.s2}</p> */}
                      </div>
                      <div className="options">
                        <button className="product_button">Grande</button>
                        {/* <p>{item.sizes.s3}</p> */}
                      </div>
                      <div className="options">
                        <button className="product_button">Venti</button>
                        {/* <p>{item.sizes.s4}</p> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* additives */}

              <div className="recipe_card_container_mid">
                <div className="customization_head">
                  <p>Customizations</p>
                </div>
                <div className="customization_type">
                  <div className="option_bar">
                    <div className="options_mid">
                      <button className="product_button green_button">Syrups</button>
                      {/* <p>{item.sizes.s1}</p> */}
                    </div>
                    <div className="options_mid">
                      <button className="product_button">Sauces</button>
                      {/* <p>{item.sizes.s2}</p> */}
                    </div>
                    <div className="options_mid">
                      <button className="product_button">Espresso</button>
                      {/* <p>{item.sizes.s3}</p> */}
                    </div>
                    <div className="options_mid">
                      <button className="product_button">Creamer</button>
                      {/* <p>{item.sizes.s4}</p> */}
                    </div>
                    <div className="options_mid">
                      <button className="product_button">Sweetners</button>
                      {/* <p>{item.sizes.s4}</p> */}
                    </div>
                    <div className="options_mid">
                      <button className="product_button">Toppings</button>
                      {/* <p>{item.sizes.s4}</p> */}
                    </div>
                  </div>
                </div>
                <div className="customization_options">
                  {additives &&
                    additives.map((add) => (
                      <div key={add.id} className="additive_option">
                        <div className="additive_container">
                          <div className="additive_container-image">
                            <img src={add.image} alt="" />
                          </div>
                          <div className="additive_desc">
                            <p>{add.head}</p>
                            <h6>{add.price}</h6>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>

              {/* description & pricing */}

              <div className="recipe_card_container_lower">
                <div className="product_description">
                  <p>{item.description}</p>
                  <p>{item.calories}</p>
                </div>
                <div className="product_pricing">
                  <div className="product_list">
                    <p>
                      {item.head} {item.price}
                    </p>
                    <p>Additives $0.68</p>
                  </div>
                  <div className="buy_button">
                    <button className="add_to_cart">Add to cart</button>
                    <button className="order_now">
                      Order now {item.price}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

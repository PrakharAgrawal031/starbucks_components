import "./recipe_card.css";
// import latte from '../../assets/caffe_latte.png';

import images from "../../../index2.json";

export default function Recipe_card() {
  return (
    <div className="main_container">
      <div className="recipe_card">
        {images &&
          images.map((item) => (
            <div key={item.id} className="recipe_card_container">
              <div className="cross_button"></div>
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
                    <button className="product_button">Hot Coffee</button>
                    <button className="product_button">Cold Coffee</button>
                  </div>
                  <div className="product_size">
                    <h5>Size options</h5>
                    <div className="option_bar">
                      <div className="options">
                        <button className="product_button">Short</button>
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
              <div className="recipe_card_container_mid">
                <div className="customization_head"></div>
                <div className="customization_type"></div>
                <div className="customization_options"></div>
              </div>
              <div className="recipe_card_container_lower">
                <div className="product_description"></div>
                <div className="product_pricing">
                  <div className="product_list"></div>
                  <div className="total_price"></div>
                  <div className="buy_button"></div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

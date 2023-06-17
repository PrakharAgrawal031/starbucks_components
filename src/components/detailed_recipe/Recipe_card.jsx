import './recipe_card.css';

export default function Recipe_card(){
    return(
        <div className='recipe_card'>
            <div className='recipe_card_container'>
                <div className="cross_button"></div>
                <div className='recipe_card_container_upper'>
                    <div className=''><img src="../../assets/caffe_latte.png" alt="Caffe Latte" className='recipe_card_product_pic' /></div>
                    <div className="recipe_card_product_details">
                        <div className="product_head"><h4>Caffè Latte</h4></div>
                        <div className="hot_cold"><
                            button>Hot Coffee</button><button>Cold Coffee</button>
                        </div>
                        <div className="product_size">
                            <h5>Size options</h5>
                            <div className='option_bar'>
                                <div className='options'><button>Short</button><p>240 ml</p></div>
                                <div className='options'><button>Tall</button><p>350 ml</p></div>
                                <div className='options'><button>Grande</button><p>470 ml</p></div>
                                <div className='options'><button>Venti</button><p>590 ml</p></div>
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
                    <div className="product_description">

                    </div>
                    <div className="product_pricing">
                        <div className="product_list"></div>
                        <div className="total_price"></div>
                        <div className="buy_button"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}


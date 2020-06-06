//Dependencies
import React, {Component} from 'react';
import {Icon} from 'react-materialize';
import {Link} from 'react-router-dom';
//Internals
import PRODUCTS from '../../Data';
import {bindActionCreators} from "redux";

import {connect} from "react-redux";
import {addProduct, addToWishlist} from "../../../actions";

class Items extends Component {
    render() {
        const {productMapper} = this.props
        return (
            <div className="items">
                {PRODUCTS.map((product) => {
                    if (productMapper(product)) {
                        return (
                            <div className="item">
                                <Link to={`/products/${product.id}`}>
                                    <div className="product-img">
                                        <img alt={product.name} src={product.img}/>
                                    </div>
                                    <div className="product-details">
                                        <h1 id="product-name">{product.name}</h1>
                                        <h4 id="product-description">{product.description}</h4>
                                    </div>
                                </Link>
                                <div className="price-add">
                                    <h5 id="product-price">${product.price}</h5>
                                    <button data-cy='add-product-to-cart' onClick={() => this.props.add(product)}>Add to
                                        cart
                                    </button>
                                    <button data-cy='add-product-to-wishlist' onClick={() => this.props.addToWishlist(product)}>Add to
                                        wishlist
                                    </button>
                                    <Icon small onClick={() => this.props.add(product)}
                                          id="add-icon">add_shopping_cart</Icon>
                                </div>
                            </div>
                        )
                    }
                })}
            </div>)
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({add: addProduct, addToWishlist: addToWishlist}, dispatch)
}

export default connect(null, mapDispatchToProps)(Items);

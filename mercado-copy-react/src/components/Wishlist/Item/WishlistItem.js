//Dependencies
import React, {Component} from 'react';
//Internals
import {bindActionCreators} from "redux";

import {connect} from "react-redux";
import {addProduct, removeFromWishlist, resetWishlist} from "../../../actions";

class WishlistItem extends Component {
    constructor(props) {
        super(props)
        this.state = {count: 0}
    }

    handleIncrement = () => {
        this.setState({count: this.state.count + 1})
    }

    handleDecrement = () => {
        if (this.state.count > 0) {
            this.setState({count: this.state.count - 1})
        }
    }

    render() {
        const {product} = this.props
        return (

            <div style={{display: "flex", "min-width": "100%"}}>
                <div className="item-image">
                    <img style={{height: "13em"}} className="product-image" src={product.img}
                         alt="product"/>
                </div>
                <div>
                    <h4>{product.name}</h4>
                    <p id="product-description">{product.description}</p>
                    <p id="product-price">${product.price}</p>
                    <button data-cy='remove-from-wishlist'
                            onClick={() => this.props.remove(product.id)}>Remove
                    </button>

                    <div>
                        <button data-cy='minus-one' onClick={this.handleDecrement}>-</button>
                        <span data-cy='counter'>{this.state.count}</span>
                        <button data-cy='plus-one' onClick={this.handleIncrement}>+</button>
                        <button data-cy='add-product'
                                onClick={this.state.count >= 1 ? () => this.props.update(product, this.state.count) : () => {
                                }}>Agregar al carrito
                        </button>
                    </div>
                </div>
            </div>)

    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({update: addProduct, remove: removeFromWishlist, reset: resetWishlist}, dispatch)
}

export default connect(null, mapDispatchToProps)(WishlistItem);

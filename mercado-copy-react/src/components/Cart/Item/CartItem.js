//Dependencies
import React, {Component} from 'react';
//Internals
import {bindActionCreators} from "redux";

import {connect} from "react-redux";
import {addProduct, addToWishlist, removeProduct, resetCart, updateProduct} from "../../../actions";

class CartItem extends Component {
    constructor(props) {
        super(props)
        this.state = {count: this.props.product.quantity}
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
                    <img style={{height: "13em"}} className="product-image" src={product.product.img}
                         alt="product"/>
                </div>
                <div>
                    <h4>{product.product.name}</h4>
                    <p id="product-description">{product.product.description}</p>
                    <p id="product-price">${product.product.price}</p>
                    <p data-cy='product-quantity'>Quantity: {product.quantity}</p>

                    <button data-cy='remove-from-cart' onClick={() => this.props.remove(product.product)}>Remove
                    </button>

                    <div>
                        <button data-cy='minus-one' onClick={this.handleDecrement}>-</button>
                        <span data-cy='counter'>{this.state.count}</span>
                        <button data-cy='plus-one' onClick={this.handleIncrement}>+</button>
                        <button data-cy='update-product'
                                onClick={this.state.count >= 1 ? () => this.props.update(product.product, this.state.count) : () => {
                                }}>Update
                        </button>
                    </div>

                </div>
            </div>
        )
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({add: addProduct, update: updateProduct,remove: removeProduct, reset: resetCart}, dispatch)
}

export default connect(null, mapDispatchToProps)(CartItem);

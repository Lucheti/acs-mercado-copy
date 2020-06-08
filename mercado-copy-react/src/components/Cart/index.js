//Dependencies
import React, {Component} from 'react';
import PropTypes from 'prop-types';
//Internals
import './index.css';
import {bindActionCreators} from "redux";
import {connect} from 'react-redux'
import {removeProduct, resetCart} from "../../actions";

class CartProducts extends Component {
    static propTypes = {
        addItemToCart: PropTypes.func.isRequired,
    };

    render() {
        return (
            <div>
                {this.props.list.length >= 1 &&
                <button data-cy='reset-cart' onClick={() => this.props.reset()}>Empty cart</button>}
                <div className="page-title">
                    <h4>Shopping cart</h4>
                </div>
                {this.props.list.length >= 1 ? <div className="items" style={{"justify-content": "start"}} data-cy="cart-items-list">
                        {this.props.list.map(product => (
                            <div style={{display: "flex", "min-width": "100%"}}>
                                <div className="item-image">
                                    <img style={{height:"13em"}} className="product-image" src={product.product.img} alt="product"/>
                                </div>
                                <div>
                                    <h4>{product.product.name}</h4>
                                    <p id="product-description">{product.product.description}</p>
                                    <p id="product-price">${product.product.price}</p>
                                    <p>Quantity: {product.quantity}</p>
                                    <button data-cy='remove-from-cart' onClick={() => this.props.remove(product)}>Remove
                                    </button>

                                </div>
                            </div>
                        ))}
                    </div> :
                    <div data-cy='empty-cart-message'>There are no products in the cart</div>}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        list: state.cartProducts
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({remove: removeProduct, reset: resetCart}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CartProducts);

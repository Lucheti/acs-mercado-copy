//Dependencies
import React, {Component} from 'react';
import PropTypes from 'prop-types';
//Internals
import './index.css';
import {bindActionCreators} from "redux";
import {connect} from 'react-redux'
import {removeProduct, resetCart} from "../../actions";
import CartItem from "./Item/CartItem";

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
                <p>Total: ${this.props.list.reduce(function (acc, object) {
                    return acc += object.quantity * object.product.price
                }, 0)}</p>
                {this.props.list.length >= 1 ?
                    <div className="items" style={{"justify-content": "start"}} data-cy="cart-items-list">
                        {this.props.list.map(product => (
                            <CartItem product={product}/>
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

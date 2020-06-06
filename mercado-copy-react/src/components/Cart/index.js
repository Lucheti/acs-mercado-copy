//Dependencies
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';
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
                {this.props.list.length >=1 && <button data-cy='reset-cart' onClick={() => this.props.reset()}>Empty cart</button>}
                <h1>This is the cart</h1>
                {this.props.list.length >= 1 ? <div className="items" data-cy="cart-items-list">
                        {this.props.list.map(product => (
                            <div key={product.id}>
                                <h1>{product.name}</h1>
                                <button data-cy='remove-from-cart' onClick={() => this.props.remove(product)}>Remove</button>
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

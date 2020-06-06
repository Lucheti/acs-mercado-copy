//Dependencies
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';
//Internals
import './index.css';
import {bindActionCreators} from "redux";
import {connect} from 'react-redux'
import {removeFromWishlist, removeProduct, resetCart, resetWishlist} from "../../actions";

class Wishlist extends Component {

    render() {
        return (
            <div>
                {this.props.list.length >=1 && <button data-cy='reset-wishlist' onClick={() => this.props.reset()}>Empty wishlist</button>}
                <h1>This is the wishlist</h1>
                {this.props.list.length >= 1 ? <div className="items" data-cy="wishlist-items-list">
                        {this.props.list.map(product => (
                            <div key={product.id}>
                                <h1>{product.name}</h1>
                                <button data-cy='remove-from-wishlist' onClick={() => this.props.remove(product)}>Remove</button>
                            </div>
                        ))}
                    </div> :
                    <div data-cy='empty-wishlist-message'>There are no products in the wishlist</div>}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        list: state.wishlistProducts
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({remove: removeFromWishlist, reset: resetWishlist}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Wishlist);

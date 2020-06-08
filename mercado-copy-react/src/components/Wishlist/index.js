//Dependencies
import React, {Component} from 'react';
//Internals
import './index.css';
import {bindActionCreators} from "redux";
import {connect} from 'react-redux'
import {removeFromWishlist, resetWishlist} from "../../actions";

class Wishlist extends Component {

    render() {
        return (
            <div>
                {this.props.list.length >= 1 &&
                <button data-cy='reset-wishlist' onClick={() => this.props.reset()}>Empty wishlist</button>}
                <div className="page-title">
                    <h4>Wishlist</h4>
                </div>
                {this.props.list.length >= 1 ? <div className="items" data-cy="wishlist-items-list">
                        {this.props.list.map(product => (
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
                                            onClick={() => this.props.remove(product)}>Remove
                                    </button>
                                </div>
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

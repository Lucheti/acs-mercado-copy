//Dependencies
import React, {Component} from 'react';
//Internals
import './index.css';
import {bindActionCreators} from "redux";
import {connect} from 'react-redux'
import {removeFromWishlist, resetWishlist} from "../../actions";
import WishlistItem from "./Item/WishlistItem";

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
                            <WishlistItem product={product}/>
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

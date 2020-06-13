//Dependencies
import React, {Component} from 'react';
import {Icon} from 'react-materialize';
import {Link} from 'react-router-dom';
//Internals
import {bindActionCreators} from "redux";

import {connect} from "react-redux";
import {addProduct, addToWishlist} from "../../../actions";

class Tile extends Component {
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
                    <button data-cy='add-product-to-wishlist'
                            onClick={() => this.props.addToWishlist(product)}>Add to
                        wishlist
                    </button>
                    <div data-cy='add-product-to-cart'
                         onClick={() => this.state.count > 0 ? this.props.add(product, this.state.count) : {}}>
                        <Icon small
                              id="add-icon">add_shopping_cart</Icon></div>
                    <div>
                        <button data-cy='minus-one' onClick={this.handleDecrement}>-</button>
                        <span data-cy='counter'>{this.state.count}</span>
                        <button data-cy='plus-one' onClick={this.handleIncrement}>+</button>
                    </div>
                </div>
            </div>
        )
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({add: addProduct, addToWishlist: addToWishlist}, dispatch)
}

export default connect(null, mapDispatchToProps)(Tile);

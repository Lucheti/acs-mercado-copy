//Dependencies
import React, {Component} from 'react';
import find from 'lodash/find';
import {Link} from 'react-router-dom';
import {Icon} from 'react-materialize';
//Internals
import PRODUCTS from '../Data';
import './index.css';
import {bindActionCreators} from "redux";
import {addProduct, addToWishlist} from "../../actions";
import {connect} from "react-redux";

class ShowProduct extends Component {
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
        const product = find(PRODUCTS, ['id', parseInt(this.props.match.params.id)]);
        const currentProduct = product;
        return (
            <div className="show-product">
                <div className="item-wrapper">
                    <div className="item-image">
                        <img className="product-image" src={currentProduct.img} alt="product"/>
                    </div>
                    <div className="item-name">
                        <div className="product-info">
                            <h3 id="product-name">{currentProduct.name}</h3>
                        </div>
                        <div className="product-bio">
                            <p id="product-description">{currentProduct.description}</p>
                            <p id="product-price">${currentProduct.price}</p>
                            <button data-cy='add-to-wishlist' onClick={() => this.props.addToWishlist(product)}>Add to
                                wishlist
                            </button>

                  <div>
                      <div data-cy='add-product' onClick={() => this.props.add(product, this.state.count)}>
                          <Icon small id="add-icon">add_shopping_cart</Icon>
                      </div>
                      <button data-cy='minus-one' onClick={this.handleDecrement}>-</button>
                      <span data-cy='counter'>{this.state.count}</span>
                      <button data-cy='plus-one'onClick={this.handleIncrement}>+</button>
                  </div>

                        </div>
                        <div className="product-review">
                            <div className="stars">
                                <Icon small id="add-icon">star</Icon>
                                <Icon small id="add-icon">star</Icon>
                                <Icon small id="add-icon">star</Icon>
                                <Icon small id="add-icon">star</Icon>
                                <Icon small id="add-icon">star_half</Icon>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="similar-products">
                    <h5>You might also like</h5>
                    {PRODUCTS.map((product) => {
                        if (
                            product.gender === currentProduct.gender
                            && product.type === currentProduct.type
                            && product.name !== currentProduct.name) {
                            return (
                                <Link to={`/products/${product.id}`}>
                                    <div key={product.id} className="item">
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
                                            <Icon small id="add-icon">add_shopping_cart</Icon>
                                        </div>
                                    </div>
                                </Link>
                            )
                        }
                    })}
                </div>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({add: addProduct, addToWishlist: addToWishlist}, dispatch)
}

export default connect(null, mapDispatchToProps)(ShowProduct);

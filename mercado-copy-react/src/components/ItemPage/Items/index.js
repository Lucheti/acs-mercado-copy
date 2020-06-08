//Dependencies
import React, {Component} from 'react';
//Internals
import PRODUCTS from '../../Data';
import {bindActionCreators} from "redux";

import {connect} from "react-redux";
import {addProduct, addToWishlist} from "../../../actions";
import Tile from "../Tile";

class Items extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {productMapper} = this.props
        return (
            <div className="items">
                {PRODUCTS.map((product) => {
                    if (productMapper(product)) {
                        return (
                           <Tile product={product}/>
                        )
                    }
                })}
            </div>)
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({add: addProduct, addToWishlist: addToWishlist}, dispatch)
}

export default connect(null, mapDispatchToProps)(Items);

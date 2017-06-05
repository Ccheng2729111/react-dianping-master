import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'
import { Link } from 'react-router'

class HomeHeader extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div className="HeaderPart">
                <Link to="/city">
                    <div className="cityName">
                        {this.props.cityName}
                    </div>
                </Link>
                <div className="searchPart"><input placeholder="请输入关键字"/></div>
                <div className="userBtn">
                    我的
                </div>
            </div>
        )
    }
}

export default HomeHeader
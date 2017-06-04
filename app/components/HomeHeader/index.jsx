import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'

class HomeHeader extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div className="HeaderPart">
                <div className="cityName">
                    杭州
                </div>
                <div className="searchPart"><input placeholder="请输入关键字"/></div>
                <div className="userBtn">
                    我的
                </div>
            </div>
        )
    }
}

export default HomeHeader
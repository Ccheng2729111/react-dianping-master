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
                <div>
                    杭州
                </div>
                <div><input /></div>
                <div>
                    <i className="icon-user"></i>
                </div>
            </div>
        )
    }
}

export default HomeHeader
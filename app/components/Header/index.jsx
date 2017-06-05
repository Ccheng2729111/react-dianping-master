import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'

class Head extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div className="header">
                <div className="backKey" onClick={this.clickHandler}>返回</div>
                <span>{this.props.title}</span>
                <div></div>
            </div>
        )
    }
    clickHandler(){
        window.history.back()
    }
}

export default Head
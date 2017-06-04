import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'
import ReactSwipe from 'react-swipe'

class Categroy extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
                <ReactSwipe className="carousel" swipeOptions={{continuous: false}}>
                    <div>PANE 1</div>
                    <div>PANE 2</div>
                    <div>PANE 3</div>
                </ReactSwipe>
            </div>
        )
    }
}

export default Categroy
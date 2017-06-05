import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'
import { Link } from 'react-router'
import { hashHistory } from 'react-router'

class HomeHeader extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            keyword:''
        }
    }
    render() {
        return (
            <div className="HeaderPart">
                <Link to="/city">
                    <div className="cityName">
                        {this.props.cityName}
                    </div>
                </Link>
                <div className="searchPart">
                    <input
                        placeholder="请输入关键字"
                        value={this.state.keyword}
                        onChange={this.onChangeHandler.bind(this)}
                        onKeyUp={this.onKeyUpHandler.bind(this)}
                    />
                </div>
                <div className="userBtn">
                    我的
                </div>
            </div>
        )
    }
    //使用非约束性组件的方式去解决要操作DOM的问题
    onChangeHandler(e){
        const value = e.target.value
        this.setState({
            keyword:value
        })
    }
    onKeyUpHandler(e){
        if(e.keyCode !== 13){
            return
        }
        hashHistory.push('/search/all/'+encodeURIComponent(this.state.keyword))
    }
}

export default HomeHeader
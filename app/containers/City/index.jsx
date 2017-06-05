import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import * as userInfoActionFromOther from '../../actions/userinfo'
import {bindActionCreators} from 'redux'
import Header from '../../components/Header/index'
import CurrentCity from '../../components/CurrentCity/index'
import CityList from '../../components/CityList/index'
import localStore from '../../util/localStore'
import {CITYNAME} from '../../config/localStoreKey'
import {hashHistory} from 'react-router'

class City extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
                <Header title="选择城市" />
                <CurrentCity cityName={this.props.userinfo.cityName}/>
                <CityList chengeCityHandler = {this.changeCityFn.bind(this)}/>
            </div>
        )
    }
    changeCityFn(newCity){
        const userinfo = this.props.userinfo//获取redux中存储的userinfo
        userinfo.cityName = newCity          //将userinfo里的cityname改成传入的值
        localStore.setItem(CITYNAME,newCity)//将localStore改成新的城市
        hashHistory.push('/')               //使用route的hashHistory返回首页。
    }
}
function mapStateToProps(state){
    return{
        userinfo: state.userinfo
    }
}

function mapDispatchToProps(dispatch){
    return{
        userInfoActions : bindActionCreators(userInfoActionFromOther,dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(City)

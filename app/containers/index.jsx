import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import localStore from '../util/localStore'
import {CITYNAME} from '../config/localStoreKey'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as userInfoAction from '../actions/userinfo'


class App extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            initDone: false
        }
    }
    render() {
        return (
            <div>
                {
                    this.state.initDone ?
                        this.props.children : <span>加载中....</span>
                }
            </div>
        )
    }
    //componentDidMount的作用域问题，要注意！！！
    componentDidMount(){
        let cityName = localStore.getItem(CITYNAME);
        if(cityName === null){
            cityName = "杭州"
        }
        console.log(cityName)

        this.props.userInfoAction.update({
            cityName: cityName
        })
        setTimeout(()=> {
            this.setState({
                initDone:true
            })
        },1000)
    }
}
 function mapStateToProps(state){
    return{}
 }

 function mapDispatchToProps(dispatch){
     return{
        userInfoAction : bindActionCreators(userInfoAction,dispatch)
     }
 }

export default connect (
    mapStateToProps,
    mapDispatchToProps
)(App)

import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import * as userInfoActionFromOther from '../../actions/userinfo'
import {bindActionCreators} from 'redux'
import Header from '../../components/Header/index'
import CurrentCity from '../../components/CurrentCity/index'

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
            </div>
        )
    }
    componentDidMount(){
        console.log(this.props.userInfoActions)
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

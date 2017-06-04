import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { getAdData } from '../../../fetch/getData/getData'
import HomeAd from '../../../components/homeAd/index'

class AdVerTising extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state={
            data:[]
        }
    }
    render() {
        return (
            <div>
                {
                    this.state.data.length ?
                    <HomeAd data={this.state.data}/> : <div>'加载中...'</div>
                }
            </div>
        )
    }
    componentDidMount(){
        const getData = getAdData()
        getData.then((res) =>{
            return res.json()
        }).then((json) =>{
            const result = json
            if(result.length){
                this.setState({
                    data : result
                })
            }
        })
    }
}

 export default AdVerTising
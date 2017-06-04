import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'
import { getListData } from '../../../fetch/getData/getData'

class ListPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data: [],
            hasMore: false
        }}

    render() {
        return (
            <div>
                <h2 className="home-list-title">猜你喜欢</h2>
                <div>{this.state.data.length}</div>
            </div>
        )
    }
    componentDidMount(){
        this.loadFirstPageData()
    }
    //获取首屏的数据。
    loadFirstPageData(){
        const cityName = this.props.cityName
        const result = getListData(cityName,0)
        this.resultHandler(result)
    }
    //数据处理
    resultHandler(result){
        result.then(res =>{
            return res.json()
        }).then(json => {
            const hasMore = json.hasMore
            const data = json.data
            this.setState({
                data: data,
                hasMore: hasMore
            })
        })
    }
}

export default ListPage
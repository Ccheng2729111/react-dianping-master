import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'
import { getListData } from '../../../fetch/getData/getData'
import List from '../../../components/List/index'
import LoadMore from '../../../components/LoadMore/index'

class ListPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data: [], //存储后台传过来的数据。
            hasMore: false, //记录当前状态下还有没有更多的数据可以加载。
            isLoadingMore: false, //记录是加载中还是点击加载更多。
            page:1
        }}

    render() {
        return (
            <div>
                <h2 className="home-list-title">猜你喜欢</h2>
                {
                    this.state.data.length ?
                        <List data = {this.state.data}/> :
                        <div>加载中....</div>
                }
                {
                    this.state.hasMore ?
                        <LoadMore isLoadingMore = {this.state.isLoadingMore} loadMoreFn = {this.loadMoreData.bind(this)}/>:
                        ''
                }
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
    //获取加载更多的数据.
    loadMoreData(){
        this.setState({
            isLoadingMore:true
        })
        const cityName = this.props.cityName
        const page = this.state.page
        const result = getListData(cityName,page)
        this.resultHandler(result)
        this.setState({
            page: page + 1,
            isLoadingMore: false
        })
    }
    //数据处理
    resultHandler(result){
        result.then(res =>{
            return res.json()
        }).then(json => {
            const hasMore = json.hasMore
            const data = json.data
            this.setState({
                hasMore: hasMore,
                data: this.state.data.concat(data)
            })
        })
    }
}

export default ListPage
import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'

class LoadMore extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const isLoadMore = this.props.isLoadingMore;
        return (
            <div className="load-more" ref='wrapper'>
                {
                    isLoadMore ?
                        <span>加载中。。。</span> :
                        <span onClick={this.loadMoreHandler.bind(this)}>加载更多</span>
                }
            </div>
        )
    }
    loadMoreHandler(){
        this.props.loadMoreFn()
    }
    componentDidMount(){
        let timeoutId;
        const wrapper = this.refs.wrapper; //获取DOM节点
        const loadMoreFn = this.props.loadMoreFn;
        function callback(){
            const top = wrapper.getBoundingClientRect().top //调用api方法获取dom节点到顶部的距离
            const windowHeight = window.screen.height //获取当前window的高度
            if(top && top <= windowHeight){ //如果top有值并且滑动到小于或等于屏幕高度时调用loadMoreFn()
                loadMoreFn()
            }
        }
        window.addEventListener('scroll',function () { //在屏幕scroll的时候绑定监听函数
            //截取时间流
            if(timeoutId){
                clearTimeout(timeoutId)
            }
            timeoutId = setTimeout(callback,50);
        }.bind(this),false);
    }
}

export default LoadMore
import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import cs from 'classnames'
import Submit from '../../buttons/submit'
import Cancle from '../../buttons/cancle'
import actions from '$redux/actions/write'
import commonFetch from '$redux/commonFetch'
import { getCurrentWorkInfo } from '$utils'

const mapStateToProps = (state, ownProps) => {
    return {
        workList: state.writer.workList,
        currentArticleID: state.writer.currentArticleID,
        currentWorkID: state.writer.currentWorkID
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {

        createNewArticle: (data) => { dispatch(commonFetch(actions.createNewArticle, data)) },
        //非异步
        changeActiveArticle: (data) => { dispatch(actions.changeActiveArticle({ payload: data })) },

        deleteArticleById: (data) => {  dispatch(commonFetch(actions.deleteArticle, data)) }
    }
}

class CreateArticle extends React.Component {

    static PropTypes = {
        currentWorkID: PropTypes.number.isRequired,
        currentArticleID: PropTypes.number.isRequired,
        workList: PropTypes.number.isRequired
    }
    constructor() {
        super(...arguments);
        this.state = {
            hoverElementID: -1
        }
    }

    render() {
        let { workList, currentWorkID, currentArticleID } = this.props;
        let workInfo = getCurrentWorkInfo(workList, currentWorkID);
        let articleList = [];
        if(workInfo && workInfo.articleList){
            articleList = workInfo.articleList;
        }
        
        let styles = {
            'u-article': true,
            'u-article-skin': true,
            'u-article-active': false
        };
        return (
            <div className='m-add-article' onMouseLeave={() => this.setState({ hoverElementID: -1 })}>
                <div className='u-create' onClick={this.createArticle}>
                    <div className='field'>+新建文章</div>
                </div>
                <div className='u-article-list'>
                    {
                        articleList.map((item) => {
                            styles['u-article-active'] = currentArticleID === item.id;
                            return (
                                <div className={cs(styles)} key={"article-" + item.id}
                                    data-id={item.workID}
                                    onClick={this.changeActiveArticle.bind(this, item.id)}
                                    onMouseEnter={() => this.setState({ hoverElementID: item.id })}>

                                    <div className='field z-unit flex'>
                                        <span className='z-file-logo'>
                                            <i className="iconfont">&#xe6f4;</i>
                                        </span>
                                        <span className="col z-file-title">{item.title || '无标题文章'}</span>
                                        {
                                            this.state.hoverElementID === item.id &&
                                            <span className="z-file-logo" onClick={this.deleteArticle.bind(this, item.id)}>
                                                <i className="iconfont">&#xe6f2;</i>
                                            </span>
                                        }

                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }

    createArticle = () => {
        let { currentWorkID, createNewArticle } = this.props;
        createNewArticle({
            url: '/writer/createNewArticle',
            fetchData: {
                workID: currentWorkID
            }
        });
    }

    deleteArticle = (articleID) => {
        this.props.deleteArticleById({
            url:'/writer/deleteArticleById',
            fetchData:{
                articleID
            }
        });
    }

    changeActiveArticle = (articleID) => {
        let { currentWorkID, changeActiveArticle } = this.props;
        changeActiveArticle({
            workID: currentWorkID,
            articleID
        });
    }

}

// export default connect(mapStateToProps, mapDispatchToProps)(CreateArticle);
module.exports = connect(mapStateToProps, mapDispatchToProps)(CreateArticle);


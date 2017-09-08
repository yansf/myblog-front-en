import { Map, List } from 'immutable'

// interface IModel{
//     workList: List<any>,
//     articleLists:Map<string, {}>,
//     currentArticleID: number,
//     currentWorkID: number,
//     contentVisible: boolean
// }

const data:StoreState = {
    writer: Map({
        workList: [],
        articleLists:{},
        articleInfo:{},
        currentArticleID:0,
        currentWorkID:0,
        //显示编辑模块
        contentVisible: false
    })
}

export interface StoreState{
    writer:Map<string, {}>
}

export default data;

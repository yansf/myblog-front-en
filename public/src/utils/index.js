const setCurrentWorkInfo = function(){
    //todo 做成存到localstoage里面，后面直接取缓存的数据
}

const setCurrentArticleInfo = function(){
    //todo 做成存到localstoage里面，后面直接取缓存的数据
}

const getCurrentWorkInfo = function(workList, workID=0){
    workID = +workID;
    return workList.find((item) => item.id === workID);
}

const getCurrentArticleInfo = function(articleList, articleID=0){
    articleID = +articleID;
    return articleList.find((item) => item.id === articleID);
}


module.exports = {  
    setCurrentWorkInfo,
    setCurrentArticleInfo,
    getCurrentWorkInfo,
    getCurrentArticleInfo
}
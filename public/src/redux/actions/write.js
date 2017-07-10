// { type: 'FETCH_POSTS' }
// { type: 'FETCH_POSTS', status: 'error', error: 'Oops' }
// { type: 'FETCH_POSTS', status: 'success', response: { ... } }

export const createNewWork = ({status='', payload=''}) => ({
  type: 'CREATE_NEW_WORK',
  payload:payload,
  status:status
})

export const changeActiveWork = ({status='', payload=''}) => ({
    type:'CHANGE_ACTIVE_WORK',
    payload:payload,
    status:status
})

export const createNewArticle = ({status='', payload=''}) => ({
    type:'CHANGE_NEW_ARTICLE',
    payload:payload,
    status:status
})

export const changeActiveArticle = ({status='', payload=''}) => ({
    type:'CHANGE_ACTIVE_ARTICLE',
    payload:payload,
    status:status
})

export default{
    createNewWork,
    changeActiveWork,
    createNewArticle,
    changeActiveArticle
}
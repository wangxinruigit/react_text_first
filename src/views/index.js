// export {default as Login} from './login'
// export {default as ArticleList} from './Article/articleList'
// export {default as ArticleItem} from 'ArticleItem'
// export {default as NotFound} from './NotFound'
// export {default as Setting} from './Setting'
// export {default as DashBoard} from './DashBoard'


// import Login from './login'
// import ArticleList from './Article/articleList'
// import ArticleItem from './Article/ArticleItem'
// import NotFound from './NotFound'
// import Setting from './Setting'
// import DashBoard from './DashBoard'

import Loadable from 'react-loadable';
import Loading from '../components/Loading';

const Login=Loadable({
    loader: () => import('./login'),
    loading: Loading,
})

const ArticleList=Loadable({
    loader: () => import('./Article/articleList'),
    loading: Loading,
})
const ArticleItem=Loadable({
    loader: () => import('./Article/articleItem.js'),
    loading: Loading,
})
const NotFound=Loadable({
    loader: () => import('./NotFound'),
    loading: Loading,
})
const Setting=Loadable({
    loader: () => import('./Setting'),
    loading: Loading,
})
const DashBoard=Loadable({
    loader: () => import('./DashBoard'),
    loading: Loading,
})


export {
    Login,
    ArticleList,
    ArticleItem,
    NotFound,
    Setting,
    DashBoard
}
import React from 'react';
import ReactDOM from 'react-dom';
//引入路由
import {BrowserRouter,Link,Route} from 'react-router-dom';
import Main from './components/Main';
import About from './components/About';
import * as serviceWorker from './serviceWorker';
//路由表
const App =()=>(
    <BrowserRouter basename='/' keyLength={4}>
        <div>
            <div>
                <Link to="/">首页</Link><br/>
                <Link to="/About/12">关于我们</Link><br/>
                <Link to='/render'replace={true}>render页面</Link><br/>
                <Link to='/child'>children页面</Link><br/>
                <Link to={{pathname:'search',search:'?name=23&id=334'}}>搜索页面</Link><br/>
            </div>
            <div>
                {/* 路由表的定义 */}
                <Route path="/" exact component={Main}/><br/>
                <Route path="/about/:userid" component={About}/><br/>
                <Route path="/render" render={({history,location})=><h1>{console.log(history,location)}herder页面
                <span onClick={()=>{history.push('/')}}>返回首页</span>
                <span onClick={()=>{history.go(-1)}}>返回上一页</span>
                </h1>}/><br/>
                <Route path='/search'render={({location})=><h1>{console.log(location)}搜索页面
                搜索内容<br/>
                id:{new URLSearchParams(location.search).get('id')}
                <br/>
                name:{new URLSearchParams(location.search).get('name')}
                </h1>}/><br/>
                <Route path="/child" children={()=><h2>我是children页面</h2>}/>
            </div>
        </div>
    </BrowserRouter>
)

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

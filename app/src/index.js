import React from 'react';
import ReactDOM from 'react-dom';
//引入路由
import {BrowserRouter,NavLink,Route,component} from 'react-router-dom';
import Main from './components/Main';
import About from './components/About';
import './index1.css';
import Content from './components/content';
import * as serviceWorker from './serviceWorker';
//路由表
const App =()=>(
    <BrowserRouter basename='/' keyLength={4}>
        <div>
            <div>
                <NavLink exact to="/" activeClassName='active'>首页</NavLink><br/>
                <NavLink to="/About/12" activeClassName='active'>关于我们</NavLink><br/>
                <NavLink to='/render' activeClassName='active'>render页面</NavLink><br/>
                <NavLink to='/content/'activeClassName='active'>有子路由的页面</NavLink>
            </div>
            <div>
                {/* 路由表的定义 */}
                <Route path="/" exact component={Main}/><br/>
                <Route path="/about/:userid" component={About}/><br/>
                <Route path="/render" render={({history,location})=><h1>{console.log(history,location)}herder页面
                <span onClick={()=>{history.push('/')}}>返回首页</span>
                <span onClick={()=>{history.go(-1)}}>返回上一页</span>
                </h1>}/><br/>
                <Route path="/content" component={Content}/>
            </div>
        </div>
    </BrowserRouter>
)

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

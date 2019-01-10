import React,{Component} from 'react';
import {Route,Link} from 'react-router-dom';

import child1 from './child1';
import child2 from './child2';

class Content extends Component{
    render (){
        return<div>
            <h2>有子路由的页面</h2>
            <div>
                <Link to="/content/child1">child1页面</Link>
                <Link to="/content/child2">child2页面</Link>
            </div>
            <div className="child">
                <Route path="/content/child1" component={child1}/>
                <Route path="/content/child2" component={child2}/>
            </div>

        </div>
    }
}
export default Content;

import React,{Component} from 'react';

import {NavLink} from 'react-router-dom';
import {Row,Col,Icon} from 'antd';
import './header.scss';


class Header extends Component{
	render(){
		return (
			<div className="qcs-header">
				<div className="qcs-search">
					<Row>
						<Col span={4} ><Icon className="qcs-user" type="user"/></Col>
						<Col span={16}>aa</Col>
						<Col span={4}><Icon className="qcs-shopping" type="shopping-cart"/></Col>
					</Row>
				</div>
				<nav className="qcs-menu">
					<ul>
						<li><NavLink exact to="/" activeClassName="active">今日推荐</NavLink></li>
						<li><NavLink to="/mask" activeClassName="active">面膜中心</NavLink></li>
						<li><NavLink to="/life" activeClassName="active">居家生活</NavLink></li>
						<li><NavLink to="/global" activeClassName="active">购全球</NavLink></li>
					</ul>
				</nav>
			</div>
		)
	}
}

export default Header;
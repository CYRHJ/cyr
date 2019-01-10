import React,{Component} from 'react';
import axios from 'axios';

//引入轮播组件
import Swiper from '../../components/main/swiper';

class Main extends Component{
	//设置初始值
	constructor(){
		super();
		this.state = {
			swiperList:[]//轮播图的数据
		}
	}
	componentDidMount(){
		axios.get('aladdin/get_batch_data?codes=["chajian"]&version=&app_channel=wap&plat=wap&access_token=638b4d2db133b04c8afef24e470a4701&device_id=ef62d140-0b0a-11e9-b5c2-5bc7378abcd9').then(res=>{
			console.log(res);
			this.setState({
				swiperList:res.data.data.chajian.datas
			})
			
		})
	}
	render(){
		return (
			<div>
				<Swiper swiperList={this.state.swiperList}/>
			
			</div>
		)
	}
}

export default Main;
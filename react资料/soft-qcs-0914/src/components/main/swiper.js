import React,{Component} from 'react';
//引入轮播插件
import ReactSwipe from 'react-swipe';
import './swiper.scss';
class Swiper extends Component{
	render(){
		return (
			
			<ReactSwipe className="carousel" swipeOption={{continuous:true,auto:3000 }} key={this.props.swiperList.length}>
			{/* key :作用   唯一标识某一列，key是不允许重复，如果没设置key或者key重复会报错 */}
				{
					this.props.swiperList.map((item)=><div  key={item.id}>
						<img  src={item.image_url}/>
					
					</div>)
				}
			</ReactSwipe>
			
		)
	}
}

export default Swiper;
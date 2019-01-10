import React,{Component} from 'react';
class About extends Component{
    render(){
        console.log(this.props.match);
        return<div>
            关于我们页面
            用户id:{this.props.match.params.userid}
        </div>
    }
}
export default About;
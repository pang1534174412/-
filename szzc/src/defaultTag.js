import React, { Component } from 'react'
import { Card ,Progress  } from 'antd';

import http from './require/index.js'
import img from './assets/img/img.jpg'
import './defaultTag.css'
import 'antd/dist/antd.css';
export default class DefaultTag extends Component {
	constructor(){
		super();
		
		this.state={
			loginTimeStr:'',
			ipaddr:''
		}
		
	}
	componentWillMount(){
		http({
			url:'/loginLog/selectOneByUserName?userName=admin',
			method:'get'
		}).then(res=>{
			console.log(res)
			this.setState({
				ipaddr:res.ipaddr,
				loginTimeStr:res.loginTimeStr
			})
		})
	}
	render() {
		// console.log(1)
		return (
			 <>
			 <div className='all'>
				<div >
					<Card style={{ width: 250 }}>
					     <div className="user-info">
					        <img style={{width:'60px',height:'60px'}} src={img} className="user-avator"/>
					        <div className="user-info-cont">
					            <div className="user-info-name">admin</div>
					            <div>管理员</div>
							</div>
					     </div>
					    <div className="user-info-list" style={{fontSize:'12px'}}>
					        登录时间：{this.state.loginTimeStr}
					    </div>
					    <div className="user-info-list">
					        登录地点：{this.state.ipaddr}
					    </div>
					</Card>
					    <Card size="small"  style={{ width: 250 }}>
					      <div className="clearfix">
					            <span>语言详情</span>
					        </div>
					        Vue<Progress percent={71.3} strokeColor="#42b983" />
							JavaScript<Progress percent={24.1} strokeColor="#f1e05a" />
							CSS<Progress percent={13.7} />
							HTML<Progress percent={5.9} strokeColor="#f56c6c" />
					</Card>
				</div>
				<div className="grid">
					<Card size="small"  style={{ width: 130,height:80}} className="grid-con-icon">
						<div className="grid-content grid-con-1">
							<div className="grid-cont-left"></div>
							<div className="grid-cont-right">
							<div className="grid-num">1234</div>
							<div>用户访问量</div>
							</div>
						</div>
					</Card>
					<Card size="small"  style={{ width: 130,height:80 }} className="grid-con-icon">
						<div className="grid-content grid-con-2">
							<div className="grid-cont-left"></div>
							<div className="grid-cont-right">
							<div className="grid-num">321</div>
							<div>系统消息</div>
							</div>
						</div>
					</Card>
					<Card size="small"  style={{ width: 130,height:80 }} className="grid-con-icon"> 
						<div className="grid-content grid-con-3">
							<div className="grid-cont-left"></div>
							<div className="grid-cont-right">
							<div className="grid-num">5000</div>
							<div>数量</div>
							</div>
						</div>
					</Card>
				</div>	
			 </div>
			
			 </>
		)
	}
}

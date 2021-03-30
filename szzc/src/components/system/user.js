import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import http from '../../require/index.js'
const { SubMenu } = Menu;
const { Header, Content, Sider ,Footer} = Layout;
export default class User extends Component {
constructor(){
		super();
		
		this.state={
			loginTimeStr:'',
			ipaddr:''
		}
		
	}
	componentWillMount(){
		http({
			url:'/user/queryAll',
			method:'get',
			query:{
				pageNo:1,
				pageSize:1,
				user:'admin'
			}
		}).then(res=>{
			console.log(res)
			
		})
	}
	render() {
		// console.log(1)
		return (
			<div>
				<h1>user</h1>  
			</div>
		)
	}
}

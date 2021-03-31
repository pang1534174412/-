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
			url:'/api/role/page',
			method:'get',
			params:{
				pageNo:1,
				pageSize:1,
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

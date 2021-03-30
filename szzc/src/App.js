import React, { Component } from 'react';
import http from './require/index.js'
import './App.css'
import { Layout, Menu, Breadcrumb, Spin,Dropdown } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined ,DownOutlined } from '@ant-design/icons';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import User from './components/system/user.js'
import Dict from './components/system/dict.js'
import M_enu from './components/system/menu.js'
import LoginLog from './components/system/loginLog.js'
import OperLog from './components/system/operLog.js'
import Role from './components/system/role.js'
import DefaultTag from './defaultTag.js'
// import Time from './time.js'
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class App extends Component {
<<<<<<< HEAD
	constructor(){
		super();
		this.state={
			silder:[],
			collapsed: false,
			s_c:[],
			isLoading:true,
			new_time:'',
			nowWeek:''
		}
	}
	gettime() {
	    const nowDate = new Date();
	    const date = {
	      year: nowDate.getFullYear(),
	      month: nowDate.getMonth() + 1,
	      date: nowDate.getDate(),
	      hh:
	        new Date().getHours() < 10
	          ? "0" + new Date().getHours()
	          : new Date().getHours(),
	
	      mm:
	        new Date().getMinutes() < 10
	          ? "0" + new Date().getMinutes()
	          : new Date().getMinutes(),
	      ss:
	        new Date().getSeconds() < 10
	          ? "0" + new Date().getSeconds()
	          : new Date().getSeconds(),
	      week: new Date().getDay(),
	    };
	    if (date.week === 1) {
			this.setState({
				nowWeek:"星期一"
			})
	    } else if (date.week === 2) {
	      this.setState({
	      	nowWeek:"星期二"
	      })
	    } else if (date.week === 3) {
	     this.setState({
	     	nowWeek:"星期三"
	     })
	    } else if (date.week === 4) {
	    this.setState({
	    	nowWeek:"星期四"
	    })
	    } else if (date.week === 5) {
	      this.setState({
	      	nowWeek:"星期五"
	      })
	    } else if (date.week === 6) {
	     this.setState({
	     	nowWeek:"星期六"
	     })
	    } else if (date.week === 0) {
	      this.setState({
	      	nowWeek:"星期日"
	      })
	    }
	
	    const newmonth = date.month > 10 ? date.month : "0" + date.month;
	    const day = date.date > 10 ? date.date : "0" + date.date;
		this.setState({
			new_time: date.year +
	      "-" +
	      newmonth +
	      "-" +
	      day +
	      " " +
	      date.hh +
	      ":" +
	      date.mm +
	      ":" +
	      date.ss
		})
	  }
	componentWillMount(){
		setInterval(()=>{
			this.gettime()
		},1000)
		http({
			url:'/menu/queryNodes',
			method:'get'
		}).then(res=>{
			console.log(res)
			this.setState({
				silder:res.data,
				isLoading:false,
				s_c:res.data.children
			})
		})
	}
	
=======
  constructor() {
    super();
    this.state = {
      silder: [],
      collapsed: false,
      s_c: [],
      isLoading: true,
    };
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  componentWillMount() {
    http({
      url: "/api/menu/queryNodes",
      method: "get",
    }).then((res) => {
      console.log(res);
      this.setState({
        silder: res.data,
        isLoading: false,
        s_c: res.data.children,
      });
    });
  }
>>>>>>> e41fb7320964f39f8f9f6f2b0048af769f063a0b
  render() {
	  const menu = (
	    <Menu>
	      <Menu.Item key="0">
	        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
	          1st menu item
	        </a>
	      </Menu.Item>
	      <Menu.Item key="1">
	        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
	          2nd menu item
	        </a>
	      </Menu.Item>
	      <Menu.Divider />
	      <Menu.Item key="3" disabled>
	        3rd menu item（disabled）
	      </Menu.Item>
	    </Menu>
	  );
    return (
       <Layout>
         <Header className="header">
               <div className="logo" >租车后台管理系统</div>
			   <div className="time" >{this.state.new_time}</div>
			   <div className="week" >{this.state.nowWeek}</div>
			   <div className="menu" >
					<Dropdown overlay={menu}>
						<a className="ant-dropdown-link" onClick={e => e.preventDefault()}>admin-管理员<DownOutlined /></a>
					</Dropdown>
				</div>
			   <div className="exit" ><a>退出</a></div>
             </Header>
			 <Router>
             <Layout>
               <Sider width={200} className="site-layout-background">
                 {
					this.state.isLoading
						?<h1>1</h1>
						:<Menu
						mode="inline"
						defaultSelectedKeys={['1']}
						defaultOpenKeys={['1']}
						style={{ height: '100%', borderRight: 0 }}
						>
						{
							this.state.silder.map(function(item){
								return(
								<SubMenu key={item.id} title={item.label}>
								        {
										
											(item.children|| []).map(function(ite){
												return(
													<Menu.Item key={ite.id}><Link to={ite.url}>{ite.label}</Link></Menu.Item>
												)
											})
										}
								</SubMenu>
								
								)
							})
						}
						</Menu>
				 }
               </Sider>
               <Layout style={{ padding: '0 24px 24px' }}>
                 <Breadcrumb style={{ margin: '16px 0' }}>
                   <Breadcrumb.Item>Home</Breadcrumb.Item>
                   <Breadcrumb.Item>List</Breadcrumb.Item>
                   <Breadcrumb.Item>App</Breadcrumb.Item>
                 </Breadcrumb>
                 <Content
                   className="site-layout-background"
                   style={{
                     padding: 24,
                     margin: 0,
                     minHeight: 280,
                   }}
                 >
				 <Route path='/defaultTag' component={DefaultTag}></Route>
					<Route exact path='/'>
						<Redirect to="/defaultTag" />
					</Route>
                   <Route path='/user/page' component={User}></Route>
				   <Route path='/role/page' component={Role}></Route>
				   <Route path='/dict/page' component={Dict}></Route>
				   <Route path='/log/loginLog' component={LoginLog}></Route>
				   <Route path='/log/operLog' component={OperLog}></Route>
				   <Route path='/menu/page' component={M_enu}></Route>
                 </Content>
               </Layout>
             </Layout>
			 </Router>
        </Layout>
    );
  }
}

export default App;
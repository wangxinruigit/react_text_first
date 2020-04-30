import React, {Component} from 'react';
import {Layout, Menu, Breadcrumb} from 'antd';

import {withRouter} from 'react-router-dom'

// import './index.less'

const {Header, Content, Sider} = Layout;

@withRouter

class Frame extends Component {

    onMenuClick=({key})=>{
        this.props.history.push(key)
    }
    render() {
        return (
            <div>
                <Layout>
                    <Header className="header">
                        <div className="logo"/>
                    </Header>
                    <Layout>
                        <Sider width={200} className="site-layout-background">

                            <Menu
                                mode="inline"
                                selectedKeys={[this.props.location.pathname]}
                                style={{height: '100%', borderRight: 0}}
                                onClick={this.onMenuClick}
                            >
                                {
                                    this.props.menu.map( item =>{
                                        return  <Menu.Item key={item.path} >
                                            <span>
                                                {
                                                    item.icon?<item.icon/>:''
                                                }
                                                {item.title}
                                            </span>
                                        </Menu.Item>
                                    } )
                                }
                            </Menu>
                        </Sider>
                        <Layout style={{padding: '0 24px 24px'}}>
                            <Breadcrumb style={{margin: '16px 0'}}>
                                <Breadcrumb.Item>Home</Breadcrumb.Item>
                                <Breadcrumb.Item>List</Breadcrumb.Item>
                                <Breadcrumb.Item>App</Breadcrumb.Item>
                            </Breadcrumb>
                            <Content
                                className="site-layout-background myContent"
                                style={{
                                    padding: 24,
                                    margin: 0,
                                    minHeight: 280,
                                }}
                            >
                                {this.props.children}
                            </Content>
                        </Layout>
                    </Layout>
                </Layout>,
            </div>
        )

    }
}


export default Frame;
import React, {useState} from 'react';
import { Layout, Menu, Button } from 'antd';
import {
  PieChartOutlined,
  TeamOutlined,
  DollarOutlined,
} from '@ant-design/icons';
import './App.less';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [presurveyComplete, setPresurveyComplete] = useState(false);
  const loginBtnText = isLoggedIn ? "LOGOUT" : "LOGIN";
  // const [user, setUser] = useState({name: "Marco"})

  const onCollapse = collapsed => {
      setCollapsed(!collapsed);
  };

  return (
    <div className="App">
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible={true} collapsed={collapsed} onCollapse={() => onCollapse(collapsed)}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              Explore Career Options
            </Menu.Item>
            <SubMenu key="sub1" icon={<TeamOutlined />} title="Educational Programs">
              <Menu.Item key="2">Explore Educational Programs</Menu.Item>
              <Menu.Item key="3">Apply To Programs</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<DollarOutlined />} title="Financial Aid">
              <Menu.Item key="4">Learn About Financial Aid</Menu.Item>
              <Menu.Item key="5">Apply for Financial Aid</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background header" style={{ padding: 0 }}>
            <Button id="login-btn">{loginBtnText}</Button>
          </Header>
          <Content style={{ margin: '0 16px' }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              Let's get you on the road to a successful career!
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>©2020 Juntos2College</Footer>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
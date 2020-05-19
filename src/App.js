import React, {useState} from 'react';
import { Layout, Menu } from 'antd';
import {
  PieChartOutlined,
  TeamOutlined,
  DollarOutlined,
} from '@ant-design/icons';
import './App.less';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  // const [user, setUser] = useState({name: "Marco"})

  const onCollapse = collapsed => {
    console.log(collapsed);
    if (collapsed) {
      setCollapsed(false);
    } else if (!collapsed) {
      setCollapsed(true)
    }
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
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              Bill is a cat.
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>©2020 Juntos2College</Footer>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
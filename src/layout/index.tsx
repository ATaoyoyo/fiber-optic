import { useState } from "react";
import { Breadcrumb, Layout, Menu } from "@arco-design/web-react";
import {
	IconBug,
	IconFile,
	IconHome,
	IconImage,
	IconNotification,
	IconSettings,
	IconTool,
	IconUserGroup,
} from "@arco-design/web-react/icon";
import { Outlet, useNavigate } from "react-router-dom";

import "./style/index.modules.less";
import LayoutHeader from "./LayoutHeader";

function PageLayout() {
	const [collapsed, setCollapsed] = useState(false);
	const navigate = useNavigate();

	const navigateRoute = (path: string) => {
		navigate(path);
	};

	const onCollapsed = () => {
		setCollapsed(!collapsed)
	}

	return (
		<Layout className="layout">
			<Layout.Sider collapsed={collapsed}>
				<div className="logo">
					{/* <div className="logo-bg"></div> */}
					<h1 className="title"></h1>
				</div>
				<Menu defaultOpenKeys={["/"]} onClickMenuItem={navigateRoute}>
					<Menu.Item key="/">
						<IconHome />
						首页
					</Menu.Item>
					<Menu.Item key="/workorder">
						<IconFile />
						工单管理
					</Menu.Item>
					<Menu.Item key="/alarmrecord">
						<IconNotification />
						报警记录
					</Menu.Item>
					<Menu.Item key="/area">
						<IconImage />
						区域管理
					</Menu.Item>
					<Menu.Item key="/errorcatch">
						<IconBug />
						报错处理
					</Menu.Item>
					<Menu.Item key="/device">
						<IconTool />
						设备统计
					</Menu.Item>
					<Menu.Item key="/scheduling">
						<IconUserGroup />
						排班管理
					</Menu.Item>
					<Menu.Item key="/adminsetting">
						<IconSettings />
						系统管理
					</Menu.Item>
				</Menu>
			</Layout.Sider>
			<Layout>
				<Layout.Header>
					<LayoutHeader onClickCollapsed={onCollapsed} collapsed={collapsed} />
				</Layout.Header>
				<Layout className="content">
					<Breadcrumb>
						<Breadcrumb.Item>首页</Breadcrumb.Item>
					</Breadcrumb>
					<Layout.Content>
						<Outlet />
					</Layout.Content>
				</Layout>
			</Layout>
		</Layout>
	);
}

export default PageLayout;

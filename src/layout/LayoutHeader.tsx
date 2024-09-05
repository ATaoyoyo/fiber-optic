import { Avatar, Dropdown, Menu } from "@arco-design/web-react";
import {
	IconCalendar,
	IconMenuFold,
	IconUser,
} from "@arco-design/web-react/icon";

import "./style/layoutheader.modules.less";

const dropList = (
	<Menu>
		<Menu.Item key="logout">退出登录</Menu.Item>
	</Menu>
);

const PLAT_NAME = '光纤线路周界安防预警监测平台欢迎您'

function LayoutHeader({
	collapsed,
	onClickCollapsed,
}: {
	collapsed: boolean;
	onClickCollapsed: () => void;
}) {
	return (
		<div className="layout-header">
			<h2 className="plat-name">
				<IconMenuFold
					style={{
						fontSize: 20,
						marginRight: 10,
						color: "#666",
						cursor: "pointer",
						transform: collapsed ? "rotateY(180deg)" : "rotateY(0deg)",
						transition: "transform 0.5s",
					}}
					onClick={onClickCollapsed}
				/>

				<span>{PLAT_NAME}</span>
			</h2>

			<div className="right-pane">
				<div className="date">
					<IconCalendar style={{ color: "#3370ff" }} />
					<span>星期三</span>
					<span>2024-09-03</span>
				</div>
				<Dropdown droplist={dropList}>
					<Avatar style={{ backgroundColor: "#3370ff" }} size={30}>
						<IconUser />
					</Avatar>
				</Dropdown>
			</div>
		</div>
	);
}

export default LayoutHeader;

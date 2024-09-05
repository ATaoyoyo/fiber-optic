import { Button, Grid, Input, Tree } from "@arco-design/web-react";
import { IconSearch } from "@arco-design/web-react/icon";

import "./style/index.modules.less";

import WorkOrder from "./work-order";
import OrderStatic from "./order-static";
import MapController from "./map-controller";

const TreeData = [
	{
		title: "Trunk 0-0",
		key: "0-0",
		children: [
			{
				title: "Branch 0-0-2",
				key: "0-0-2",
				children: [
					{
						title: "Leaf",
						key: "0-0-2-1",
						children: [
							{
								title: "Leafsss 0-0-2",
								key: "0-0-2-1-0",
								children: [
									{
										title: "Leaf",
										key: "0-0-2-1-0-0",
									},
								],
							},
						],
					},
				],
			},
		],
	},
];

const orders = [
	{
		id: "1",
		title: "摄像头警报工单",
		date: "2024-09-02",
		status: 1,
		timeout: 1,
		pic: "",
	},
];

const orderStatic = [
	{
		type: "add",
		value: 89,
		unit: "单",
		desc: "本月新增工单",
	},
	{
		type: "deal",
		value: 89,
		unit: "单",
		desc: "本月处理工单",
	},
	{
		type: "count",
		value: 89,
		unit: "单",
		desc: "设备数量",
	},
	{
		type: "line",
		value: 89,
		unit: "单",
		desc: "光纤线路",
	},
	{
		type: "work",
		value: 89,
		unit: "单",
		desc: "今日值班人员",
	},
];

function Home() {
	return (
		<div className="home-container">
			<Grid.Row gutter={20}>
				<Grid.Col span={6}>
					<div className="area-tree">
						<div className="search">
							<Input
								// addBefore={<IconSearch />}
								placeholder="请输入关键词搜索区域"
								addAfter={
									<Button size="mini">
										<IconSearch />
									</Button>
								}
							/>
						</div>
						<div className="tree">
							<Tree treeData={TreeData}></Tree>
							<WorkOrder type={0} orders={orders} />
							<WorkOrder type={1} orders={orders} />
						</div>
					</div>
				</Grid.Col>
				<Grid.Col span={18}>
					<div className="map-info">
						<div className="order-source">
							{orderStatic.map((item) => (
								<OrderStatic key={item.type} order={item} />
							))}
						</div>
					</div>
          <MapController />
				</Grid.Col>
			</Grid.Row>
		</div>
	);
}

export default Home;

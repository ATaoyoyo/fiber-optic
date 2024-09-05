import { Button, Card, Space } from "@arco-design/web-react";

import "./style/work-order.modules.less";
import { useEffect, useState } from "react";
import { IconClockCircle, IconDown } from "@arco-design/web-react/icon";

interface IOrder {
	id: string;
	title: string;
	pic: string;
	date: string;
	status: number;
	timeout: number;
}

type OrderType = {
	type: number;
	orders: IOrder[];
};

const orderStatusText = (status: number) => {
	switch (status) {
		case 0:
			return { color: "#EA9A39", text: "未处理" };
		case 1:
			return { color: "#02D081", text: "处理中" };
		default:
			return { color: "#FF3F1E", text: "已超时" };
	}
};

function WorkOrder(props: OrderType) {
	const { orders, type } = props;

	const [loading, setLoading] = useState(true);

	const orderText = type === 0 ? "待处理工单数" : "处理中工单数";

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 1000 * 2);
	});
	return (
		<div className="work-order">
			<div className={`work-order-panel ${type === 0 ? "notdeal" : "deal"}`}>
				<div className="icon-title">
					<IconClockCircle
						style={{ color: type === 0 ? "#ff3f1e" : "#EA9A39" }}
					/>
					<span className="title">{orderText}</span>
				</div>
				<div className="count-arrow">
					<span className={`count ${type === 0 ? "notdeal" : "deal"}`}>
						8个
					</span>
					<IconDown style={{ color: type === 0 ? "#ff3f1e" : "#EA9A39" }} />
				</div>
			</div>
			<div className="work-order-list">
				{orders.map((item) => (
					<Card
						style={{ marginBottom: 10 }}
						hoverable
						loading={loading}
						key={item.id}
					>
						<div className="list-item">
							<div
								className="status-text"
								style={{ backgroundColor: orderStatusText(item.status).color }}
							>
								{orderStatusText(item.timeout).text}
							</div>
							<div className="pic"></div>
							<div className="info">
								<p className="text">
									<span className="title">{item.title}</span>
									<span
										className="status"
										style={{
											backgroundColor:
												item.status === 0 ? "#FF3F1E" : "#EA9A39",
										}}
									>
										{item.status === 0 ? "报警" : "预警"}
									</span>
								</p>
								<p className="date">{item.date}</p>
								<div className="options">
									<Space>
										<Button size="mini" type="primary">
											派单
										</Button>
										<Button size="mini" type="primary">
											忽略
										</Button>
										<Button size="mini" type="primary">
											查看
										</Button>
									</Space>
								</div>
							</div>
						</div>
					</Card>
				))}
			</div>
		</div>
	);
}

export default WorkOrder;

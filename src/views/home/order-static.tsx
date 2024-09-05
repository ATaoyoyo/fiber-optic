import './style/order-static.modules.less'

interface IOrderStatic {
	type: string;
	value: number;
	unit: string;
	desc: string;
}

type OrderStaticType = {
	order: IOrderStatic;
};

 

function OrderStatic(props: OrderStaticType) {
	const { order } = props;
	return (
		<div className={`order-source-item ${order.type}`}>
			<div className="icon"></div>
			<div className="data">
				<div className="number">
					<span className="value">{order.value}</span>
					<span className="unit">{order.unit}</span>
				</div>
				<div className="desc">{order.desc}</div>
			</div>
		</div>
	);
}

export default OrderStatic;

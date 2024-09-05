import { Button, Radio, Space, Switch } from "@arco-design/web-react";
import { useEffect, useState } from "react";
import { Viewer } from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";
import "./style/map-controller.less";

const loadMap = () => {
	return new Viewer("map-container");
};

function MapController() {
	const [mapType, setMapType] = useState("1");
	const [warning, setWarning] = useState(false);
	const changeMapType = (type: string) => {
		setMapType(type);
	};
	const onChangeWarning = (type: boolean) => {
		setWarning(type);
	};

	useEffect(() => {
		const viewer = loadMap();
    return () => viewer.destroy()
	}, []);

	return (
		<div className="map-container" id="map-container">
			<div className="buttons">
				<Space>
					<Button className="buttons-item" type="primary">
						一级城市
					</Button>
					<Button className="buttons-item" type="primary" status="danger">
						设备
					</Button>
					<Button className="buttons-item" type="primary" status="success">
						光纤路线
					</Button>
				</Space>
			</div>

			<div className="map-options">
				<Radio.Group type="button" value={mapType} onChange={changeMapType}>
					<Radio value="0">地图</Radio>
					<Radio value="1">卫星图</Radio>
				</Radio.Group>
				<div className="warning-status">
					<span className="text">报警模式</span>
					<Switch
						checkedText="开"
						uncheckedText="关"
						checked={warning}
						onChange={onChangeWarning}
					></Switch>
				</div>
			</div>
		</div>
	);
}

export default MapController;

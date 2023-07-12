import React from 'react'
import Constant from '../../common/constant'

import { PoweroffOutlined, FileOutlined } from '@ant-design/icons'
import { Button, Row, Col, message, Drawer, Tooltip, Modal } from 'antd'
import Center from './Center'
import Left from './Left'
import Right from './Right'

export default class Panel extends React.Component {
	constructor(props) {
		super(props)
		localStorage.uuid = props.match.params.uuid
		this.state = {}
	}

	render() {
		return (
			<div className="panel">
				<Row
					style={{
						paddingTop: 35,
						borderBottom: '1px solid #f0f0f0',
						borderTop: '1px solid #f0f0f0',
					}}>
						<Col></Col>
					</Row>
			</div>
		)
	}
}

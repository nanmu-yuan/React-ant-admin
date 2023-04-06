import React from 'react'
import { Chart, Geom, Axis, Tooltip, Coord, Legend } from 'bizcharts'
import DataSet from '@antv/data-set'

class Basic extends React.Component {
	public render() {
		const data = [
			{
				item: 'Design',
				a: 100,
				b: 30
			},
			{
				item: 'Development',
				a: 70,
				b: 70
			},
			{
				item: 'Marketing',
				a: 60,
				b: 40
			},
			{
				item: 'Users',
				a: 40,
				b: 50
			},
			{
				item: 'Test',
				a: 60,
				b: 70
			}
		]
		const { DataView } = DataSet
		const dv = new DataView().source(data)
		dv.transform({
			type: 'fold',
			fields: ['a', 'b'], // 展开字段集
			key: 'user', // key字段
			value: 'score' // value字段
		})
		const scale = {
			score: {
				min: 0,
				max: 100
			},
			user: {
				formatter: (val: number) => ({ a: '当前岗位组成', b: '优化后岗位组成' }[val])
			}
		}
		return (
			<div>
				<Chart
					height={400}
					padding={[40, 0, 50, 0]}
					background={{ fill: '#fff' }}
					data={dv}
					scale={scale}
					forceFit
				>
					<Coord type="polar" radius={1} />
					<Axis
						name="item"
						grid={{
							line: {
								style: {
									lineDash: undefined
								}
							}
						}}
					/>
					<Tooltip />
					<Axis
						name="score"
						grid={{
							line: {
								type: 'polygon',
								style: {
									lineDash: undefined
								}
							}
						}}
					/>
					<Legend name="user" marker={{ symbol: 'circle' }} />
					<Geom type="line" position="item*score" color="user" size={1} />
					<Geom type="point" position="item*score" color="user" shape="circle" size={3} />
				</Chart>
			</div>
		)
	}
}

export default Basic

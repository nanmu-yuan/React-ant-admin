import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Form, Input, Row, Col } from 'antd'
import './style.less'

const Edit: React.FC = () => {
	// 文章id
	const routeParams: any = useParams()
	console.log(routeParams.articleId)
	// 文章详情
	const [detail, setDetail] = useState<any>({})

	// 获取文章详情
	useEffect(() => {
		setDetail({})
	}, [])

	return (
		<div className="article-editor">
			<Form>
				<Row>
					<Col span={12}>
						<Form.Item
							label="标题"
							name="title"
							initialValue={detail.title}
							rules={[{ required: true, message: '请输入文章标题' }]}
						>
							<Input placeholder="请输入文章标题" />
						</Form.Item>
					</Col>
					<Col span={12}>
						<Form.Item
							label="类型"
							name="type"
							initialValue={detail.type}
							rules={[{ required: true, message: '请选择文章类型' }]}
						>
							{/* <Select placeholder="请选择文章类型">
                  {createOptions(CodeMap.articleType).map((item) => (
                    <Select.Option key={item.value} value={item.value}>
                      {item.label}
                    </Select.Option>
                  ))}
                </Select> */}
						</Form.Item>
					</Col>
				</Row>

				<Form.Item
					label="描述"
					name="description"
					initialValue={detail.description}
					rules={[{ required: true, message: '请输入文章简要描述' }]}
				>
					<Input.TextArea placeholder="请输入文章简要描述" />
				</Form.Item>
				<Form.Item label="内容" required></Form.Item>
			</Form>
		</div>
	)
}

export default Edit

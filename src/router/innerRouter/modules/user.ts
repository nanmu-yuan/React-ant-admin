//  用户管理
import { lazy } from 'react'
import IRoute from '../IRoute'

const User = lazy(() => import(/* webpackChunkName:"user" */ '@/pages/user'))

const route: IRoute = {
	name: 'user',
	title: '用户管理',
	icon: 'menuUser',
	path: '/user',
	exact: true,
	component: User
}

export default route

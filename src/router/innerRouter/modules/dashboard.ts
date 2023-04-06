// 首页
import { lazy } from 'react'
import IRoute from '../IRoute'
const Dashboard = lazy(() => import(/* webpackChunkName:"dashboard" */ '@/pages/dashboard'))

const route: IRoute = {
	name: 'dashboard',
	title: '首页',
	icon: 'menuHome',
	path: '/dashboard',
	exact: true,
	component: Dashboard
}
export default route

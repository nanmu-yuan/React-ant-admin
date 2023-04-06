//  空白页
import { lazy } from 'react'
import IRoute from '../IRoute'

const Blank = lazy(() => import(/* webpackChunkName:"blank" */ '@/pages/blank'))

const route: IRoute = {
	name: 'blank',
	title: '空白页',
	icon: 'menuBlank',
	path: '/blank',
	exact: true,
	component: Blank
}

export default route

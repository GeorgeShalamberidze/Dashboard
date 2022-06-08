import { Ecommerce, Orders, Calendar, Employees, Stacked, Pyramid, Customers, Kanban, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor, Line } from '../pages'

export const routeMap = [
    { path: '/', element: <Ecommerce />},
    { path: '/ecommerce', element: <Ecommerce />},
    { path: '/orders', element: <Orders />},
    { path: '/employees', element: <Employees />},
    { path: '/customers', element: <Customers />},
    { path: '/kanban', element: <Kanban />},
    { path: '/editor', element: <Editor />},
    { path: '/calendar', element: <Calendar />},
    { path: '/color-picker', element: <ColorPicker />},
    { path: '/line', element: <Line />},
    { path: '/area', element: <Area />},
    { path: '/bar', element: <Bar />},
    { path: '/pie', element: <Pie />},
    { path: '/financial', element: <Financial />},
    { path: '/color-mapping', element: <ColorMapping />},
    { path: '/pyramid', element: <Pyramid />},
    { path: '/stacked', element: <Stacked />},
]
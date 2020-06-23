import React from 'react'
import { Switch } from 'react-router-dom'
//import { renderRoutes } from 'react-router-config'
import renderRoutes from './router.js'
import routes from './routerConfig.js'

const authed = false // 如果登陆之后可以利用redux修改该值(关于redux不在我们这篇文章的讨论范围之内）
const authPath = '/About' // 默认未登录的时候返回的页面，可以自行设置

const RouterRender = () => (
    <main>
        <Switch>
            {renderRoutes(routes, authed, authPath)}
        </Switch>

    </main>
)
export default RouterRender

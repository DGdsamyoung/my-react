import About from '../view/About.js';
import Test from '../view/test.js';
import Item from '../view/item/item.js';

let routes=[
    {
        path:"/",
        component:About,
        exact:true,
        requiresAuth:'false'
    },
    {
        path: "/test",
        component: Test,
        routes:[
            {
                path:"Item",
                component:Item
            }
        ]
    }
]
export default routes;

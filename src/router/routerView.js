import React from 'react';
import { Provider } from "react-redux";
import { HashRouter, Route, Redirect,Switch } from 'react-router-dom';
import test from '../view/test.js';
import Item from '../view/item/item.js';
import login from '../view/login/login.js';
import Index from '../view/system/index/index.js'
import MyInput from "../view/system/myInput/myInput";
import MyTable from "../view/system/myTable/myTable";
import MyIf from "../view/system/myIf/myIf";
import MyModal from "../view/system/myModal/myModal.jsx";
import MyAxios from "../view/system/myAxios/myAxios.jsx";
import MyQuote from "../view/system/quotePackage/quote.jsx";
import MyRedux from "../view/system/redux/index.js";
import store from "../redux/store";
import steam from "../view/steam/index";

const BasicRoute = () => (
    <Provider store={store}>
        <HashRouter>
            <Switch>
            <Route exact path="/steam" component={steam} />
                <Route exact path="/detail" component={test} />
                <Redirect path="/" exact={true} to="/login" />
                <Route store={store} exact path="/login" component={login} />
                <Index store={store}>
                    <Route exact path="/index/item" component={Item} />
                    <Route exact path="/index/myInput" component={MyInput} />
                    <Route exact path="/index/myTable" component={MyTable} />
                    <Route exact path="/index/myIf" component={MyIf} />
                    <Route exact path="/index/myModal" component={MyModal} />
                    <Route exact path="/index/myAxios" component={MyAxios} />
                    <Route exact path="/index/myRedux" component={MyRedux} />
                    <Route exact path="/index/myQuote" component={MyQuote} />
                </Index>
                {/*<Route  path="/abc" component={About}>*/}
                {/*</Route>*/}

                <Route exact path="/about/item" component={test} />
            </Switch>

        </HashRouter>
    </Provider>
);


export default BasicRoute;

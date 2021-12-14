import React from 'react';
import { Route, Switch } from 'react-router';
import PageCart from '../pageCart/page_cart';
import Cabinet from '../userCabinet/userCabinet';
import AboutUs from './aboutUs/aboutUs';
import CostOfWork from './costOfWork/costOfWork';
import InitialMain from './initialMain/initialMain';
import OutServices from './ourServices/ourServices';
import Reviews from './reviews/reviews';

const Main = ()=>(
        
        <div>
            <Route path='/home' component={InitialMain}/>
            <Route path='/aboutUs' component={AboutUs}/>
            <Route path='/costOfWork' component={CostOfWork}/>
            <Route path='/outServices' component={OutServices}/>
            <Route path='/reviers' component={Reviews}/>
            <Route path='/cabinet' component={Cabinet}/>
            <Route path='/cart/:id' component={PageCart} />


        </div>
    )



export default Main;
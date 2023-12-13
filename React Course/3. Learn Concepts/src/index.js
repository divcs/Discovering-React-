import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import User from './Props/User';
import Password from './Conditional Rendering/Password';
import Lists from './Lists';
import { Expressions } from './Expressions';
import Props from './Props/Props';
import Products from './Conditional Rendering/Products';
import Style from './Styling/Style';
import Bootstrap from './Styling/Bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';
import NavbarU from './Styling/Navbar';
import index from './Tailwind/index.css'; 
// import Tailwind from './Tailwind/Tailwind';
import { Icon } from './React-Icons/Icon';
import { Event } from './Events/Event';
import {CopyEvent} from './Events/CopyEvent';
import {HoverEvent} from './Events/HoverEvent';
import { Counter } from './Hooks/useState/Counter';
import { UpdatingStringValues } from './Hooks/useState/UpdatingStringValues';
import { UpdatingArrayValues } from './Hooks/useState/UpdatingArrayValues';
import { UpdatingObjectValues } from './Hooks/useState/UpdatingObjectValues';
import UpdatingArraysOfObjects from './Hooks/useState/UpdatingArraysOfObjects';
import Form from './Forms/Form';
import UseEffect from './Hooks/useEffect/UseEffect'
import AsyncUseEffect from './Hooks/useEffect/AsyncUseEffect';
import { PropDrilling } from './Hooks/PropDrilling/PropDrilling';
import { Create } from './Hooks/PropDrilling/Create.js';
import UseReducer  from './Hooks/useReducer/UseReducer';
import UseRef from './Hooks/useRef/UseRef';
import { Customs } from './Hooks/CustomHooks/Custom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Bootstrap/> */}
    {/* <Style/>
    <App/>
    <User/>
    <Password/>
    <Lists/>
    <Expressions/>
    <Props/>
    <Products/> */}
    {/* <NavbarU/> */}
    {/* <Tailwind/> */}
    {/* <Icon/> */}
    {/* <Event/> */}
    {/* <CopyEvent/> */}
    {/* <HoverEvent/> */}
    {/* <Counter/> */}
    {/* <UpdatingStringValues/> */}
    {/* <UpdatingArrayValues/> */}
    {/* <UpdatingObjectValues/> */}
    {/* <UpdatingArraysOfObjects/> */}
    {/* <Form/> */}
    {/* <UseEffect/> */}
    {/* <AsyncUseEffect/> */}
    {/* <PropDrilling/> */}
    {/* <Create/> */}
    {/* <UseReducer/> */}
    {/* <UseRef/> */}
    <Customs/>
    
  </React.StrictMode>
);



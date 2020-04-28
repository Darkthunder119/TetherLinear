import React from 'react';
import SideNav from '../../components/SideNav/SideNav'
import HeaderNav from '../../components/HeaderNav/HeaderNav'
class MainPage extends React.Component{
constructor(props){
    super(props);
}

render(){
    return <>
    <SideNav />
    <HeaderNav />
    </>
}
}

export default MainPage;
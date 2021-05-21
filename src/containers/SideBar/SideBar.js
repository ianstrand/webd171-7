import React from 'react';
import SideBarItem from './SideBarItem/SideBarItem';
import {Menu, Divider} from 'semantic-ui-react';
import './SideBar.scss';
import {SideBarHeader} from './SideBarHeader/SideBarHeader';
import {SideBarFooter} from './SideBarFooter/SideBarFooter';

export class SideBar extends React.Component {
  render() {
    return (
      <Menu borderless vertical stackable fixed='left' className='side-nav'>
        <SideBarHeader/>
        <Divider/>
        <SideBarItem path='/' label='Home' icon='home'/>
        <SideBarItem path='/feed/trending' label='Trending' icon='fire'/>
        <Divider/>
        <SideBarFooter/>
      </Menu>
    );
  }
}
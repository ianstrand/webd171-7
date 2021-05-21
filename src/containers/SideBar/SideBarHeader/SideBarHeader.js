import React from 'react';
import {Image, Menu} from 'semantic-ui-react';
import './SideBarHeader.scss';
import {Link, withRouter} from 'react-router-dom';

export function SideBarHeader(props) {
  const heading = props.title ? props.title.toUpperCase() : 'Welcome!';
  return (
    <Menu.Item>
      <br />
 	  <Link to='/'><Image src={require('../../../assets/images/Icon5.png')} size='small' /></Link>
 	  <br />
      <Menu.Header className='side-bar-header'><br />{heading}</Menu.Header>
    </Menu.Item>
  );
}

export default withRouter(SideBarHeader);
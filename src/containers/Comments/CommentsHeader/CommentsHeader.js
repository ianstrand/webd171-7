import React from 'react';
import {Button} from "semantic-ui-react";
import './CommentsHeader.scss';

export function CommentsHeader(props) {
  return (
    <div className='comments-header'>
      <Button basic compact icon>
        {props.amountComments} Comments
      </Button>
    </div>
  );
}
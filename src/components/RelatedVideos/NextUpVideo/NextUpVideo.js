import React from 'react';
import './NextUpVideo.scss';
import {Divider} from "semantic-ui-react";
import {VideoPreview} from '../../VideoPreview/VideoPreview';

export function NextUpVideo(props) {
  return (
    <React.Fragment>
      <div className='next-up-container'>
        <h4>Related Videos</h4>
      </div>
      <VideoPreview horizontal={true} video={props.video} pathname='/webd171-7/watch' search={`?v=${props.video.id}`}/>
      <Divider/>
    </React.Fragment>
  );
}
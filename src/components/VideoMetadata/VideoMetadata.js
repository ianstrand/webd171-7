import React from 'react';
import {Divider} from "semantic-ui-react";
import './VideoMetadata.scss';
import {Rating} from '../Rating/Rating';

export function VideoMetadata(props) {
  if (!props.video || !props.video.statistics) {
    return <div/>;
  }
  const viewCount = Number(props.video.statistics.viewCount).toLocaleString();

  return (
    <div className='video-metadata'>
      <h3>{props.video.snippet.title}</h3>
      <div className='video-stats'>
        <span>{viewCount} views</span>
        <div className='video-actions' >
          <Rating likeCount={props.video.statistics.likeCount}
                  dislikeCount={props.video.statistics.dislikeCount}/>
        </div>
      </div>
      <Divider/>
    </div>
  );
}
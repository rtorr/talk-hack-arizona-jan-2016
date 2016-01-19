import React from 'react';
import marked from 'marked';

export function Comments (comments) {
  return comments.map((comment, i) => <div className="comment" key={'comment-' + i} dangerouslySetInnerHTML={{__html:marked(comment)}}></div>);
}

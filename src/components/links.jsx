import React from 'react';

function Links(props) {
  return (
      <a className="books" id={props.id} href={props.url}><span>{props.linkName }</span></a>
  );
}


export default Links;
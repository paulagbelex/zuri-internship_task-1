import React from 'react';

function Links(props) {
  return (
    <div className='container-fluid'>
      <div className='card'>
        <div className='card-body'>
          <a className="books" id={props.id} href={props.url}><span>{props.linkName}</span></a>
        </div>
      </div>
    </div>
  );
}


export default Links;
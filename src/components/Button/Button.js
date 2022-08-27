import React from 'react';
import './Button.scss';

function Button(props) {

  function handleClick() {
  }
    return (
            <button 
                className="submit-button" 
                id={props.buttonID}
                onClick={props.handleClick}>
                
                <div className='submit-button__text'>{props.buttonLabel}</div>
              </button>
    );
  }

export default Button

// <Button buttonLabel="Unarchive this project" handleClick={()=> {unarchiveProject(archProjectObject.id)}}/>

import './Button.scss';

function Button(props) {
    return (
                <button className="submit-button" id={props.buttonID}>
                    <div className='submit-button__icon'>
                        <img 
                          className="submit-button__icon--upload"
                          src={props.buttonIcon}
                          alt="upload icon"
                        />
                    </div>
                    <div className='submit-button__text'>{props.buttonLabel}</div>
                  </button>
    );
  }

export default Button
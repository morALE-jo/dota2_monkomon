import React from 'react'
import ImageURL from '../assets/JSON/image-urls.json';

export default function Modal(props) {
  if (!props.show) {
    return null;
  }
  else{
    const heroCropImageURL = ImageURL.dota_hero_crop.base_url;

    return (
      <div className="modal">
        <div className="modal-content">
          <div classNam="modal-header">
            <h6 className="modal-title">{props.hero}</h6>
          </div>
          <div className="modal-body">
            <img className="heroCrop" src={heroCropImageURL+props.hero+".png"} alt={props.hero} />
          </div>
          <div className="modal-footer">
            <button onClick={props.onClose} className="button">Close</button>
          </div>
        </div>
      </div>
    )
  }
}

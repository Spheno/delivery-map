import './Popup.css';
import { useEffect } from 'react';

export function Popup({ isOpen, onClose, name, children }) {

  useEffect(() => {
    function handlerClosePopupOnEsc(e) {
      if (e.key === 'Escape') {
        onClose();
      }
    }
    if (!isOpen) return
    document.addEventListener('keyup', (e) => { handlerClosePopupOnEsc(e) });
    return () => {
      document.removeEventListener('keyup', (e) => { handlerClosePopupOnEsc(e) });
    }

  }, [isOpen, onClose])

  function handlerClosePopupOverlayClick(e) {
    if (e.target.classList.contains('popup')) {
      onClose();
    }
  }

  return (

    <article className={`popup popup_type_${name} ${isOpen ? 'popup_is-opened' : ''}`} onClick={(e) => handlerClosePopupOverlayClick(e)} >

      {children}

    </article>

  )
}
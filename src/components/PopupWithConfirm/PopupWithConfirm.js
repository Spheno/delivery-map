import { Popup } from '../Popup/Popup'

export function PopupWithConfirm({ isOpen, onClose, name, title, onSubmit }) {

  return (
    <Popup isOpen={isOpen} onClose={onClose} name={name} >

      <div className="form">
        <h2 className="form__title">{title}</h2>
        <form name={`${name}`} className={`form__container form__container_type_${name}`} onSubmit={onSubmit} >

          <div className={`form__button-container form__button-container_type_${name}`}>
            <button className={`form__button-submit form__button-submit_type_${name} hover-button`} type="submit"
              value='Сохранить' aria-label="Сохранить" onClick={onClose} >Да</button>
            <button className={`form__button-submit form__button-submit_type_${name} hover-button`} type="button"
              value='Закрыть' aria-label="Закрыть" onClick={onClose} >Нет</button>
          </div>

          <button className={`form__button-close form__button-close_type_${name} hover-button`} type="button"
            aria-label="Закрыть" onClick={onClose}></button>
        </form>
      </div>

    </Popup>
  )
}
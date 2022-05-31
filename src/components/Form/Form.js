import './Form.css'
import { Popup } from '../Popup/Popup'
import { useFormWithValidation } from '../../hooks/useFormWithValidation'
import { useEffect } from 'react';

export function Form({ isOpen, onClose, name, title, buttonName, children, onUpdate, selectedDot, onCreateDot, length }) {

  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

  useEffect(() => {
    if (selectedDot) {
      resetForm({
        place: selectedDot.name,
        amount: selectedDot.amount,
        coordx: selectedDot.x,
        coordy: selectedDot.y
      })
    }
  }, [selectedDot])

  function handleSubmit(e) {
    e.preventDefault();
    if (!selectedDot.id) {
      onCreateDot(
        {
          name: values.place,
          amount: Number(values.amount),
          x: Number(values.coordx),
          y: Number(values.coordy),
          id: `${length.length}${new Date().getTime()}`,
        })
      resetForm()
    } else {
      onUpdate(
        {
          id: selectedDot.id,
          name: values.place,
          amount: Number(values.amount),
          x: Number(values.coordx),
          y: Number(values.coordy)
        }
      );
    }
  }

  return (
    <Popup isOpen={isOpen} onClose={onClose} name={name} >
      <div className="form">
        <h2 className="form__title">{title}</h2>
        <form name={`${name}`} className={`form__container form__container_type_${name}`} onSubmit={(e) => { handleSubmit(e) }} >


          <label className="form__field" htmlFor="place">
            Место доставки
            <input type="text" name="place" className="form__input form__input_place" id="place"
              placeholder="Наименование торговой точки" minLength="2" maxLength="30" required value={values.place || ""} onChange={(e) => handleChange(e)} />
            <span className="form__input-error" id="place-error">{errors.place || ""}</span>
          </label>

          <label className="form__field" htmlFor="amount">
            Количество товара
            <input type="text" name="amount" className="form__input form__input_amount" id="amount" pattern="^[0-9]+$"
              placeholder="Количество товара (шт)" required value={values.amount || ""} onChange={(e) => handleChange(e)} />
            <span className="form__input-error" id="amount-error">{errors.amount || ""}</span>
          </label>

          <label className="form__field" htmlFor="coordx">
            Координаты доставки ось х
            <input type="text" name="coordx" className="form__input form__input_coordx" id="coordx" pattern="^\d{1,2}|^\d{1,2}\.{1}\d{1,20}"
              placeholder="Координаты доставки ось х" required value={values.coordx || ""} onChange={(e) => handleChange(e)} />
            <span className="form__input-error" id="coordx-error">{errors.coordx || ""}</span>
          </label>

          <label className="form__field" htmlFor="coordy">
            Координаты доставки ось y
            <input type="text" name="coordy" className="form__input form__input_coordx" id="coordy" pattern="^\d{1,2}|^\d{1,2}\.{1}\d{1,20}"
              placeholder="Координаты доставки ось y" required value={values.coordy || ""} onChange={(e) => handleChange(e)} />
            <span className="form__input-error" id="coordy-error">{errors.coordy || ""}</span>
          </label>

          <div className="form__button-container">
            {children}
            <button className={`form__button-submit form__button-submit_type_${name} ${isValid ? 'hover-button' : 'button__disabled'}`} type="submit"
              value='Сохранить' onClick={isValid ? onClose : undefined} >{buttonName}</button>
          </div>

          <button className={`form__button-close form__button-close_type_${name} hover-button`} type="button"
            aria-label="Закрыть" onClick={onClose}></button>

        </form>
      </div>
    </Popup>
  )
}
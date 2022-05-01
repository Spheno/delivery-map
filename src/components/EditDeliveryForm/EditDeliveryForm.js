import './EditDeliveryForm.css';
//import { useFormWithValidation } from '../../hooks/useFormWithValidation'
import { Form } from '../Form/Form'

export function EditDeliveryForm({ isOpen, onClose }) {

  //const { values, handleChange, errors, isValid } = useFormWithValidation();

  /*function handleSubmit(e) {
    e.preventDefault();
    onLogIn(
      {
        login: values.login,
        password: values.password
      }
    );
  }*/

  return (

    <Form
      name='delivery'
      title='Редактировать данные доставки'
      buttonName='Сохранить'
      isOpen={isOpen}
      onClose={onClose}
    >

      {/*<label className="form__field" htmlFor="place">
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
          placeholder="Координаты доставки ось х" required value={values.coordy || ""} onChange={(e) => handleChange(e)} />
        <span className="form__input-error" id="coordy-error">{errors.coordy || ""}</span>
      </label>

      <div className="form__button-container">
        <button className='form__button-submit form__button-submit_type_delete hover-button' type="submit">Удалить</button>
        <button className={`form__button-submit form__button-submit_type_delivery ${isValid ? 'hover-button' : 'button__disabled'}`} type="submit"
          value='Сохранить' onClick={isValid && onClose}>Сохранить</button>
      </div>

      <button className={`form__button-close form__button-close_type_delivery hover-button`} type="button"
        aria-label="Закрыть" onClick={onClose}></button>*/}

<button className='form__button-submit form__button-submit_type_delete hover-button' type="submit">Удалить</button>

    </Form>

  )
}
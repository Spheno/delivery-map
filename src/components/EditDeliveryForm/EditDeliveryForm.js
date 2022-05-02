import './EditDeliveryForm.css';
import { Form } from '../Form/Form'

export function EditDeliveryForm({ isOpen, onClose }) {

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

      <button className='form__button-submit form__button-submit_type_delete hover-button' type="submit">Удалить</button>

    </Form>

  )
}
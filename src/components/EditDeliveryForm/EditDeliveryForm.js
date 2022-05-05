import './EditDeliveryForm.css';
import { Form } from '../Form/Form'

export function EditDeliveryForm({ isOpen, onClose, onUpdate, selectedDot, onDotDelete }) {

  return (

    <Form
      name='delivery'
      title='Редактировать данные доставки'
      buttonName='Сохранить'
      isOpen={isOpen}
      onClose={onClose}
      onUpdate={onUpdate}
      selectedDot={selectedDot}
    >

      <button className='form__button-submit form__button-submit_type_delete hover-button' type="button" onClick={(e) => {onDotDelete(e); onClose()}} >Удалить</button>

    </Form>

  )
}
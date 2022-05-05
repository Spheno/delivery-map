import './NewDeliveryForm.css';
//import { useFormWithValidation } from '../../hooks/useFormWithValidation'
import { Form } from '../Form/Form'

export function NewDeliveryForm({ isOpen, onClose, onCreateDot }) {

  return (

    <Form
      name='new-delivery'
      title='Создать новую доставку'
      buttonName='Сохранить'
      isOpen={isOpen}
      onClose={onClose}
      onCreateDot={onCreateDot}
    >

    </Form>

  )
}
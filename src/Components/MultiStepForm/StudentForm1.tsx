import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { IFormState } from "./MultiStepForm";

interface IProps {
  nextStep: () => void;
  formState: IFormState;
  handleChange: (value: string, fieldName: string) => void;
}

function StudentForm1(props: IProps) {

  const { nextStep, formState, handleChange } = props;

  return (
    <div style={{ width: '200%', marginTop: '3%' }}>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            value={formState.firstName}
            onChange={(event) => handleChange(event.target.value, 'firstName')}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            value={formState.lastName}
            onChange={(event) => handleChange(event.target.value, 'lastName')}
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={nextStep}>
          Continue
        </Button>
      </Form>
    </div>
  )
}

export default StudentForm1;
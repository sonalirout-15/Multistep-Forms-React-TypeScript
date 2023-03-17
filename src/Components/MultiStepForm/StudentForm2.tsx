import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { IFormState } from "./MultiStepForm";

interface IProps {
    nextStep: () => void;
    formState: IFormState;
    handleChange: (value: string, fieldName: string) => void;
    previousStep: () => void;
}

function StudentForm2(props: IProps) {

    const { nextStep, formState, handleChange, previousStep } = props
    return (
        <div style={{ width: '200%', marginTop: '3%' }}>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter Email"
                        value={formState.email}
                        onChange={(event) => handleChange(event.target.value, 'email')}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Phone Number"
                        value={formState.phoneNumber}
                        onChange={(event) => handleChange(event.target.value, 'phoneNumber')}
                    />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={previousStep}>
                    Previous
                </Button>
                <Button variant="primary" type="submit" onClick={nextStep}>
                    Continue
                </Button>
            </Form>
        </div>
    )
}

export default StudentForm2;
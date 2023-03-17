import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { IFormState } from "./MultiStepForm";

interface IProps {
    nextStep: () => void;
    formState: IFormState;
    handleChange: (value: string, fieldName: string) => void;
    previousStep: () => void;
}

function StudentForm3(props: IProps) {

    const { nextStep, formState, handleChange, previousStep } = props;

    return (
        <div style={{ width: '200%', marginTop: '3%' }}>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Address"
                        value={formState.address}
                        onChange={(event) => handleChange(event.target.value, 'address')}
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

export default StudentForm3;
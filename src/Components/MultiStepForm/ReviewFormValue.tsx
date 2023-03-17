import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { IFormState } from "./MultiStepForm";
import { ListGroup } from "react-bootstrap";

interface IProps {
    formState: IFormState;
    previousStep: () => void;
}

function ReviewFormValue(props: IProps) {

    const { formState, previousStep } = props;

    const onConfirm = () => {
        console.log('onConfirm', onConfirm)
    }

    return (
        <div style={{ width: '200%', marginTop: '3%' }}>

            <ListGroup>
                <ListGroup.Item>First Name : {formState.firstName}</ListGroup.Item>
                <ListGroup.Item>Last Name : {formState.lastName}</ListGroup.Item>
                <ListGroup.Item>Email : {formState.email}</ListGroup.Item>
                <ListGroup.Item>Phone No : {formState.phoneNumber}</ListGroup.Item>
                <ListGroup.Item>Address : {formState.address}</ListGroup.Item>
            </ListGroup>
            <Form>
                <Button variant="primary" type="submit" onClick={previousStep}>
                    Previous
                </Button>
                <Button variant="primary" type="submit" onClick={onConfirm} >
                    Confirm
                </Button>
            </Form>
        </div>
    )
}

export default ReviewFormValue;
import { useState } from "react";
import ReviewFormValue from "./ReviewFormValue";
import StudentForm1 from "./StudentForm1";
import StudentForm2 from "./StudentForm2";
import StudentForm3 from "./StudentForm3";

export interface IFormState {
    step: number;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: number | undefined;
    address: string
}

const defaultValue: IFormState = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: undefined,
    address: ""
}

const MultiStepForm = () => {

    const [formState, setFormState] = useState<IFormState>(defaultValue);

    const handlefieldUpdate = (value: string, fieldName: string) => {
        setFormState({
            ...formState,
            [fieldName]: value,
        })
    }

    const handleNextStep = () => {
        setFormState({
            ...formState,
            step: formState.step + 1,
        })
    }

    const handlePreviousStep = () => {
        setFormState({
            ...formState,
            step: formState.step - 1,
        })
    }

    const renderForms = () => {
        if (formState.step === 1) {
            return <StudentForm1 nextStep={handleNextStep} handleChange={handlefieldUpdate} formState={formState} />
        }
        else if (formState.step === 2) {
            return <StudentForm2 previousStep={handlePreviousStep} nextStep={handleNextStep} handleChange={handlefieldUpdate} formState={formState} />
        }
        else if (formState.step === 3) {
            return <StudentForm3 previousStep={handlePreviousStep} nextStep={handleNextStep} handleChange={handlefieldUpdate} formState={formState} />
        }
        else if (formState.step === 4) {
            return <ReviewFormValue previousStep={handlePreviousStep} formState={formState} />
        }
        return <></>;
    }

    return (
        <div>{renderForms()}</div>
    )
}

export default MultiStepForm;
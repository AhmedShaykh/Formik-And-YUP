import { FC } from "react";
import Formik from "./Components/Formik";
import StepperComponent from "./Stepper";
import Yup from "./Components/Yup";
import "./App.css";

const App: FC = () => {
    return (
        <div className='main'>
            <div>
                <h1>
                    Formik Form
                </h1>

                <Formik />
            </div>

            <div>
                <h1>
                    Yup Form
                </h1>

                <Yup />
            </div>

            <StepperComponent />

        </div>
    )
};

export default App;
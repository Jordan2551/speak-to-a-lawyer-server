import { createContext } from 'react';

const StepsContext = createContext({
    showStep2: false,
    showStep3: false,
    showStep: (stepNum, practiceArea) => {}
});

export default StepsContext;

import { createContext } from 'react';

const StepsContext = createContext({
    step2: {show: false, practiceArea: ''},
    step3: {show: false},
    showStep: (stepNum, practiceArea) => {}
});

export default StepsContext;

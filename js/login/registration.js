import { createRegForm } from "./registrationForm.js";


const createApp = async () => {
    const form = createRegForm();
    
    
    document.body.append(form.main);
    
    
    
    
}

createApp();
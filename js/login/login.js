import { createLoginForm } from "./loginForm.js";


const createApp = async () => {
    const form = createLoginForm();
    
    
    document.body.append(form.main);
    
    
    
    
}

createApp();
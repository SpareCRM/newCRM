

export const loginData = async (task, method, id = null) => {
    try {
        const response = await fetch(`https://arcane-temple-54699.herokuapp.com/auth/login/${method === 'POST' ? '' : id }`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method,
            body: JSON.stringify(task)
        });

        const result = await response.json();
        console.log(result.token);
        localStorage.setItem('token', result.token)


        return result;
    } catch (error) {
        console.log(error);
    }
} 

export const registrationData = async (task, method, id = null) => {
    try {
        const response = await fetch(`https://arcane-temple-54699.herokuapp.com/auth/registration/${method === 'POST' ? '' : id }`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method,
            body: JSON.stringify(task)
        });

        const result = await response.json();
        console.log(result);

        return result;
    } catch (error) {
        console.log(error);
    }
} 


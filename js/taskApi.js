export const getTasks = async () => {
    try {
        const response = await fetch('https://arcane-temple-54699.herokuapp.com/api/tasks/tasks', {
            method: 'GET'
        });

        const result = await response.json();
        console.log(result);

        return result;
    } catch (error) {
        console.log(error);
    }
}

export const getDoneTasks = async () => {
    try {
        const response = await fetch('https://arcane-temple-54699.herokuapp.com/api/tasks/tasksDone', {
            method: 'GET'
        });

        const result = await response.json();
        console.log(result);

        return result;
    } catch (error) {
        console.log(error);
    }
}

 export const sendTasksData = async (task, method, id = null) => {
    try {
        const response = await fetch(`https://arcane-temple-54699.herokuapp.com/api/tasks/tasks/${method === 'POST' ? '' : id }`, {
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

export const sendTasksDoneData = async (task, method, id = null) => {
    try {
        const response = await fetch(`https://arcane-temple-54699.herokuapp.com/api/tasksDone/tasksDone/${method === 'POST' ? '' : id }`, {
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

export const deleteTasksItem = async (id) => {
    try {
        await fetch(`https://arcane-temple-54699.herokuapp.com/api/tasks/tasks/${id}`, {
            method: 'DELETE',
        });
    } catch (error) {
        console.log(error);
    }
}

export const deleteTasksDoneItem = async (id) => {
    try {
        await fetch(`https://arcane-temple-54699.herokuapp.com/api/tasksDone/tasksDone/${id}`, {
            method: 'DELETE',
        });
    } catch (error) {
        console.log(error);
    }
}

export const findTasks = async (value) => {
    try {
        const response = await fetch(`https://arcane-temple-54699.herokuapp.com/api/tasks/tasks?search=${value}`, {
            method: 'GET'
        });

        const result = await response.json();

        return result;
    } catch (error) {
        console.log(error);
    }
} 
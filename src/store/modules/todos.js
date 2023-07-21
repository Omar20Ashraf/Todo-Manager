import axios from "axios";

const state = {
    todos: [],
};

const getters = {
    allTodos: (state) => state.todos,
};

const actions = {
    async fetchTodos({ commit }) {
        const response = await axios.get(
            "https://jsonplaceholder.typicode.com/todos"
        );

        commit("setTodos", response.data);
    },
    async addToDo({ commit }, title) {
        const response = await axios.post(
            "https://jsonplaceholder.typicode.com/todos",
            { title, completed: false }
        );

        commit("newToDo", response.data);
    },
    async deleteTodo({ commit }, id) {
        // await axios.post(`https://jsonplaceholder.typicode.com/todos/${id}`);

        commit("removeTodo", id);
    },

    async filterTodos({ commit }, e) {
        // Get selected number
        const limit = parseInt(
            e.target.options[e.target.options.selectedIndex].innerText
        );

        const response = await axios.get(
            `https://jsonplaceholder.typicode.com/todos?_limit=${limit}`
        );

        commit("setTodos", response.data);
    },
    async updateTodo({ commit }, updTodo) {
        
        if(updTodo.id === 201){
            //update the items added by me
            commit("updateTodo", updTodo);
        }else{

            const response = await axios.put(
                `https://jsonplaceholder.typicode.com/todos/${updTodo.id}`,
                updTodo
            );
            commit("updateTodo", response.data);
        }
    },
};

const mutations = {
    setTodos: (state, todos) => (state.todos = todos),
    newToDo: (state, newTodo) => state.todos.unshift(newTodo),
    removeTodo: (state, id) =>
        (state.todos = state.todos.filter((todo) => todo.id != id)),
    updateTodo: (state, updTodo) => {
        const index = state.todos.findIndex((todo) => todo.id === updTodo.id);
        if (index !== -1) {
            state.todos.splice(index, 1, updTodo);
        }
    },
};

export default {
    state,
    getters,
    actions,
    mutations,
};

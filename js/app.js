var app = new Vue({
    
    el: "#root",
    
    data: {
        title_app: 'To do list',

        new_todo: '',

        todo_list: [
            'fare la spesa',
            'stampare i fogli',
            'andare dal dentista'
        ]
    },

    methods: {
        addTodo() {
           this.todo_list.push(this.new_todo);
           this.new_todo = '';
        },

        removeTodo(index) {
           this.todo_list.splice(index, 1);
        }
    }

});
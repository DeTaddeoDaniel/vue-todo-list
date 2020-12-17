var app = new Vue({
    
    el: "#root",
    
    data: {
        title_app: 'To do list',

        new_todo: '',

        todo_list: [
            'fare la spesa',
            'stampare i fogli',
            'cucinare'
        ]
    },

    methods: {
        addTodo: function () {
           this.todo_list.push(this.new_todo);
           this.new_todo = '';
        }
    }

});
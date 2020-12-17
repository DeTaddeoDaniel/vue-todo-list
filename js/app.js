var app = new Vue({
    
    el: "#app",
    
    data:{

        //nome applicazione
        title_app: 'To do list',

        // variabili input
        text_todo: '',
        date_todo: '',

        //to do list
        todo_list: [
            {
                date: '12/12/2020',
                todo: 'fare la spesa'
            
            },{
                date: '23/12/2020',
                todo: 'biglietti natalizi virtuali'
            
            },{
                date: '21/12/2020',
                todo: 'imparare vue'
            }
        ]
    },

    methods: {
        // aggiuge todo alla lista
        addTodo() {

            let new_todo = {
                todo: this.text_todo,
                date: this.date_todo
            };

           this.todo_list.push(new_todo);
           
           this.new_todo = '';
        },

        // rimuove al click l'elemento todo dalla lista
        removeTodo(index) {
           this.todo_list.splice(index, 1);
        }
    }

});
new Vue({
    el: '#app',
    data: {
        text: '',
        todos: [
            {title: 'testing', completed: false, note: 'imgs/note_1.png', id: 0},
        ],
    },
    methods: {
        addTodo: function () {
            let text = this.text
            let notes = ['imgs/note_1.png', 'imgs/note_3.png', 'imgs/note_2.png', 'imgs/note_4.png']
            let index = Math.floor(Math.random()*4)
            let id = this.todos.length
            this.todos.push({title: text, completed: false, note: notes[index], id: id})
        },

        complete: function (todoId) {
            x = this.todos[todoId]
            x.completed = x.completed ? false : true
        },

        deleteMe: function(todoId) {
            x = this.todos[todoId]
            x.completed = 'Do not show'
        }
    }
})


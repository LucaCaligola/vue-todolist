const { createApp } = Vue;

createApp({
    data() {
        return {
            newTodoElement: '',
            todoList : [
                {text: "fare la spesa", done: false},
                {text: "augurare buon compleanno allo zio", done: false},
                {text: "comprare il cibo per il gatto", done: false},
                {text: "chiamare il dottore", done: false}


            ]
        }
    },
    methods: {
        addNewTodoItem(newElement){
            newElement = newElement.trim();
            console.warn(newElement);


            if (newElement.length > 3){
                this.newTodoElement = '';
                this.todoList.push(newElement);
            }
           
        },


        removeTodoElement(index){
            console.log(index);
            this.todoList.splice(index, 1);
        }

        // doneIsTrue(status){
        //     if(todoList.done === true) {
                

        //     }
        // }
    },

    created() {
    },
}).mount('#app');
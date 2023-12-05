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
        addNewTodoItem(newTodoElement){
           
            console.log(this.newTodoElement);


            this.todoList.push({text: this.newTodoElement, done: false});
            
            this.newTodoElement = '';
            
           
           
        },


        removeTodoElement(index){
            console.log(index);
            this.todoList.splice(index, 1);
        }



        // doneIsTrue(index){
        //     if(todoList.done === true) {
                

        //     }
        // }
    },

    created() {
    },
}).mount('#app');
class AddTaskView {
    #parentEl = document.querySelector('.new-task-form');
    #newItem = document.querySelector('.new-item');

    getItem() {
        return this.#parentEl.querySelector('.new-item').value;
         
    }

    clearInput() {
        this.#newItem.value = '';
    }
    
    addHandlerNewTask(handler) {
        this.#parentEl.addEventListener('submit', function(e) {
            e.preventDefault();
            handler();
        })
    }
}

export default new AddTaskView();
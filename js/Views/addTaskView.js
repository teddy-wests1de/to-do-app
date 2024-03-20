class AddTaskView {
    _parentEl = document.querySelector('.new-task-form');
    _newItem = document.querySelector('.new-item');

    getItem() {
        return this._parentEl.querySelector('.new-item').value;
         
    }

    clearInput() {
        this._newItem.value = '';
    }
    
    addHandlerNewTask(handler) {
        this._parentEl.addEventListener('submit', function(e) {
            e.preventDefault();
            handler();
        })
    }
}

export default new AddTaskView();
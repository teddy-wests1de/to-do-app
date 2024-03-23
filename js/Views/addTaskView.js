class AddTaskView {
    _parentEl = document.querySelector('.new-task-form');
    _newItem = document.querySelector('.new-item');
    _btnCloseForm = document.querySelector('.btn-close-form');
    _selectCategory = document.querySelector('.select-category');

    getItem() {
        return this._parentEl.querySelector('.new-item').value;
         
    }
    getCategory() {
        return this._selectCategory.options[this._selectCategory.selectedIndex].value;
    }

    renderCategories(data) {
        data.map(item => {
            const markup = `
                <option class="category-item" value="${item.name}">${item.name}</option>
            `
            this._selectCategory.insertAdjacentHTML('beforeend', markup)
        })
    }

    clearInput() {
        this._newItem.value = '';
    }

    closeForm() {
        this._btnCloseForm.addEventListener('click', function() {
            newTaskModal.classList.add('hidden');
    
        })
    }
    addHandlerNewTask(handler) {
        this._parentEl.addEventListener('submit', function(e) {
            e.preventDefault();
            handler();
        })
    }

}

export default new AddTaskView();
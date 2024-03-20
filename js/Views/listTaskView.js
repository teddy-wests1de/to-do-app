class TaskView {
    _parentEl = document.querySelector('.tasks');
    _removeTasks = document.querySelector('.remove-all')
    
    
    // #tasks.addEventListener('change', function(e) {
    //     const checkBox = e.target.closest('.check-status');
    //     const itemName = e.target.parentElement.querySelector('.item-name').innerHTML;
    //     checkBox.checked ?  markComplete(itemName) : checkBox.dataset.status = 'new';
        
    // })
    // addHandlerRender(handler) {
    //     newTaskForm.addEventListener('submit', function(e) {
    //         e.preventDefault();
    //         handler();
    //     });
    // }

    clear() {
        this._parentEl.innerHTML = '';
    }

    render(data) {
        this.clear();
        data.map(item => {
          const html = `
          <div class="item" data-id="${item.id}">
          <div class="left-border"></div>
          <div class="check-mark"><i class="fa-regular fa-circle-check"></i></div>
          <div class="item-body">
            <div class="description">
              <div class="name">${item.name}</div>
              <div class="date-time">1/9/81 - 18:00</div>
            </div>
            <div class="control-btns">
              <div class="edit"><i class="fa-regular fa-pen-to-square"></i></div>
              <div class="close"><i class="fa-solid fa-xmark"></i></div>
            </div>
          </div>
        </div>
          `;
          
          this._parentEl.insertAdjacentHTML('beforeend', html);
        })
    }

    addHandlerRemoveAll(handler) {
        this._removeTasks.addEventListener('click', handler);
    }

    addHandlerChecked(handler) {
        document.querySelector('.task-item').addEventListener('click', function(e) {
            handler();
            console.log('handler');
        })
    }
}


export default new TaskView();
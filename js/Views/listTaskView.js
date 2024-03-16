class TaskView {
    #parentEl = document.querySelector('.tasks');
    #removeTasks = document.querySelector('.remove-all')
    
    
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
        this.#parentEl.innerHTML = '';
    }

    render(data) {
        this.clear();
        data.map(item => {
          const html = `
             <li class="task-item" data-color="">
                <input type="checkbox" value="${item.checked}" id="status" data-status="new" class="check-status" ${item.checked}>
                <span class="item-name">${item.name}</span>
                <span class="item-date">${item.date}</span>
                <span class="item-time">${item.time}</span>
             </li>
          `;
          this.#parentEl.insertAdjacentHTML('beforeend', html);
        })
    }

    addHandlerRemoveAll(handler) {
        this.#removeTasks.addEventListener('click', handler);
    }
}


export default new TaskView();
class TaskView {
    _parentEl = document.querySelector('.tasks');
    _removeItem = document.querySelector('.close');
    _removeTasks = document.querySelector('.remove-all')
    _btnNewTask = document.querySelector('.add-new');
    
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
              <div class="date-time">${item.date} - ${item.time}</div>
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

    // Function to publish new task event listener when clicking on New Task button.
    // Publisher (addHandler always in the view and contains the addEventListener method)
    addHandlerNewTask(handler){
      this._btnNewTask.addEventListener('click', handler)
    }

    addHandlerRemoveItem(handler) {
      this._parentEl.addEventListener('click', function(e) {
        const target = e.target.closest('.close');
        if(!target) return;
        const targetText = target.closest('.item').dataset.id;
        console.log(targetText)
        // const targetText = target.parentElement.parentElement.querySelector('.date-time').innerHTML
        
        handler(targetText);
      });
    }
    addHandlerRemoveAll(handler) {
      this._removeTasks.addEventListener('click', handler);
    }


    addTaskEvents(handler) {
      this._parentEl.addEventListener('click', function(event) {

        // console.log(target);
        // handler();
      })
    }


  }

export default new TaskView();
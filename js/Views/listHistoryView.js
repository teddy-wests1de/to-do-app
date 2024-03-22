class HistoryView {
    _parentEl = document.querySelector('.history-list');
    _btnClearHistory = document.querySelector('.btn-clear-history');

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
    addHandlerClearHistory(handler) {
        this._btnClearHistory.addEventListener('click', handler);
    }

}

export default new HistoryView();
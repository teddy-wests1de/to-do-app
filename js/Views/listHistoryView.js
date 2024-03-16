class HistoryView {
    #parentEl = document.querySelector('.history-list');

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
}

export default new HistoryView();
class CategoryView {
    _parentEl = document.querySelector('.category-list');
    _btnNewCategory = document.querySelector('.new-category button')
    _categoryList = document.querySelector('.category-list');

    clear() {
        this._parentEl.innerHTML = '';
    }
    render(array) {
        this.clear();
        this._parentEl.innerHTML = '';
        array.map(d => {
            const markup = `
                <div class="category-card">
                <h3 class="category-title">${d.name}</h3>
                    <p class="category-description">
                        ${d.description}
                    </p>
                </div>
            `;
        this._parentEl.insertAdjacentHTML('beforeend', markup);
        })
    }

   
    addHandlerNewCategory(handler) {
        this._btnNewCategory.addEventListener('click', handler);
    }


    displayModal(modal) {
        document.querySelector(`.${modal}`).classList.remove('hidden');
        console.log(`.${modal}`);
    }

}

export default new CategoryView();
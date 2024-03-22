class CategoryView {
    _parentEl = document.querySelector('.category-list');
    _btnNewCategory = document.querySelector('.new-category button')
    _categoryList = document.querySelector('.category-list');
    
    clear() {
        this._parentEl.innerHTML = '';
    }
    render(array) {
        this.clear();
        array.map(d => {
            const markup = `
                <div class="category-card">
                <h3 class="category-title">${d.name}</h3>
                    <p class="category-description">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro suscipit aliquam, quisquam delectus facere deserunt eaque ea placeat nemo et, vel nisi consequatur error quasi illum doloribus quas! Unde, eligendi.
                    </p>
                </div>
            `;
        this._parentEl.insertAdjacentHTML('beforeend', markup);
        })
    }

   
    addHandlerNewCategory(handler) {
        this._newCategory.addEventListener('click', handler);
    }
    // getHtml() {
    //     return `
    //     <div class="category-card">
    //         <h3 class="category-title">Working...!</h3>
    //         <p class="category-description">
    //             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro suscipit aliquam, quisquam delectus facere deserunt eaque ea placeat nemo et, vel nisi consequatur error quasi illum doloribus quas! Unde, eligendi.
    //         </p>
    //     </div>
    //     `
    // }
}

export default new CategoryView();
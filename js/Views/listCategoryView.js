class CategoryView {
    #parentEl = document.querySelector('.category-list');

    clear() {
        this.#parentEl.innerHTML = '';
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
        this.#parentEl.insertAdjacentHTML('beforeend', markup);
        })
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
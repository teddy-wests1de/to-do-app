class AddCategoryView {
    _categoryName = document.querySelector("#new-category");
    _btnNewCategory = document.querySelector(".btn-new-category")
    _categoryDescription = document.querySelector("#category-description");

    getGategoryName() {
        return this._categoryName.value;
    }
    getDescription() {
        return this._categoryDescription.value;
    }

    clearInput() {
        this._categoryName.value = '';
    }

    addHandlerNewCategory(handler) {
        this._btnNewCategory.addEventListener('click', function(e){
            e.preventDefault();
            handler();
        });
    }
}

export default new AddCategoryView();
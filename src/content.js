'use strict';

const id = setTimeout(ready, 2000);

function ready() {
    clearTimeout(id);

    const list = document.querySelectorAll('.docs-homescreen-list-item-cell.docs-homescreen-list-item-time');

    for (let i = 0; i < list.length; i++) {
        let favorite = document.createElement('i');
        favorite.classList.add('material-icons');
        favorite.textContent = 'favorite';

        list[i].appendChild(favorite);
    }
}


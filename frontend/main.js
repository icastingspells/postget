import { createItem } from "./item.js";
import { getAllitem,  addItem, deleteItem, updateItem} from "./requests.js";

(function () {
    class Item {
        name;
        title;
        price;
        img;

        constructor(name, title, price, img) {
            this.name = name;
            this.title = title;
            this.price = price;
            this.img = img;
        }

        setID(id) {
            this.id = id;
        }
    }
    let list = document.getElementById('list');
    async function elementsGenerator() {
        const items = await getAllitem();
        for (let item of items) {
            let listItem = createItem(item.name, item.price, item.title, item.img);
            

            listItem.btnDelete.addEventListener('click', function () {
                if (confirm("Вы уверены что хоитие удалить объект")) {
                    deleteItem(item.id);
                    listItem.item.remove();
                }
            });

            listItem.btnEdit.addEventListener('click', function () {
                let iName = document.getElementById('Name');
                let iPrice = document.getElementById('Price');
                let ititle = document.getElementById('title');
                let iImg = document.getElementById('Img');

                let edited = new Item(iName.value, iPrice.value, ititle.value, iImg.value);
                edited.setID(item.id)

                updateItem(edited);
                window.location.reload();
                
            });

            list.append(listItem.item);
        }
    }

    document.addEventListener('DOMContentLoaded', function (e) {
        e.preventDefault();
        elementsGenerator();
        let form = document.getElementById('add-element-form');
        form.addEventListener('submit', function () {
            let iName = document.getElementById('Name');
            let iPrice = document.getElementById('Price');
            let ititle = document.getElementById('title');
            let iImg = document.getElementById('Img');

            let item = new Item(iName.value, iPrice.value, ititle.value, iImg.value);

            addItem(item);
            let listItem = createItem(iName.value, iPrice.value, ititle.value, iImg.value);
            list.append(listItem.item);
        });
    })
})();
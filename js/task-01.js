const list = document.getElementById('categories');
const itemList = document.querySelectorAll('.item');

console.log(itemList.length);

itemList.forEach(function (list) {
    console.log(list.firstElementChild.textContent);
    console.log(list.lastElementChild.children.length);
});
export async function getAllitem(item){
    const response = await fetch('http://localhost:8080/item', {
        method: 'GET'
    });
    const result = await response.json();
    console.log(result);
    return result;
}

// export async function getOneItem(id){
//     const response = await fetch('http://localhost:8080/item/' + id, {
//         method: 'GET'
//     });
//     const result = await response.json();
//     console.log(result);
//     return result;
// }

export async function addItem(item){
    await fetch('http://localhost:8080/item', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            name: item.name,
            title: item.title,
            price: item.price,
            img: item.img
        })
    });
}

export async function deleteItem(id){
    await fetch('http://localhost:8080/item/' + id, {
        method: 'DELETE'
    });
}

export async function updateItem(item){
    await fetch('http://localhost:8080/item/' + item.id, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            name: item.name,
            title: item.title,
            price: item.price,
            img: item.img
        })
    });
}
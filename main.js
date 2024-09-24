function addToTable() {
           
    const name = document.getElementById('name').value;
    const description = document.getElementById('description').value;
    const price = document.getElementById('price').value;

    const table = document.getElementById('productTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();


    const nameCell = newRow.insertCell(0);
    const descriptionCell = newRow.insertCell(1);
    const priceCell = newRow.insertCell(2);

    nameCell.textContent = name;
    descriptionCell.textContent = description;
    priceCell.textContent = `$${parseFloat(price).toFixed(2)}`;

    document.getElementById('productForm').reset();
}
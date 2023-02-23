function rotateCells(tableId, direction) {
    // Get a reference to the table
    const table = document.getElementById(tableId);

    // Get a reference to the cells in the table
    const cells = table.getElementsByTagName("td");

    // Determine the indices of the cells to rotate based on the direction parameter
    let indices = [];
    if (direction === "clockwise") {
      indices = [0, 6, 8, 2, 1, 3, 7, 5];
    } else if (direction === "counterclockwise") {
      indices = [2, 8, 6, 0, 5, 7, 3, 1];
    }

    // Rotate the numbers by swapping their positions
    let temp = cells[indices[0]].textContent;
    cells[indices[0]].textContent = cells[indices[1]].textContent;
    cells[indices[1]].textContent = cells[indices[2]].textContent;
    cells[indices[2]].textContent = cells[indices[3]].textContent;
    cells[indices[3]].textContent = temp;

    temp = cells[indices[4]].textContent;
    cells[indices[4]].textContent = cells[indices[5]].textContent;
    cells[indices[5]].textContent = cells[indices[6]].textContent;
    cells[indices[6]].textContent = cells[indices[7]].textContent;
    cells[indices[7]].textContent = temp;
}

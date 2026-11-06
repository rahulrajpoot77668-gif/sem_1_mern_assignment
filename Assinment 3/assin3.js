

const sizes = ["S", "M", "L", "XL"];
const chest = [36, 38, 40, 42];
const waist = [30, 32, 34, 36];
const length = [26, 27, 28, 29];
const sleeve = [16, 17, 18];
const colours = ["Navy", "White", "Olive", "Black"];

let tableBody = document.getElementById("tableBody");

for (let i = 1; i <= 20; i++) {

    let brand = i <= 10 ? "Campus" : "Everyday";

    let row = document.createElement("tr");

    if (i === 1 || i === 11) {
        let brandCell = document.createElement("td");
        brandCell.rowSpan = 10;
        brandCell.className = "brand";
        brandCell.textContent = brand;
        row.appendChild(brandCell);
    }

    let index = (i - 1) % 4;

    let data = [
        "TS-" + String(i).padStart(2, "0"),
        sizes[index],
        chest[index],
        waist[index],
        length[index],
        sleeve[(i - 1) % 3],
        colours[(i - 1) % 4],
        11 + i,
        "₹" + (479 + i * 20)
    ];

    data.forEach((value, j) => {

        let cell = document.createElement("td");
        cell.textContent = value;

        if (j === 8) {
            cell.className = "price";
        }

        row.appendChild(cell);
    });

    tableBody.appendChild(row);
}

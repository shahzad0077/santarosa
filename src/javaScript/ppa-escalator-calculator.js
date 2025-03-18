
// Get the table body
const tableBody = document.getElementById("table-body");

// Sample Data (You can replace this with actual data)
const tableData = [
    { year: 1, col2: "$100.00", col3: "$1,200.00 ", col4: "$100.00", col5: " $1200.00" },
    { year: 2, col2: "$100.00", col3: "$1,200.00 ", col4: "$100.99", col5: " $1211.88" },
    { year: 3, col2: "$100.00", col3: "$1,200.00 ", col4: "$100.99", col5: " $1223.88" },
    { year: 4, col2: "$100.00", col3: "$1,200.00 ", col4: "$103.00", col5: " $1235.99" },
    { year: 5, col2: "$100.00", col3: "$1,200.00 ", col4: "$104.02", col5: " $1248.23" },
    { year: 6, col2: "$100.00", col3: "$1,200.00 ", col4: "$105.05", col5: " $1260.59" },
    { year: 7, col2: "$100.00", col3: "$1,200.00 ", col4: "$106.09", col5: " $1273.07" },
    { year: 8, col2: "$100.00", col3: "$1,200.00 ", col4: "$107.14 ", col5: " $1285.67" },
    { year: 9, col2: "$100.00", col3: "$1,200.00 ", col4: "$108.20", col5: " $1298.40" },
    { year: 10, col2: "$100.00", col3: "$1,200.00 ", col4: "$109.27", col5: " $1311.25" },
    { year: 11, col2: "$100.00", col3: "$1,200.00 ", col4: "$110.35", col5: " $1324.23" },
    { year: 12, col2: "$100.00", col3: "$1,200.00 ", col4: "$111.45", col5: " $1337.34" },
    { year: 13, col2: "$100.00", col3: "$1,200.00 ", col4: "$112.55", col5: " $1350.58" },
    { year: 14, col2: "$100.00", col3: "$1,200.00 ", col4: "$113.66", col5: " $1363.96" },
    { year: 15, col2: "$100.00", col3: "$1,200.00 ", col4: "$114.79", col5: " $1377.46" },
    { year: 16, col2: "$100.00", col3: "$1,200.00 ", col4: "$115.92", col5: " $1391.10" },
    { year: 17, col2: "$100.00", col3: "$1,200.00 ", col4: "$117.07", col5: " $1404.87" },
    { year: 18, col2: "$100.00", col3: "$1,200.00 ", col4: "$118.23", col5: " $1418.78" },
    { year: 19, col2: "$100.00", col3: "$1,200.00 ", col4: "$119.40", col5: " $1432.82" },
    { year: 20, col2: "$100.00", col3: "$1,200.00 ", col4: "$120.58", col5: " $1447.01" },
    { year: 21, col2: "$100.00", col3: "$1,200.00 ", col4: "$121.78", col5: " $1461.33" },
    { year: 22, col2: "$100.00", col3: "$1,200.00 ", col4: "$122.98", col5: " $1475.80" },
    { year: 23, col2: "$100.00", col3: "$1,200.00 ", col4: "$124.20", col5: " $1490.41" },
    { year: 24, col2: "$100.00", col3: "$1,200.00 ", col4: "$125.43", col5: " $1505.16" },
    { year: 25, col2: "$100.00", col3: "$1,200.00 ", col4: "$126.67", col5: " $1520.07" },
];

// Populate table rows dynamically
tableData.forEach((row, index) => {
    const tr = document.createElement("tr");
    tr.className = index % 2 === 0 ? "bg-white" : "bg-white";

    tr.innerHTML = `
    <td class="px-4 py-2 border border-gray-300">${row.year}</td>
    <td class="px-4 py-2 border border-gray-300">${row.col2}</td>
    <td class="px-4 py-2 border border-gray-300">${row.col3}</td>
    <td class="px-4 py-2 border border-gray-300">${row.col4}</td>
    <td class="px-4 py-2 border border-gray-300">${row.col5}</td>
  `;

    tableBody.appendChild(tr);
});
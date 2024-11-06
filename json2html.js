export default function json2html(data) {
    // Create the table header
    let html = `<table data-user="smitadharwa0307@gmail.com">
        <thead>
            <tr><th>Name</th><th>Age</th><th>Gender</th></tr>
        </thead>
        <tbody>`;
    
    // Loop through each item in the data array and create rows
    data.forEach(item => {
        html += `<tr><td>${item.Name || ""}</td><td>${item.Age || ""}</td><td>${item.Gender || ""}</td></tr>`;
    });
    
    // Close the table tags
    html += `</tbody></table>`;
    
    return html;
}

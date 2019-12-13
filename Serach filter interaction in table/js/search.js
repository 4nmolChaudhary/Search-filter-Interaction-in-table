const search = document.querySelector("#search");
Filter = () => {
    // Declare variables
    let filter, table, tr, td, i, txtValue;
    filter = search.value.toUpperCase();
    table = document.querySelector("table");
    tr = table.getElementsByTagName("tr");
    console.log("test");
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[document.querySelector("select").value];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

search.addEventListener("keyup", Filter);
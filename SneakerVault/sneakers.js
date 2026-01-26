document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const brandFilter = document.getElementById("brandFilter");

    searchInput.addEventListener("input", filterContent);
    brandFilter.addEventListener("change", filterContent);

    function filterContent() {
        const searchText = searchInput.value.toLowerCase();
        const selectedBrand = brandFilter.value;
        const sneakerItems = document.querySelectorAll(".sneaker-item");
        const tableRows = document.querySelectorAll("table tbody tr");
        let resultsFound = false;

        sneakerItems.forEach(function (item) {
            const brand = item.getAttribute("data-brand");
            const name = item.querySelector("h3").textContent.toLowerCase();
            const description = item.querySelector("p").textContent.toLowerCase();

            if ((selectedBrand === "all" || brand === selectedBrand) &&
                (name.includes(searchText) || description.includes(searchText))) {
                item.style.display = "";
                resultsFound = true;
            } else {
                item.style.display = "none";
            }
        });

        tableRows.forEach(function (row) {
            const brand = row.getAttribute("data-brand");
            const columns = row.querySelectorAll("td");
            let matches = Array.from(columns).some(function (column) {
                return column.textContent.toLowerCase().includes(searchText);
            });

            if ((selectedBrand === "all" || brand === selectedBrand) && matches) {
                row.style.display = "";
                resultsFound = true;
            } else {
                row.style.display = "none";
            }
        });

        const noResultsMessage = document.getElementById("noResultsMessage");
        if (!resultsFound) {
            noResultsMessage.style.display = "block";
            noResultsMessage.style.opacity = "1";
        } else {
            noResultsMessage.style.opacity = "0";
            noResultsMessage.style.display = "none";
        }
    }

    const mybutton = document.getElementById("myBtn");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 100) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    });

    window.topFunction = function () {
        if ('scrollBehavior' in document.documentElement.style) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            window.scrollTo(0, 0);
        }
    };
});
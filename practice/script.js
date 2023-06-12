async function paginationData(){
 fetch("https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json")
 .then((response)=>response.json()).then((json)=>{
    const bunch=[]
    const elem=document.getElementById("newclass")
    json.forEach(element => {
        const wordnode=document.createElement("div")
        wordnode.setAttribute("class","data-fild")
        wordnode.innerHTML=`<div class="in-tag">${element.id}</div>
        <div class="in-tag">${element.name}</div>
        <div class="in-tag">${element.email}</div>` 
        bunch.push(wordnode)
    });
    elem.append(... bunch)
    
 })
}

const perPage = 10; // Number of items per page
    const jsonUrl = "https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json";
    const pageContainer = document.getElementById("page-container");
    const dataContainer = document.getElementById("newclass");

    let jsonData = [];
    let currentPage = 1;

    // Fetch JSON data and initialize pagination
    async function fetchData() {
        try {
            const response = await fetch(jsonUrl);
            jsonData = await response.json();
            updatePagination();
        } catch (error) {
            console.error("Failed to fetch JSON data:", error);
        }
    }

    // Update the displayed data based on the current page
    function updateData() {
        const start = (currentPage - 1) * perPage;
        const end = start + perPage;
        const pageData = jsonData.slice(start, end);

        dataContainer.innerHTML = ""; // Clear previous data

        for (const element of pageData) {
            const wordnode = document.createElement("div");
            wordnode.setAttribute("class", "data-fild");
            wordnode.innerHTML = `<div class="in-tag">${element.id}</div>
                                  <div class="in-tag">${element.name}</div>
                                  <div class="in-tag">${element.email}</div>`;
            dataContainer.appendChild(wordnode);
        }
    }

    // Update the pagination buttons based on the current page
    function updatePagination() {
        const totalPages = Math.ceil(jsonData.length / perPage);

        // Disable or enable pagination buttons based on the current page
        pageContainer.querySelectorAll(".btn").forEach((btn) => {
            btn.disabled = false; // Enable all buttons by default
        });

        if (currentPage === 1) {
            pageContainer.querySelector(".start-btn").disabled = true;
            pageContainer.querySelector(".pre-btn").disabled = true;
        } else if (currentPage === totalPages) {
            pageContainer.querySelector(".next-btn").disabled = true;
            pageContainer.querySelector(".end-btn").disabled = true;
        }

        // Update active button style
        pageContainer.querySelectorAll(".btn").forEach((btn) => {
            btn.classList.remove("active");
        });
        pageContainer.querySelector(`.btn-${currentPage}`).classList.add("active");
    }

    // Event listener for pagination button clicks
    pageContainer.addEventListener("click", (event) => {
        if (event.target.classList.contains("btn")) {
            const btnText = event.target.innerText;
            switch (btnText) {
                case "Start":
                    currentPage = 1;
                    break;
                case "Previous":
                    currentPage--;
                    break;
                case "Next":
                    currentPage++;
                    break;
                case "End":
                    currentPage = Math.ceil(jsonData.length / perPage);
                    break;
                default:
                    currentPage = parseInt(btnText);
                    break;
            }

            updateData();
            updatePagination();
        }
    });

    // Initialize pagination on page load
    fetchData();

paginationData()
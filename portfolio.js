
      const filterButtons = document.querySelectorAll(".filter-btn");
      const portfolioItems = document.querySelectorAll(".portfolio-item");

      filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
          // Remove active class from all buttons
          filterButtons.forEach((btn) => btn.classList.remove("active"));
          // Add active to clicked
          button.classList.add("active");

          const filterValue = button.getAttribute("data-filter");

          portfolioItems.forEach((item) => {
            const itemCategory = item.getAttribute("data-category");

            if (filterValue === "all" || itemCategory === filterValue) {
              item.style.display = "block";
            } else {
              item.style.display = "none";
            }
          });
        });
      });
    
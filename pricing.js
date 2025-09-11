
      // Tab switching functionality
      const tabs = document.querySelectorAll(".tab");
      tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
          tabs.forEach((t) => t.classList.remove("active"));
          tab.classList.add("active");
          // Future: You can add logic to change pricing cards per tab
        });
      });
 
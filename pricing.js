  // Tab switching functionality
  const tabs = document.querySelectorAll(".tab");
  const contents = document.querySelectorAll(".tab-content");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      // Remove active class from all tabs
      tabs.forEach((t) => t.classList.remove("active"));
      // Add active class to clicked tab
      tab.classList.add("active");

      // Hide all tab-content
      contents.forEach((c) => c.classList.remove("active"));

      // Show the related content
      const target = tab.getAttribute("data-tab");
      document.getElementById(target).classList.add("active");
    });
  });
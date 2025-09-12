      // Counter Animation
      const counters = document.querySelectorAll(".stat h2");
      counters.forEach((counter) => {
        const target = +counter.getAttribute("data-target");
        let count = 0;
        const speed = target / 100; // adjust speed

        const updateCount = () => {
          if (count < target) {
            count += speed;
            counter.textContent = Math.ceil(count) + "+";
            requestAnimationFrame(updateCount);
          } else {
            counter.textContent = target + "+";
          }
        };
        updateCount();
      }); 
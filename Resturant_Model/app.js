let initialScrollPosition = window.scrollY;
      window.addEventListener("scroll", function () {
        let currentScrollPosition = window.scrollY;
        let scrolledHeight = currentScrollPosition - initialScrollPosition;
        if (scrolledHeight > 300) {
          document.querySelector(".up-btn").classList.add("active");
        } else {
          document.querySelector(".up-btn").classList.remove("active");
        }
      });
document.addEventListener("DOMContentLoaded", () => {
    // Smooth fade-in effect for sections
    const fadeInElements = document.querySelectorAll(".top3, .top4, .top6, .search");
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in-active");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    
    fadeInElements.forEach(element => observer.observe(element));

    // Add hover animation to search tabs
    const searchTabs = document.querySelectorAll(".search_tab");
    searchTabs.forEach(tab => {
        tab.addEventListener("mouseover", () => {
            tab.classList.add("tab-hover");
        });
        tab.addEventListener("mouseout", () => {
            tab.classList.remove("tab-hover");
        });
    });

    // Button hover animation
    const buttons = document.querySelectorAll(".explore-btn, .btn");
    buttons.forEach(button => {
        button.addEventListener("mouseenter", () => {
            button.classList.add("button-hover");
        });
        button.addEventListener("mouseleave", () => {
            button.classList.remove("button-hover");
        });
    });
});


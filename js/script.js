"use strict";
document.addEventListener("DOMContentLoaded", () => {
    const tabParent = document.querySelector(".tabheader__items"),
        tabs = tabParent.querySelectorAll(".tabheader__item"),
        tabsContent = document.querySelectorAll(".tabcontent");

    function hideTabsContent() {
        tabsContent.forEach((item) => {
            item.style.display = "none";
        });
        tabs.forEach((item) => {
            item.classList.remove("tabheader__item_active");
        });
    }

    function showTabContent(i) {
        tabsContent[i].style.display = "block";
        tabs[i].classList.add("tabheader__item_active");
    }
    console.log(tabs);
    console.log(tabsContent);
    //hideTabsContent();
    //showTabContent(0);
});

window.onload = () => {
  lightbox.option({
    resizeDuration: 200,
    disableScrolling: true,
  });

  const grid = document.querySelector(".grid-masonry");
  const masonry = new Masonry(grid, {
    itemSelector: ".grid-item-masonry",
    gutter: ".gutter-sizer",
    horizontalOrder: true,
  });
};

function showSearch() {
  const search = document.getElementById("search");
  search.style.display = "block";
  search.focus();
  const search_btn = document.getElementById("search_btn");
  search_btn.style.display = "none";
}

function hideSearch() {
  const search = document.getElementById("search");
  search.style.display = "none";
  const search_btn = document.getElementById("search_btn");
  search_btn.style.display = "block";
}

function toggleCardMenu() {
  if (window.innerWidth < 1024) {
    const card_menu = document.getElementById("card_menu");
    const menu_arrow_down = document.getElementById("menu_arrow_down");
    const menu_arrow_up = document.getElementById("menu_arrow_up");
    if (card_menu.style.display === "flex") {
      card_menu.style.display = "none";
      menu_arrow_down.style.display = "block";
      menu_arrow_up.style.display = "none";
    } else {
      card_menu.style.display = "flex";
      menu_arrow_down.style.display = "none";
      menu_arrow_up.style.display = "block";
    }
  }
}

function toggleMenu() {
  const menu = document.getElementById("menu");
  if (menu.style.display === "flex") {
    menu.style.display = "none";
  } else {
    menu.style.display = "flex";
  }
}

let lastWidth = window.innerWidth;
addEventListener("resize", event => {
  if (window.innerWidth < 1024 && lastWidth >= 1024) {
    const menu = document.getElementById("menu");
    menu.style.display = "none";
  }
  if (window.innerWidth >= 1024) {
    const menu = document.getElementById("menu");
    if (menu.style.display === "none") {
      menu.style.display = "flex";
    }
    const card_menu = document.getElementById("card_menu");
    if (card_menu.style.display === "flex") {
      card_menu.style.display = "none";
      const menu_arrow_down = document.getElementById("menu_arrow_down");
      const menu_arrow_up = document.getElementById("menu_arrow_up");
      menu_arrow_down.style.display = "block";
      menu_arrow_up.style.display = "none";
    }
  }
  lastWidth = window.innerWidth;
});

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

function morePhotos() {
  const rozwin_btn = document.getElementById("rozwin_btn");
  rozwin_btn.style.display = "none";

  const grid = document.querySelector(".grid-masonry");
  grid.innerHTML += `
  <div class="grid-item-masonry">
    <a href="imgs/10.jpg" data-lightbox="imgs">
      <img src="imgs/10.jpg" alt="" />
    </a>
  </div>
  <div class="grid-item-masonry">
    <a href="imgs/11.jpg" data-lightbox="imgs">
      <img src="imgs/11.jpg" alt="" />
    </a>
  </div>
  <div class="grid-item-masonry">
    <a href="imgs/12.jpg" data-lightbox="imgs">
      <img src="imgs/12.jpg" alt="" />
    </a>
  </div>
  <div class="grid-item-masonry">
    <a href="imgs/13.jpg" data-lightbox="imgs">
      <img src="imgs/13.jpg" alt="" />
    </a>
  </div>
  <div class="grid-item-masonry">
    <a href="imgs/14.jpg" data-lightbox="imgs">
      <img src="imgs/14.jpg" alt="" />
    </a>
  </div>
  <div class="grid-item-masonry">
    <a href="imgs/15.jpg" data-lightbox="imgs">
      <img src="imgs/15.jpg" alt="" />
    </a>
  </div>
  <div class="grid-item-masonry">
    <a href="imgs/16.jpg" data-lightbox="imgs">
      <img src="imgs/16.jpg" alt="" />
    </a>
  </div>`;

  const gradient = document.getElementById("gradient");
  gradient.style.display = "none";

  const masonry = new Masonry(grid, {
    itemSelector: ".grid-item-masonry",
    gutter: ".gutter-sizer",
    horizontalOrder: true,
  });

  const realizacja = document.getElementById("realizacja");
  const realizacja_height = realizacja.offsetHeight;

  console.log(realizacja_height);

  masonry.layout();

  const interval = setInterval(() => {
    console.log(realizacja.offsetHeight);
    console.log("timeout");
    masonry.layout();
    if (realizacja.offsetHeight > realizacja_height * 1.3) {
      clearInterval(interval);
      masonry.layout();
    }
  }, 10);
}

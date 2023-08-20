window.onload = () => {
  const grid = document.querySelector(".grid-masonry");
  const masonry = new Masonry(grid, {
    itemSelector: ".grid-item-masonry",
    gutter: ".gutter-sizer",
    horizontalOrder: true,
  });
};

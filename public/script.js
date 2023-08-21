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

function changePage(direction) {
  const basePath = "/interactive-webcomic/";
  let currentPage = window.location.pathname.replace(basePath, "");

  if (currentPage === "") {
    // If on the base page
    if (direction === 1) {
      // Go to the first comic page
      window.location.href = basePath + "1";
    }
    // No action for direction -1 since there's no page before the base page
  } else {
    // On a numbered comic page
    let currentPageNumber = parseInt(currentPage, 10); // Convert the path to a number
    let newPageNumber = currentPageNumber + direction;

    if (newPageNumber === 0) {
      // Go back to the base page
      window.location.href = basePath;
    } else {
      // Go to the next or previous numbered page
      window.location.href = basePath + newPageNumber;
    }
  }
}

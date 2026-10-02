const menu = document.querySelector("#top-menu-bar");
const main = document.querySelector("#main");

if (menu && main) {
  function pageIdFromHash(hash) {
    try {
      return decodeURIComponent(hash.slice(1));
    } catch {
      return "";
    }
  }

  function showPage(requestedPageId) {
    const pages = [...main.querySelectorAll(".page[id]")];
    const links = [...menu.querySelectorAll("a[href^='#']")];
    const fallbackPage =
      pages.find((page) =>
        links.some((link) => pageIdFromHash(link.hash) === page.id),
      ) || pages[0];
    const activePage =
      pages.find((page) => page.id === requestedPageId) || fallbackPage;

    pages.forEach((page) => {
      page.style.display = page === activePage ? "block" : "none";
    });

    links.forEach((link) => {
      const isActive =
        activePage && pageIdFromHash(link.hash) === activePage.id;
      link.classList.toggle("active", Boolean(isActive));

      if (isActive) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  menu.addEventListener("click", (event) => {
    const link = event.target.closest("a[href^='#']");

    if (!link || !menu.contains(link)) {
      return;
    }

    const pageId = pageIdFromHash(link.hash);
    const pageExists = [...main.querySelectorAll(".page[id]")].some(
      (page) => page.id === pageId,
    );

    if (!pageExists) {
      event.preventDefault();
      return;
    }

    showPage(pageId);
  });

  window.addEventListener("hashchange", () => {
    showPage(pageIdFromHash(window.location.hash));
  });

  showPage(pageIdFromHash(window.location.hash));
}

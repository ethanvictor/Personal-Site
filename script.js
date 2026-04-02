const currentPage = document.body.dataset.page;
const sectionMap = {
  modules: ["academic", "modules"]
};

const activePages = new Set(sectionMap[currentPage] || [currentPage]);

for (const link of document.querySelectorAll(".site-nav a")) {
  const linkTarget = link.getAttribute("href");
  if (!linkTarget) continue;

  const normalizedTarget = linkTarget.replace(".html", "").replace("index", "home");
  if (activePages.has(normalizedTarget)) {
    link.classList.add("active");
    link.setAttribute("aria-current", normalizedTarget === currentPage ? "page" : "true");
  }
}

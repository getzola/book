function initToggleMenu() {
  var $menu = document.querySelector(".menu");
  var $menuIcon = document.querySelector(".menu-icon");
  var $page = document.querySelector(".page");
  $menuIcon.addEventListener("click", function() {
    $menu.classList.toggle("menu-hidden");
    $page.classList.toggle("page-without-menu");
  });
}

if (document.readyState === "complete" ||
    (document.readyState !== "loading" && !document.documentElement.doScroll)
) {
  initToggleMenu();
} else {
  document.addEventListener("DOMContentLoaded", initToggleMenu);
}

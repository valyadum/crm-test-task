document.addEventListener('DOMContentLoaded', function () {
    const sidebarItems = document.querySelectorAll('.sidebar-list li');
    const pageContent = document.getElementById('page-content');

    sidebarItems.forEach(item => {
        item.addEventListener('click', function () {
            sidebarItems.forEach(i => i.classList.remove('active-item'));
            item.classList.add('active-item');
            const page = item.getAttribute('data-page');
            loadPage(page);
        });
    });

    function loadPage(page) {
        pageContent.classList.remove('active');
        setTimeout(() => {
            // Replace the content here with an actual AJAX request if needed
            pageContent.innerHTML = `<h2>${page.charAt(0).toUpperCase() + page.slice(1)} Page</h2>`;
            pageContent.classList.add('active');
        }, 500);
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const burgerIcon = document.getElementById('burger-icon');
    const menu = document.getElementById('menu');

    burgerIcon.addEventListener('click', () => {
        menu.classList.toggle('show');
    });
});

document.getElementById('burger-icon').addEventListener('click', function () {
    document.getElementById('sidebar-menu').classList.toggle('show');
});

document.querySelectorAll('.pagination li a').forEach(function (pageLink) {
    pageLink.addEventListener('click', function (e) {
        e.preventDefault(); 

        document.querySelectorAll('.pagination li').forEach(function (pageItem) {
            pageItem.classList.remove('active');
        });

        this.parentElement.classList.add('active');
    });
});
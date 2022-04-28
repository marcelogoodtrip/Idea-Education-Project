const menuItems = document.querySelectorAll('.menu a[href^="#"]');

console.log(menuItems);

menuItems.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick);
})

function scrollToIdOnClick(event) {
    event.preventDefault();
    const element = event.target;
    const to = getScrollToByHref(event.target);

    if(event.type === 'touchstart') {
        event.preventDefault();
    }
    
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', 'true');

    if(active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    }

    scrollToPosition(to);
}

function scrollToPosition(to) {
    window.scroll({
        top: to,
        behavior: "smooth",
    });
}

function getScrollToByHref(element) {
    const id = element.getAttribute('href');
    return document.querySelector(id).offsetTop;
}
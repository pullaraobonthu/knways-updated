
document.addEventListener('DOMContentLoaded', () => {

    // Mobile navigation
    const menuButton = document.querySelector('.hamb');
    const navigation = document.querySelector('.links');

    if (menuButton && navigation) {
        menuButton.addEventListener('click', () => {
            navigation.classList.toggle('show');
        });
    }

    // Highlight current page
    const currentPage =
        location.pathname.split('/').pop() || 'index.html';

    document.querySelectorAll('.links a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    // Automatic copyright year
    document.querySelectorAll('[data-year]').forEach(element => {
        element.textContent = new Date().getFullYear();
    });

    // Contact form
    const form = document.querySelector('#enquiry');

    if (form) {
        form.addEventListener('submit', event => {
            event.preventDefault();

            const data = new FormData(form);

            const subject = encodeURIComponent(
                'KNways Website Enquiry: ' + data.get('name')
            );

            const body = encodeURIComponent(
                'Name: ' + data.get('name') +
                '\nEmail: ' + data.get('email') +
                '\nPhone: ' + data.get('phone') +
                '\nService: ' + data.get('service') +
                '\n\nMessage: ' + data.get('message')
            );

            window.location.href =
                'mailto:info@knways.com?subject=' +
                subject + '&body=' + body;
        });
    }

});

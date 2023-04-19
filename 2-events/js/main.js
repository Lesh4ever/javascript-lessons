$('button').on('click', function(event) {
    event.preventDefault(); // запобігає стандартій реакції браузера на подію

    console.log('event-click', event);
});
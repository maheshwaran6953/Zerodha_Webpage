var hamburger_menu_button = document.querySelector('.hamburger-menu-button');
var hamburger_menu_container = document.querySelector('.hamburger-menu-container');

if (hamburger_menu_button && hamburger_menu_container) {
    
    hamburger_menu_button.addEventListener('click', function(event) {
        event.stopPropagation();
        event.preventDefault();
        
        hamburger_menu_container.classList.toggle('active');
        
    });

    document.addEventListener('click', function(event) {
        var isClickInsideMenu = hamburger_menu_container.contains(event.target);
        var isClickOnButton = hamburger_menu_button.contains(event.target);
        
        if (!isClickInsideMenu && !isClickOnButton) {
            hamburger_menu_container.classList.remove('active');
        }
    });

    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            hamburger_menu_container.classList.remove('active');
        }
    });
    
    console.log('Hamburger menu script loaded successfully');
    
}
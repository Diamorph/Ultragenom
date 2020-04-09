var toggleHeaderButton = document.getElementById('toggle-header-button');
var mobileMenu = document.getElementById('mobile-menu');
var closeMenuButton = document.getElementById('close-mobile-menu-button');
var toggleDropdownMobileHeader = Array.from(document.getElementsByClassName('dropdown-mobile-container'));
var dropdownHeader = Array.from(document.getElementsByClassName('dropdown'));
var html = document.body.parentNode;
var dropDownToggleElement;
html.addEventListener('click', function(event) {
    event.preventDefault();
    if (!toggleHeaderButton.contains(event.target) && !mobileMenu.contains(event.target)) {
       mobileMenu.style.display = 'none';
    }
});
toggleHeaderButton.addEventListener('click', toggleMobileHeader, false);
closeMenuButton.addEventListener('click', toggleMobileHeader, false);
function scrollToAnchor(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    mobileMenu.style.display = 'none';
    removeDropdown();
}
function toggleMobileHeader() {
    mobileMenu.style.display = (mobileMenu.style.display === 'flex') ? 'none' : 'flex';
}
toggleDropdownMobileHeader.forEach(elem => {
    elem.addEventListener('click', () => {
        if (elem.className === 'dropdown-mobile-container dropdown-toggle-header') {
            elem.className = 'dropdown-mobile-container';
            return;
        }
        toggleDropdownMobileHeader.forEach(element => element.className = 'dropdown-mobile-container');
        elem.className = 'dropdown-mobile-container dropdown-toggle-header';
    }, false);
});
dropdownHeader.forEach(elem => {
    elem.addEventListener('mouseover', () => {
        dropDownToggleElement = elem;
        elem.classList.add('toggle-dropdown');
    });
    elem.addEventListener('mouseout', removeDropdown)
});
function removeDropdown() {
    dropDownToggleElement.classList.remove('toggle-dropdown');
}

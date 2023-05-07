const popupButton = document.querySelector('.popup_menu_buton');
const popupWrapper = document.querySelector('.popup_menu');
const popupMenu = document.querySelector ('.popup_menu_list');

popupButton.addEventListener('click',handleMenu);

function handleMenu (evt) {
    evt.preventDefault();
    loginPopUp.classList.toggle ('handleMenu');
  };
  
function handleMenu() {
    popupMenu.classList.toggle('hide_popup');
}

document.addEventListener('click', hidePopup);

function hidePopup(el) {

    let targetInside = popupWrapper.contains(el.target);

    if (!targetInside) {
        popupMenu.classList.add('hide_popup');
    }
    else {
        return;
    }
} 


(()=>{"use strict";function e(e){e.target.classList.toggle("card__like-button_is-active")}function t(e,t,n,r){var o=document.querySelector("#card-template").content.querySelector(".places__item").cloneNode(!0),c=o.querySelector(".card__image"),i=o.querySelector(".card__title");return c.src=e.link,c.alt=e.name,i.textContent=e.name,o.querySelector(".card__delete-button").addEventListener("click",(function(e){n(o)})),c.addEventListener("click",(function(e){r(c)})),o.querySelector(".card__like-button").addEventListener("click",t),o}function n(e){e.remove()}function r(e){e.currentTarget===e.target&&c(document.querySelector(".popup_is-opened"))}function o(e){"Escape"===e.key&&c(document.querySelector(".popup_is-opened"))}function c(e){e.classList.remove("popup_is-opened"),window.removeEventListener("keyup",o),e.removeEventListener("click",r)}function i(e){e.classList.add("popup_is-opened"),window.addEventListener("keyup",o),e.addEventListener("click",r)}document.querySelector(".content").querySelector(".places__list");var l=document.querySelector(".content"),p=l.querySelector(".places__list");[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}].forEach((function(r){var o=t(r,e,n,b);p.append(o)}));var a=l.querySelector(".profile__info"),s=a.querySelector(".profile__title"),u=a.querySelector(".profile__description"),d=l.querySelector(".profile__edit-button"),_=document.querySelector(".popup_type_edit"),m=_.querySelector(".popup__close"),v=document.forms["edit-profile"],y=v.elements.profile__title,f=v.elements.profile__description;d.addEventListener("click",(function(e){i(_),y.value=s.textContent,f.value=u.textContent})),v.addEventListener("submit",(function(e){e.preventDefault(),s.textContent=y.value,u.textContent=f.value,c(_)})),m.addEventListener("click",(function(e){c(_)}));var k=l.querySelector(".profile__add-button"),q=document.querySelector(".popup_type_new-card"),S=q.querySelector(".popup__close"),L=document.forms["new-place"],E=L.elements["place-name"],g=L.elements.link,x={name:"",link:""};k.addEventListener("click",(function(e){i(q)})),S.addEventListener("click",(function(e){c(q)})),L.addEventListener("submit",(function(r){r.preventDefault(),x.name=E.value,x.link=g.value;var o=t(x,e,n,b);p.prepend(o),c(q),L.reset()}));var h=document.querySelector(".popup_type_image");function b(e){var t=h.querySelector(".popup__image"),n=h.querySelector(".popup__caption");t.src=e.src,t.alt=e.alt,n.textContent=e.alt,i(h)}h.querySelector(".popup__close").addEventListener("click",(function(e){c(h)}))})();
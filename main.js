(()=>{"use strict";function e(e){e.target.classList.toggle("card__like-button_is-active")}function t(e,t,n,r){var o=document.querySelector("#card-template").content.querySelector(".places__item").cloneNode(!0),c=o.querySelector(".card__image"),i=o.querySelector(".card__title");return c.src=e.link,c.alt=e.name,i.textContent=e.name,o.querySelector(".card__delete-button").addEventListener("click",(function(e){n(o)})),c.addEventListener("click",(function(e){r(c)})),o.querySelector(".card__like-button").addEventListener("click",t),o}function n(e){e.remove()}document.querySelector(".content").querySelector(".places__list");var r=function(e,t){t.classList.remove("popup__input_error"),e.querySelector(".".concat(t.id,"-error")).textContent=""};var o=function(e,t){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?t.classList.remove("popup__button_inactive"):t.classList.add("popup__button_inactive")};function c(e){e.currentTarget===e.target&&u(document.querySelector(".popup_is-opened"))}function i(e){"Escape"===e.key&&u(document.querySelector(".popup_is-opened"))}function u(e){e.classList.remove("popup_is-opened"),window.removeEventListener("keyup",i),e.removeEventListener("click",c),null!=e.querySelector(".popup__form")&&function(e){var t=e.querySelector(".popup__form");Array.from(t.querySelectorAll(".popup__input")).forEach((function(e){r(t,e)}))}(e)}function l(e){e.classList.add("popup_is-opened"),window.addEventListener("keyup",i),e.addEventListener("click",c)}var p=document.querySelector(".content"),a=p.querySelector(".places__list");[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}].forEach((function(r){var o=t(r,e,n,j);a.append(o)}));var s=p.querySelector(".profile__info"),d=s.querySelector(".profile__title"),_=s.querySelector(".profile__description"),f=p.querySelector(".profile__edit-button"),m=document.querySelector(".popup_type_edit"),v=m.querySelector(".popup__close"),y=document.forms["edit-profile"],k=y.elements.profile__title,q=y.elements.profile__description;k.value=d.textContent,q.value=_.textContent,f.addEventListener("click",(function(e){l(m),k.value=d.textContent,q.value=_.textContent})),y.addEventListener("submit",(function(e){e.preventDefault(),d.textContent=k.value,_.textContent=q.value,u(m)})),v.addEventListener("click",(function(e){u(m)}));var S=p.querySelector(".profile__add-button"),g=document.querySelector(".popup_type_new-card"),L=g.querySelector(".popup__close"),E=document.forms["new-place"],b=E.elements["place-name"],x=E.elements.link,h={name:"",link:""};S.addEventListener("click",(function(e){l(g)})),L.addEventListener("click",(function(e){u(g)})),E.addEventListener("submit",(function(r){r.preventDefault(),h.name=b.value,h.link=x.value;var o=t(h,e,n,j);a.prepend(o),u(g),E.reset()}));var C=document.querySelector(".popup_type_image");function j(e){var t=C.querySelector(".popup__image"),n=C.querySelector(".popup__caption");t.src=e.src,t.alt=e.alt,n.textContent=e.alt,l(C)}C.querySelector(".popup__close").addEventListener("click",(function(e){u(C)}));var w=document.querySelector(".profile__image"),A=document.querySelector(".popup_type_profile-image-edit"),D=A.querySelector(".popup__close"),I=document.forms["edit-profile-image"],z=I.elements["link-to-image"];w.addEventListener("click",(function(e){var t;l(A),z.value=(t=w.style.backgroundImage).substring(5,t.length-2)})),D.addEventListener("click",(function(e){u(A)})),I.addEventListener("submit",(function(e){e.preventDefault(),w.style.backgroundImage="url("+z.value+")",u(A)})),Array.from(document.querySelectorAll(".popup__form")).forEach((function(e){e.addEventListener("submit",(function(e){e.preventDefault()})),function(e){var t=Array.from(e.querySelectorAll(".popup__input")),n=e.querySelector(".popup__button");o(t,n),t.forEach((function(c){c.addEventListener("input",(function(){!function(e,t){t.validity.valid?r(e,t):function(e,t){t.classList.add("popup__input_error"),e.querySelector(".".concat(t.id,"-error")).textContent=t.validationMessage}(e,t)}(e,c),o(t,n)}))}))}(e)}))})();
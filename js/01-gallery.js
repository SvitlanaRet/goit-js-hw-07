import { galleryItems } from './gallery-items.js';
// Change code below this line
const listElement = document.querySelector(".gallery")

const renderList = galleryItems.map(({ preview, original, description }) => `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`).join("");

const handleListClick = (event) => {
    event.preventDefault()
    if (event.currentTarget === event.target) {
        return;
    }

    const instance = basicLightbox.create(`
    <div class="modal">
        <img src="${event.target.dataset.source}" width="1400" height="900"/>
    </div>
`)
   
    instance.show()

    window.addEventListener("keydown", (event) => {
        if (event.code === "Escape") {
        instance.close()}
    })
}

listElement.insertAdjacentHTML("beforeend", renderList)
listElement.addEventListener('click', handleListClick)

// console.log(galleryItems);


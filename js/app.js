const $ = document
const dropdownItemCetegoryNews = $.querySelector('.dropdown-item');

const activeDropdown = (event) => {
    event.preventDefault();
    const dropdownCategoryNewsList = $.querySelector('.dropdown-category-news-list')
    dropdownCategoryNewsList.classList.toggle('active-dropdown')
}

dropdownItemCetegoryNews.addEventListener('click', activeDropdown);



let swiper = new Swiper(".mySwiper", {
    autoplay:true,
    loop:true,
    grabCursor: true,

   
});
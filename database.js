const dat2 = [
    {"href": "#", "img": "/images/asian.jfif", "h3": "Asian", "p":"lorem lorem"},
    {"href": "#", "img": "/images/desert.jfif", "h3": "Deserts", "p":"ipsum ipsum"},
    {"href": "#", "img": "/images/drinks.jpg", "h3": "Drinks", "p":"dolor dolor"},
    {"href": "#", "img": "/images/meat.jfif", "h3": "Meat", "p":"emmet emmet"},
    {"href": "#", "img": "/images/pasta.png", "h3": "Pasta", "p":"lorem ipsum"},
    {"href": "#", "img": "/image/soup.jfif", "Soup": "Soup", "p":"dolor emmet"},
]

const mapping = [document.querySelectorAll('.gallery-link')].dat2.map(item => {
    <a href="#" class="gallery-link" title="Order Now">
        <img src={item.img}  class="food-img"/>
        <h3 class="food-name">{item.h3}</h3>
        <p class="food-description">{item.p}</p>
    </a>
});

const map2 = document.querySelector('.gallery')
for (document.querySelector('.gallery-link') in (".gallery")){
const mapResult = dat2.map(item => {
        <a href="#" class="gallery-link" title="Order Now">
        <img src={item.img}  class="food-img"/>
        <h3 class="food-name">{item.h3}</h3>
        <p class="food-description">{item.p}
    </p>
</a>
return mapResult;
})};

const map3 = [...document.querySelectorAll('gallery-link')].map(item => item.value)
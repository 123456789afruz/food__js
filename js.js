const cards = [{
    btn: 'cooking',
    img: 'https://www.andy-cooks.com/cdn/shop/articles/20231220022227-andy-20cooks-20-20caprese-20salad.jpg?v=1703665139',
    name: 'Simplest Salad Recipe ever',
    discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error accusamus ipsam quo?',
    time: '6 mins ago',
    comments: '39 comments'
},
{   
    btn: 'cooking',
    img: 'https://st4.depositphotos.com/13349494/19979/i/450/depositphotos_199798170-stock-photo-tempting-fast-food-diner-burgers.jpg',
    name: 'Best FastFood Ideas (Yummy)',
    discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error accusamus ipsam quo?',
    time: '10 days ago',
    comments: '0 comments'
},
{   
    btn: 'cooking',
    img: 'https://www.andy-cooks.com/cdn/shop/articles/20231220022227-andy-20cooks-20-20caprese-20salad.jpg?v=1703665139',
    name: 'Why to eat salad?',
    discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error accusamus ipsam quo?',
    time: '16 hours ago',
    comments: '9 comments'
}]

const wrapper = document.querySelector('.wrapper')
cards.map ( (card) => {
    wrapper.innerHTML += `
           <div class="card">
                <img src=${card.img} alt="">
                <h2>${card.name}</h2>
                <p>${card.discription}</p>
                <div class="info">
                <b>${card.time}</b>
                <b>${card.comments}</b>
                </div>
            </div>
    
    `
})
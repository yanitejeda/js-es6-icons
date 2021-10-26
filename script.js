const boxContainer = document.querySelector('.box-container');
console.log(boxContainer)
const iconArray = [
	{
		nome: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		nome: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		nome: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		nome: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		nome: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		nome: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		nome: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		nome: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		nome: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		nome: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		nome: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		nome: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		nome: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		nome: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		nome: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		nome: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	}
];




const cardIcon = iconArray.map((iconSingleArray) => {

//inserisco il mio html nel dom 
    boxContainer.innerHTML += ` 
    
    <div class="card-box-container">
    <div class="card-img-logo">
      <i class="${iconSingleArray.family} ${iconSingleArray.prefix + iconSingleArray.nome}"></i>
    </div>
    <div class="card-name-text">
      <div class="card-title text-center">${iconSingleArray.nome}</div>
    </div>
    </div>`


    return {
        indice: iconSingleArray,
		
    }
})
console.log(cardIcon)


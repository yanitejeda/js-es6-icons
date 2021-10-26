const boxContainer = document.querySelector('.box-container');
const formSelect = document.querySelector('.form-select');



console.log(boxContainer)
console.log(formSelect)
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

const colorIcon = {
    'animal': 'blue',
    'vegetable' : 'orange',
    'user' : 'violet'
};
console.log(colorIcon)

function groupByType (iconArray) {

    const groupByType = {};

    for (let i = 0; i < iconArray.length; i++) {
        const {type, nome} = iconArray[i];

        if (!groupByType[type]){

           groupByType[type] = [] ;
        }
        groupByType[type].push({
            'nome':nome,
            'type':type,

            color(){
                return colorIcon[type];
            }
        });

    }
    
    console.log(groupByType)
    return groupByType;
    
}

groupByType(iconArray)


const cardIcon = iconArray.map((iconSingleArray) => {

    const  {nome,family, prefix, type}= iconSingleArray

    const color = colorIcon[type];
//inserisco il mio html nel dom 
    boxContainer.innerHTML += ` 
    
    <div class="card-box-container">
    <div class="card-img-logo">
      <i class="${family} ${prefix + nome}" style="color:${color}"></i>
    </div>
    <div class="card-name-text">
      <div class="card-title text-center">${nome}</div>
    </div>
    </div>`


    return {
       
        indice: iconSingleArray,	
    }
})
console.log(cardIcon)





let btnElem = document.querySelector('.send')
let titleValue = document.querySelector('.title')
let authorValue = document.querySelector('.author')
let yearValue = document.querySelector('.year')
let modal = document.querySelector('.forModal')
let modalBtn = document.querySelector('.forModal button')
let sec2 = document.querySelector('.sec-2')
let sec1 = document.querySelector('.sec-1')
let row = document.querySelector('.RowForBook')



let arr = []

function sendValue () {
    if (titleValue.value !== '' && authorValue.value !== '') {

        let obj = {
            id : arr.length + 1,
            title : titleValue.value,
            author : authorValue.value,
            year : yearValue.value
        }
        arr.push(obj)
        AddToLOcal (arr)
        createElem (arr)
        console.log(arr);

        titleValue.value = ''
        authorValue.value = ''
        yearValue.value = ''
        
    } else {
        modal.style.top = '20%';
        sec2.style.filter = 'blur(2px)'
        sec1.style.filter = 'blur(2px)'
    }
}

function AddToLOcal (array) {
    localStorage.setItem('book' , JSON.stringify(array))
}

function createElem (array) {

    row.innerHTML = ''

    array.forEach(function (arr) {

       let parent = document.createElement('div')
       parent.setAttribute('class' , "col-12 books my-2")

       let year = document.createElement('h5')
       year.innerHTML = arr.year

       let span1 = document.createElement('span')
       span1.innerHTML = '-'

       let author = document.createElement('h5')
       author.innerHTML = arr.author

       let span2 = document.createElement('span')
       span2.innerHTML = '-'

       let title = document.createElement('h4')
       title.innerHTML = arr.title

       let number = document.createElement('h5')
       
       let span3 = document.createElement('span')
       span3.innerHTML = '-'
       number.append(span3)

       number.innerHTML = `- ${arr.id}`

       parent.append(year , span1 , author , span2 , title , number)
       row.append(parent)

    })
}


function getLocal () {
    let get = JSON.parse(localStorage.getItem('book'))
    arr = get

    if (get) {
        createElem (arr)
    } else {
        arr = []
    }
}


btnElem.addEventListener('click' , sendValue )
modalBtn.addEventListener('click' , function () {
    modal.style.top = '-80%'
    sec2.style.filter = 'blur(0px)'
    sec1.style.filter = 'blur(0px)'
})
window.addEventListener('load' , getLocal )
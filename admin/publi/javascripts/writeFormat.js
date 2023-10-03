const form = document.getElementsByTagName('form')[0];
const select = document.getElementsByTagName('select')[0];
const file = document.getElementsByTagName('input')[0]
const selectSibling = select.nextElementSibling
const btn = document.getElementById('submit')
const btn2 = document.getElementById('write')
const cancel = document.getElementsByClassName('fa-xmark')[0]
const contain = document.getElementsByClassName('contain')[0]

const fileIcon = document.getElementById('file-icon')
const fileName = document.querySelector('.file-name')
const fileSize = document.querySelector('.file-size')
const icon1 = "fa-image"
const icon2 = "fa-file"

function chooseFile(showIcon, type) {
    selectSibling.className = 'decorate'
    if (type == 'img')
    file.previousElementSibling.innerHTML = `Image format <br /> <p>*.jpeg, *.jpg, *.png</p>`
else
    file.previousElementSibling.innerHTML = `Document format <br /> <p>*.pdf, *.doc</p>`
    file.setAttribute('access', '*.jpeg, *.jpg, *.png')
    cancel.style.display = 'block'
    file.onchange = () =>{
    if (file.files.length != 0)
    {
        file.previousElementSibling.innerHTML = ``
        fileIcon.classList.add(showIcon)
        fileName.textContent = file.files.item(0).name
        fileSize.textContent = `${Math.floor(file.files.item(0).size / 1024)} KB`
    }
}
}
function tearDown() {
    selectSibling.className = 'hide-tmp'
     btn2.className = 'hide'
     btn.className = 'button'
    cancel.style.display = 'none'
    file.previousElementSibling.innerHTML = ``
    fileName.textContent = ''
    fileSize.textContent = ``
    fileIcon.classList.remove(icon1)
    fileIcon.classList.remove(icon2)
}

select.addEventListener('change', () => {
    console.log(select.value)
    tearDown()
     switch (select.value) {
        case 'img':
            chooseFile(icon1, 'img')
             break;

        case 'docx':
                chooseFile(icon2, 'docx')
             break;

        case 'txt':
           btn.className = 'hide'
           btn2.className = 'button'
           break;

         default:
             break;
     }
 })

 cancel.addEventListener('click', ()=>{
    tearDown()
    select.value = ''
})
btn.addEventListener('click', (e)=>{
    if (file.files.length == 0) {
        e.preventDefault()
    }
})
btn2.addEventListener('click', (e)=>{
	e.preventDefault()
    window.location.href = '/admin/new'
})
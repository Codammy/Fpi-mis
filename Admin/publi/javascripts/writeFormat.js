const form = document.getElementById('form')
const select = document.getElementById('select')
const file = document.getElementsByTagName('input')[0]
const hfStatus = document.getElementById('include_hf')
const textarea = document.getElementById('textarea')
const btn = document.getElementById('submit')
const cancel = document.getElementsByClassName('fa-xmark')[0]
const contain = document.getElementsByClassName('contain')[0]

select.addEventListener('change', () => {
    switch (select.value) {
        case 'img':
            select.nextElementSibling.className = 'decorate'
            file.previousElementSibling.innerHTML = `Image format <br /> <small>*.jpeg, *.jpg, *.png</small>`
            file.setAttribute('access', '*.jpeg, *.jpg, *.png')
            cancel.style.display = 'block'
            file.onchange = () =>{
            if (file.files.length != 0)
                {
                    file.previousElementSibling.className = 'hide'
                    contain.innerHTML += `<i class="fa-regular fa-image fa-2xl"></i>`
                }
                }
            break;

        case 'docx':
            select.nextElementSibling.className = 'decorate'
            file.previousElementSibling.innerHTML = `File format <br /> <small>*.pdf, *.docx</small>`
            file.setAttribute('access', '*.pdf, *.docx')
            cancel.style.display = 'block'
            file.onchange = () =>{
            if (file.files.length != 0)
            {
                file.previousElementSibling.className = 'hide'
                contain.innerHTML += 
                `<i class="fa-solid fa-file fa-2xl"></i>`
                cancel.classList.remove('hide')
            }
        }
            break;

        case 'txt':
            hfStatus.className = 'include_'
            break;

        case 'txt-img':
            hfStatus.className = 'include_'
            break;
        default:
            break;
    }
})

cancel.addEventListener('click', ()=>{
    select.nextElementSibling.className = 'hide-tmp'
    file.previousElementSibling.innerHTML = ''
    cancel.style.display = 'none'
})
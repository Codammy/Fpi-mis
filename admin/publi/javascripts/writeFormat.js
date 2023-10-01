const form = document.getElementById('form')
const select = document.getElementById('select')
const file = document.getElementsByTagName('input')[0]
const hfStatus = document.getElementById('include_hf')
//const textarea = document.getElementById('textarea')
const btn = document.getElementById('submit')
const btn2 = document.getElementById('write')
const cancel = document.getElementsByClassName('fa-xmark')[0]
const contain = document.getElementsByClassName('contain')[0]

select.addEventListener('change', () => {
    switch (select.value) {
        case 'img':
            hfStatus.className = 'hide'
            btn.className = 'button'
            btn2.className = 'hide'
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
            hfStatus.className = 'hide'
            btn.className = 'button'
            btn2.className = 'hide'
            select.nextElementSibling.className = 'decorate'
            file.previousElementSibling.innerHTML = `File format <br /> <small>*.pdf, *.docx</small>`
            file.setAttribute('access', '*.pdf, *.docx')
            cancel.style.display = 'block'
            file.onchange = () =>{
            if (file.files.length != 0)
            {
                file.previousElementSibling.className = 'hide'
                contain.innerHTML += 
                `<i class="fa-solid fa-file fa-2xl"></i>
		<small>${file.files.name}</small>`
                cancel.classList.remove('hide')
            }
        }
            break;

        case 'txt':
            hfStatus.className = 'include_'
            btn.className = 'hide'
            btn2.className = 'button'
            break;

        case 'txt-img':
            hfStatus.className = 'include_'
            hfStatus.style.opacity = '.7'
            hfStatus.children[1].setAttribute('disabled', 'true');
            hfStatus.children[3].setAttribute('disabled', 'true');
            btn.setAttribute('disabled', 'true');
            hfStatus.innerHTML += `<p style='color: red;'><i> ---not functional---</i></p>`
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
btn2.addEventListener('click', (e)=>{
	e.preventDefault()
    window.location.href = '/admin/new'
   // console.log(writeMode);
    //writeMode.className = 'write'
    //writing()
})
/*function writing() {
    const title = document.getElementsByClassName('title')[0]
    const body = document.getElementsByTagName('textarea')[0]
    //const send = document.getElementById('send')
    console.log(title, body);
    writeMode.firstElementChild.className = ''
    title.className = 'title'
    body.className = 'body'
    //send.className = 'button'
}*/

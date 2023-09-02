const bell = document.getElementsByClassName("fa-bell")[0];
const black = document.createElement("aside");
const cancel = document.createElement("i");
black.setAttribute('class', 'ntc')
cancel.setAttribute('class', 'fa-solid fa-xmark')

function displayNotifications(len) {

    function notifications(ln) {
        document.body.append(black);
        document.body.append(cancel);
        const contain = document.createElement('article');
        const clearAll = document.createElement("p");
        const viewAll = document.createElement("a");
        viewAll.setAttribute('href', '#')
        black.appendChild(contain)
        contain.classList += 'drop-down-notification'

        viewAll.textContent = 'View all'
        clearAll.textContent = 'Clear all'
        viewAll.classList += 'view-clear view'
        clearAll.classList += 'view-clear clear'
        contain.append(clearAll)
        contain.append(viewAll)

        console.log(contain);
        while (ln > 0) {
            const eachN = document.createElement("section");
            contain.appendChild(eachN);
            eachN.classList += 'eachN'
            const text = document.createElement("p");
            text.innerText = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem enim consequatur quibusdam at autem adipisci fugit deleniti repellendus repudiandae nomoi..."
            text.classList += 'text'
            eachN.appendChild(text);
            ln--;
        }
        function removeElements() {
            let x = contain.lastElementChild
            while (x) {
                x.remove()
                x = contain.lastElementChild
            }
            contain.remove()
            cancel.remove()
            black.remove()
        }
        cancel.addEventListener('click', () => removeElements())
    }
    notifications(len)
}
bell.addEventListener('click', () => displayNotifications(5))
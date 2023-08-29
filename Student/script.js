const bell = document.getElementsByClassName("fa-bell")[0];

const black = document.createElement("aside");

function displayNotifications(len) {
    notifications(len)

    function notifications(ln) {
        black.className = 'blur'
        black.style.position = 'fixed'
        black.style.top = '0'
        black.style.height = '100%'
        black.style.width = '100%'
        black.style.backgroundColor = 'rgba(0, 0, 0, .4)'
        document.body.append(black);
    
        const contain = document.createElement('article');
        black.appendChild(contain)
        contain.style.background = "white"
        contain.style.width = "fit-content"
        contain.style.margin = "50px auto"
        contain.style.borderRadius = "5px"
        contain.style.display = "flex"
        contain.style.flexDirection = "column"
        contain.style.justifyContent = "center"
        contain.style.alignItems = "center"

        while (ln > 0) {
            const eachN = document.createElement("section");
            contain.appendChild(eachN);
            eachN.style.background = "#f0e260"
            eachN.style.borderRadius = "5px"
            eachN.style.width = "75vw"
            eachN.style.height = "fit-content"
            eachN.style.padding = "6px"
            eachN.style.margin = "10px"
            const text = document.createElement("p");
            text.innerText = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem enim consequatur quibusdam at autem adipisci fugit deleniti repellendus repudiandae nostrum..."
            text.style.fontSize = "14px"
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
            black.remove()
        }
        black.addEventListener('click', () => removeElements())
    }
}
bell.addEventListener('click', () => displayNotifications(5))
window.onload = function () {
    let selectionsArr = [...$('.selection-card')]
    //attach event handlers to every selection card


    for (let elem of selectionsArr) {
        elem.addEventListener('click', (e) => {
            let inputs = [...e.currentTarget.parentNode.querySelectorAll('input')]
            console.log(inputs)
            for (let inputElem of inputs) {
                inputElem.removeAttribute('checked')
            }
            e.currentTarget.querySelector('input').setAttribute('checked',true)
        })
    }
}
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
            let pageName = e.currentTarget.querySelector('input').value
            $('iframe')[0].setAttribute('src', pageName )
            $('.card-wrapper')[0].classList.add('collapsed')
        })
    }
    //attach event handler to show/hide
    
    $('.show-page-list')[0].addEventListener('click', (e) => {
        let btn = e.currentTarget
            if( !btn.getAttribute('active') ) {
                btn.setAttribute("active", true)
                $('.card-wrapper')[0].classList.add('collapsed')
            }else{
                 btn.removeAttribute("active")
                $('.card-wrapper')[0].classList.remove('collapsed')
               


            }

        }
    )


}
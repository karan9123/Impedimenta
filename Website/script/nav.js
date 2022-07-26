const toggleButton = document.getElementsByClassName('toggle-button')[0]
const bars = document.getElementsByClassName('bar')
const toggleMedia = document.getElementsByClassName('media-small')[0]

toggleButton.addEventListener('click', () => {
    toggleMedia.classList.toggle('active')

    for(let i = 0; i < bars.length; i++)
    {
        bars[i].classList.toggle('active')
    }
})
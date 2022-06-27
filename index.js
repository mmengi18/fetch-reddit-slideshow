 const container = document.querySelector("#container")
 const searchButton = document.querySelector("search-btn")
 const form = document.querySelector('#form')

const array = []
 const onShowSlideShowSuccess = (api) => {
     for (let i = 0; i < 3; i++) {
         array[i] = api.data.children[i].data.url
         
     }
     for (let i = 0; i < 5; i++) {
        document.getElementById(`photo-${i+1}`).src = array[i]
         
     }

       console.log("on success")
 }

 
 const onShowSlideshowFailure = () => {
    console.log('on failure')
}





// seeAllSlideshow.addEventListener('click', () => {
    //     container.style.display = 'none'
    // })
    
    form.addEventListener('submit', (event) => {
        event.preventDefault()
        const searchItems = input.value
        console.log(searchItems)
        fetch(`http://www.reddit.com/search.json?q=${searchItems}+nsfw:no+type:image`)
        .then(res => res.json())
        .then(onShowSlideShowSuccess)
        .catch(onShowSlideshowFailure)
        
        
    })
    
    
    
    
    // const showSlideshow = (event) => {
    //     const slideURL = event.target.getAttribute('data-url')
    //     fetch(slideURL)
    //         .then(res => res.json())
    //         .then(onSlideshowSuccess)
    //         .catch(onShowSlideshowFailure)
    // }
    
    
    
    // const onGetSlideshowSuccess = (slideArray) => {
    //     slideArray.results.forEach(slideshow => {
    //         const slideBox = document.createElement('div')
    //         slideBox.classList.add('slideshow-')
    //         slideBox.innerText = slideshow.name
    //         slideBox.setAttribute('data-url', slideshow.url)
    //          slideBox.addEventListener('click', showSlideshow)
    //         // append all divs to the container
    //         container.appendChild(slideBox)
    //     })
    
    // }
// document.addEventListener('DOMContentLoaded', () => {
//     fetch('http://www.reddit.com/search.json?q=cats+nsfw:no+type:image')
    
//         .then(res => res.json())
//         console.log(res)
//         .then(onGetSlideshowSuccess)
//         .catch(onGetSlideshowFailure)
// })
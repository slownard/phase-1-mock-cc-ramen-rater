// write code

// {
//     "id": 1,
//     "name": "Shoyu Ramen",
//     "restaurant": "Nonono",
//     "image": "./assets/ramen/shoyu.jpg",
//     "rating": 7,
//     "comment": "Delish. Can't go wrong with a classic!"
//   },


const ramenUrl = "http://localhost:3000/ramens"

document.addEventListener("DOMContentLoaded", () => {

    // When the page loads, request the data from the server to get all the ramen objects.
    fetch(ramenUrl)
        .then(res => res.json())
        .then(data => renderRamens(data))

    const menu = document.querySelector('#ramen-menu')
    const details = document.querySelector("#ramen-detail")
    const centerImage = document.querySelector(".detail-image")
    const ramenName = document.querySelector(".name")
    const ramenRestaurant = document.querySelector(".restaurant")
    const rating = document.querySelector("#rating-display")
    const comment = document.querySelector("#comment-display")
    const form = document.querySelector("#new-ramen")


    function renderRamens(ramenArray) {
        ramenArray.forEach((ramen) => {

            // Then, display the image for each of the ramen using an img tag inside the #ramen-menu div.
            const ramenImage = document.createElement("img");
            ramenImage.src = ramen.image

            // See all ramen images in the div with the id of ramen-menu.
            menu.append(ramenImage);

            // Click on an image from the #ramen-menu div 
            ramenImage.addEventListener("click", () => {

                // and see all the info about that ramen displayed inside the #ramen-detail div 
                ramenName.textContent = ramen.name
                ramenRestaurant.textContent = ramen.ramenRestaurant

                // and where it says insert comment here and insert rating here.
                rating.textContent = ramen.rating
                comment.textContent = ramen.comment


                centerImage.src = ramen.image
                details.append(ramenName, ramenRestaurant)

                // Create a new ramen after submitting the new-ramen form. 
                // form.addEventListener("submit", (e) => {

                //     e.preventDefault()

                //     const newImage = document.createElement("img")
                //     newImage.src = e.target["new-image"].value

                //     // The new ramen should be added to the#ramen-menu div.
                //     menu.append(newImage);
                //     //form.reset()

                // })
            })
        })
    }
    form.addEventListener("submit", (e) => {

        e.preventDefault()

        const newImage = document.createElement("img")
        newImage.src = e.target["new-image"].value

        // The new ramen should be added to the#ramen-menu div.
        menu.append(newImage);
        // form.reset()

    })
    form.reset()
})






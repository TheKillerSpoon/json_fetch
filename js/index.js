const app = {}

app.init = async () => {

    // variabler, som vi har de pakket HTML-elementer vi skal bruge, ned i
    let postContainer = document.querySelector('.post-container')
    let btnGrid = document.querySelector('.btnGrid')
    let btnList = document.querySelector('.btnList')


    // Template functions - hver function opfører sig som en HTML template. 

    const postTmplGrid = (post) => 

        `
        <p><b>${post.author}</b></p>
        <p><i>${post.date}</i></p>
        <p>${post.post}</p>
        <p>GITTERVISNING</p>
        <br>
        `;


    const postTmplList = (post) => 

    `
    <p><b>${post.author}</b></p>
    <p><i>${post.date}</i></p>
    <p>${post.post}</p>
    <p>LISTEVISNING</p>
    <br>
    `;


    
    // Function der henter vores data
    async function fetchPosts() {
        try {
            const response = await fetch('./data/posts.json');
            const posts = await response.json();
            

            return posts;

        } catch (error) {
            console.error('Error fetching or parsing data:', error);
        }
    }


    // Vores array med brugere
    let posts = await fetchPosts(); 



    function renderPosts(){

        // udskriver listen af brugere
        posts.forEach((post) => {
            postContainer.insertAdjacentHTML('beforeend', postTmplGrid(post));
        });



        // ændrer visning alt efter hvilken knap der trykkes på

        btnGrid.addEventListener('click', () => {
            postContainer.innerHTML = "";
            posts.forEach((post) => {
                    postContainer.insertAdjacentHTML('beforeend', postTmplGrid(post));
                });

        })

        btnList.addEventListener('click', () => {
            postContainer.innerHTML = "";
            posts.forEach((post) => {
                    postContainer.insertAdjacentHTML('beforeend', postTmplList(post));
                });

        })
        
    }

    renderPosts()

}


app.init()
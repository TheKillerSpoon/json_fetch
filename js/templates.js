// Template functions - hver function opfører sig som en HTML template.

export const postTmplList = (post) =>
  `
        <p><b>${post.author}</b></p>
        <p><i>${post.date}</i></p>
        <p>${post.post}</p>
        <p>LISTEVISNING</p>
        <br>
    `;

export const postTmplGrid = (post) =>
  `
        <p><b>${post.author}</b></p>
        <p><i>${post.date}</i></p>
        <p>${post.post}</p>
        <p>GITTERVISNING</p>
        <br>
    `;

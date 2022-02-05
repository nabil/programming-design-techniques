const getAuthors = function (node) {
  const result = [];
  const author = node.getAttribute('author')
  const email = node.getAttribute('email')
  const bio = node.getAttribute(`authorbio`)
  result.push({ name: author, email: email, bio: bio })
  return result;
}

const renderAuthors = function (node) {
  const authors = getAuthors(node)
  return authors.map(author => {
    return `<div class="author">
              <div class="author-avatar"><img src="./styles/assets/avatar.jpg"/></div>
              <div class="author-name"><a href="${author.email}">@${author.name}</a></div>
              <div class="author-bio">${author.bio}</div>
            </div>
          `;
  }).join('\n')
}


module.exports = {
  paragraph: (node) => `<p class="${node.getRoles().join(' ')}">${node.getContent()}</p>`,
  document: (node) => `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<link href="./styles/assets/style.css" rel="stylesheet">
</head>
<body>
<header>
  <h1>${node.getAttribute(`supertitle`)}</h1>
</header>
<section class="content">
${node.getContent()}
<div class="sect1 authors">
${renderAuthors(node)}
</div>
</section>
</body>`
}

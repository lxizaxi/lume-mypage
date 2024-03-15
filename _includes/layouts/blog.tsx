interface BlogPageData extends Lume.Data {
    title: string
  }
  export default (
    { title, children }: BlogPageData
  ) => (
    <html lang="ja">
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{title}</title>
      <link rel="stylesheet" href="/css/style.css" />
      <link href="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/themes/prism.min.css" rel="stylesheet" />
    </head>
    <body>
    <header>
      <h1><a href="/">lxizaxi's home</a></h1>
    </header>
  
    <main>
      <article>
        {children}
      </article>
    </main>
  
    <footer>
        <p>&copy; 2021 - 2024 lxizaxi</p>
    </footer>
    </body>
    </html>
  )
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
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
    </head>
    <body>
    <header>
      <h1>
        <a href="/" style={{ "text-decoration": "none" }}>
          <font color="snow">lxizaxi's home</font>
        </a>
      </h1>
    </header>

    <nav class="navbar bg-body-tertiary">
      <form class="container-fluid justify-content-start">
        <a href="/"><button class="btn btn-outline-success me-2" type="button">Home</button></a>
        <a href="/certifications"><button class="btn btn-outline-success me-2" type="button">Certifications</button></a>
        <a href="/history"><button class="btn btn-outline-success me-2" type="button">History</button></a>
      </form>
    </nav>

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
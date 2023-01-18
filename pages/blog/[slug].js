import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import marked from 'marked'
import Head from 'next/head'
import Footer from '../../components/Footer'
import CommentsSection from '../../components/CommentsSection'

export default function PostPage({
  frontmatter: { title, date, cover_image, excerpt },
  slug,
  content,
}) {
  return (
    <>
      <Head>
       <title>{title}</title>

       {/* Primary Meta Tags */}
       <meta name="title" content={title}/>
       <meta name="description" content={excerpt}/>

       {/* Open Graph / Facebook */}
       <meta property="og:type" content="website"/>
       <meta property="og:url" content={"https://www.devador.com.br/blog/"+slug}/>
       <meta property="og:title" content={title}/>
       <meta property="og:description" content={excerpt}/>
       <meta property="og:image" content={'https://www.devador.com.br'+cover_image}/>

        {/* Twitter */}
       <meta property="twitter:card" content="summary_large_image"/>
       <meta property="twitter:url" content={"https://www.devador.com.br/blog/"+slug}/>
       <meta property="twitter:title" content={title}/>
       <meta property="twitter:description" content={excerpt}/>
       <meta property="twitter:image" content={'https://www.devador.com.br'+cover_image}/>
      </Head>

      <div className='card-blog mb3'>
        <div className='p3'>
          <h1 className='post-title'>{title}</h1>
          <div className='post-date'>Postado em {date}</div>
          <div style={{justifyContent:'center', alignItems:'center', display:'flex'}}>
            <img src={cover_image} alt='' className="cover-image"/>
          </div>
          <div className='post-body'>
            <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
          </div>
          <CommentsSection identifier={slug} title={title} />
        </div>
        <Footer />
      </div>
    </>
  )
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'))

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join('posts', slug + '.md'),
    'utf-8'
  )

  const { data: frontmatter, content, excerpt } = matter(markdownWithMeta)

  return {
    props: {
      frontmatter,
      slug,
      content
    },
  }
}

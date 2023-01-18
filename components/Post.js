/* eslint-disable @next/next/link-passhref */
import Link from 'next/link'

export default function Post({ post }) {

  const limitTextWords = ( text, quantity) => 
    text.split(' ').length > quantity ? 
      text.split(' ').splice(0, quantity).join(' ') + ' ...' :
      text.split(' ').splice(0, quantity).join(' ')

  const formatDate = (date) => date.split('-').reverse().join('/')

  return (
    <Link href={`/blog/${post.slug}`}>
      <div className='card display-cursor'>
        <img src={post.frontmatter.cover_image} alt='' style={{cursor:'pointer'}} />
        <div style={{textAlign: 'left'}} className='display-cursor card-content'>
            <h3>{post.frontmatter.title}</h3>
            <p className='post-description'>
              { limitTextWords(post.frontmatter.excerpt, 15) }
            </p>          
        </div>
        <div className='post-date'>Criado em { formatDate(post.frontmatter.date) }</div>
      </div>
    </Link>
  )
}

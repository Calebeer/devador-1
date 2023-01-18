import Link from 'next/link'
import Head from 'next/head'
import { Typewriter } from 'react-simple-typewriter'

export default function Header() {
  return (
    <header>
      <div className='container'>
        <Link href='/' passHref>
          <h2 style={{cursor:'pointer', fontWeight: 'bold'}}>
            👨‍💻 <Typewriter 
              words={[
                '< _devador.com.br />',
                '<Programação />',
                '<Javascript />',
                '<Php />',
                '<Python />',
                '<NodeJs />',
                '< _devador.com.br />',
              ]} 
              cursor cursorStyle="|"
            />
          </h2>
        </Link>
      </div>
    </header>
  )
}

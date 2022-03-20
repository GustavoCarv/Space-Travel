import type { NextPage } from 'next'
import Link from 'next/link'


const Home: NextPage = () => {
  return (
    <div>
      
      Olá
      <button>
        <Link href="/design-system">
          <a>Design system</a>
         </Link>  
      </button>
    </div>
  )
}

export default Home

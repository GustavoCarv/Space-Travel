import type { NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'


const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Frontend Mentor | Space tourism website</title>
      </Head>  

  00 Home
  01 Destination
  02 Crew
  03 Technology

  So, you want to travel to
  Space
  Let’s face it; if you want to go to space, you might as well genuinely go to 
  outer space and not hover kind of on the edge of it. Well sit back, and relax 
  because we’ll give you a truly out of this world experience!

  Explore

      <button>
        <Link href="/design-system">
          <a>Design system</a>
         </Link>  
      </button>
    </div>
  )
}

export default Home

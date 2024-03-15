import Layout from '@/components/layout'
import { Main, Title } from '@/components/ui'
import Link from 'next/link'

import utils from '@/utils/utils'

export default function Home() {
  return (
    <Layout>
      <Main className='flex flex-col p-4'>
        <div className='flex flex-grow flex-col items-center justify-center space-y-4'>
          <Title>home</Title>
          <ul className='space-y-4'>
            {utils.map(util => (
              <li key={util}>
                <Link
                  href={`/utils/${util}`}
                  className='text-cb-pink hover:text-cb-pink/75'
                >
                  {util}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Main>
    </Layout>
  )
}

import { Main, Title } from '@bacondotbuild/ui'

import Layout from '@/components/layout'

export default function Home() {
  return (
    <Layout>
      <Main className='flex flex-col p-4'>
        <div className='flex flex-grow flex-col items-center justify-center space-y-4'>
          <Title>home</Title>
        </div>
      </Main>
    </Layout>
  )
}

import { useRouter } from 'next/router'
import Link from 'next/link'

import { copyToClipboard } from 'lib'

import Layout from '@/components/layout'
import { Main, Title } from '@/components/ui'
import utils from '@/utils/utils'

function CopyToClipboard() {
  return (
    <button
      type='button'
      onClick={() => {
        copyToClipboard('hello world')
      }}
    >
      copy
    </button>
  )
}

function Fetcher() {
  return <div>fetcher</div>
}

function UseForm() {
  return <div>useForm</div>
}

function UseLocalStorage() {
  return <div>useLocalStorage</div>
}

function UseSearch() {
  return <div>useSearch</div>
}

const utilsToComponents: Record<string, React.FC> = {
  copyToClipboard: CopyToClipboard,
  fetcher: Fetcher,
  useForm: UseForm,
  useLocalStorage: UseLocalStorage,
  useSearch: UseSearch,
}

export default function UtilPage() {
  const {
    query: { util },
  } = useRouter()

  const currentUtil = utils.find(u => u === util)
  if (!currentUtil) {
    return <div>not found</div>
  }
  const Component = utilsToComponents[currentUtil]
  return (
    <Layout title={util as string}>
      <Main className='flex flex-col p-4'>
        <div className='flex flex-grow flex-col items-center justify-center space-y-4'>
          <Title>{util}</Title>
          {Component && <Component />}
          <ul className='space-y-4'>
            {utils.map(u => (
              <li key={u}>
                {u === util ? (
                  <span>{u}</span>
                ) : (
                  <Link
                    href={`/utils/${u}`}
                    className='text-cb-pink hover:text-cb-pink/75'
                  >
                    {u}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </Main>
    </Layout>
  )
}

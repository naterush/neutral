import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const [email, setEmail] = useState('');

  return (
    <div className={styles.container}>
      <Head>
        <title>Neutral</title>
        <meta name="description" content="Offset your travel carbon emissions." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='w-3/5 m-auto'>
        <header className='flex flex-row justify-between'>
          <div className='bg-black text-white underline py-[.25rem] px-[2rem]'>
            <p>
              Neutral
            </p>
          </div>
          <div className='flex flex-row justify-between'>
            <Link href='https://github.com/naterush/neutral'>
              <p className='hover:underline'>
                Github
              </p>
            </Link>
          </div>
        </header>

        <main className='flex flex-col align-center justify-center'>

          <div className='w-full flex flex-row justify-between pt-[15vh]'>
            <div className='flex flex-col align-start'>
              <div className='text-4xl'>
                See the world.  Don't destroy it.
              </div>
              <div className='text-xl'>
                Offset your carbon footprint when you travel, automatically.
              </div>
            </div>
            <div>
              <Image src="/Icon.svg" alt="A Globe" layout='fixed' height={100} width={100}/>
            </div>
          </div>


          <form 
            className='w-full justify-start'
            onSubmit={(e) => {
              e.preventDefault();
              console.log("Email!", email);
            }}
          >
            <input 
              className={styles.cta_inputs + " h-[3rem] pl-2 mr-5"}
              value={email} 
              onChange={(e) => {setEmail(e.target.value)}} 
              placeholder='email@gmail.com'
              tabIndex={0}
            />
            <button 
              className={styles.cta_inputs + " bg-black text-white h-[3rem] px-2"}
              type='submit'
              tabIndex={0}
            >
              Get Notified on Launch
            </button>
          </form>


          <div className='flex flex-row flex-wrap justify-between mt-10'>
            <div className={styles.card_container}>
              <div className={styles.card_header}>
                What you do
              </div>
              <div className={styles.card_contents}>
                <div>
                  <div>
                    {}
                  </div>
                  <div>
                    Travel the world
                  </div>
                </div>
                <div>
                  <div>
                    {}
                  </div>
                  <div>
                    Forward `go@neutral.fund` email receipts
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.card_container}>
              <div className={styles.card_header}>
                What we do
              </div>
              <div className={styles.card_contents}>
                <div>
                  <div>
                    {}
                  </div>
                  <div>
                    Calculate your emissions from your receipts
                  </div>
                </div>
                <div>
                  <div>
                    {}
                  </div>
                  <div>
                    Charge you monthly for your emissions
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Home

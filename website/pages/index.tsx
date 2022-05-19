import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const [email, setEmail] = useState('');
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmailSubmitted(true);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Neutral</title>
        <meta name="description" content="Offset your travel carbon emissions." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='max-w-screen-lg m-auto'>
        <header className='flex flex-row justify-between mx-[5vw] lg:m-0'>
          <div className='bg-black text-white underline py-[.5rem] px-[2.5rem] text-xl'>
            <p>
              Neutral
            </p>
          </div>
          <div className='flex flex-row justify-between'>
            <Link href='https://github.com/naterush/neutral'>
              <p className='hover:underline py-[.5rem] text-xl'>
                Github
              </p>
            </Link>
          </div>
        </header>

        <main className='flex flex-col align-middle justify-center mx-[5vw] lg:m-0'>

          <div className='w-full flex flex-row justify-center text-center md:text-left md:justify-between pt-[20vh]'>
            <div className='flex flex-col align-start'>
              <div className='text-4xl md:text-5xl lg:text-7xl'>
                See the world.  Don&apos;t destroy it.
              </div>
              <div className='text-2xl lg:text-2xl mt-[2vh]'>
                Offset your carbon footprint when you travel, automatically.
              </div>
            </div>
            <div className='hidden md:flex'>
              <Image src="/Icon.svg" alt="A Globe" layout='fixed' height={200} width={200}/>
            </div>
          </div>

          <form 
            className='flex flex-row flex-wrap w-full justify-center md:justify-start gap-4 mt-[2vh] md:mt-0'
            onSubmit={onSubmit}
          >
            <input 
              className={styles.cta_inputs + " h-16 pl-2 text-xl"}
              value={email} 
              onChange={(e) => {setEmail(e.target.value)}} 
              placeholder='email@gmail.com'
              tabIndex={0}
            />
            <button 
              className={styles.cta_inputs + " bg-black text-white h-16 px-2 text-xl"}
              type='submit'
              tabIndex={0}
            >
              Get Notified on Launch
            </button>
          </form>
          {emailSubmitted && 
            <div>
              <p className='text-l'>
                You will be notified on launch. Thanks for signing up to be Neutral!
              </p>
            </div>
          }


          <div className='flex flex-row flex-wrap justify-between align-middle pt-[10vh] gap-2'>
            <div className='m-auto border-[3px] rounded border-black bg-white w-[400px]'>
              <div className='bg-white border-b-[3px] border-black h-10  py-7 pl-10 flex flex-col justify-center bg-pink-400'>
                <p className='text-xl'>
                  What you do
                </p>
              </div>
              <div className='flex flex-col py-7 pl-10'>
                <div className='flex flex-row'>
                  <div className='pt-1'>
                    <Image src="/Telegram.svg" alt="A Globe" layout='fixed' height={20} width={20}/>
                  </div>
                  <div className='pl-3 text-xl'>
                    Travel the world
                  </div>
                </div>
                <div className='flex flex-row pt-5'>
                  <div className='pt-1'>
                    <Image src="/Gmail.svg" alt="A Globe" layout='fixed' height={20} width={20}/>
                  </div>
                  <div className='pl-3 text-xl'>
                    Forward `go@neutral.fund` email receipts
                  </div>
                </div>
              </div>
            </div>
            <div className='m-auto border-[3px] rounded border-black bg-white w-[400px]'>
              <div className='bg-white border-b-[3px] border-black h-10 py-7 pl-10 flex flex-col justify-center bg-purple-400 text-xl'>
                What we do
              </div>
              <div className='flex flex-col py-7 pl-10'>
                <div className='flex flex-row'>
                  <div className='pt-1'>
                    <Image src="/Current-location.svg" alt="A Globe" layout='fixed' height={20} width={20}/>
                  </div>
                  <div className='pl-3 text-xl'>
                    Calculate your emissions from receipts
                  </div>
                </div>
                <div className='flex flex-row pt-5'>
                  <div className='pt-1'>
                    <Image src="/Cloud-check.svg" alt="A Globe" layout='fixed' height={20} width={20}/>
                  </div>
                  <div className='pl-3 text-xl'>
                    Charge you monthly to offset them
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

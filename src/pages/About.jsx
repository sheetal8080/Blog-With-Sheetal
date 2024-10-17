import React from 'react'
import Layout from '../components/Layout'

export default function About() {
  return (
    <Layout>

      <div className="flex justify-between flex-col-reverse md:flex-row py-20 px-8">
          <div className="space-y-3 basis-9/12 ">
            <h1 className="text-4xl font-bold capitalize border-b-2 border-green-400">About me </h1>
            <h3 className="text-4xl font-bold capitalize">hello, i'm <span className='text-green-500'>Sheetal Tripathi</span> </h3>
            <p className="text-lg font-semibold">Introducing <span className='text-green-500'>Sheetal Tripathi,</span> a skilled web developer with a passion for crafting beautiful and functional online experiences. A master of both front-end development and WordPress, Sheetal brings a unique blend of technical expertise and creative vision to every project touches.</p>

            <button className='bg-green-500 text-white px-5 py-2 rounded-lg capitalize'>get in touch</button>
            <div className="flex space-x-2">

            </div>
            
          </div>
          <div className="flex-grow-4">
            <img loading='lazy' width={440} src="https://www.vidyard.com/wp-content/themes/vidyard-website/img/pages/company/about-us/main-image.png.webp" alt="" />
          </div>
      </div>

    </Layout>
  )
}

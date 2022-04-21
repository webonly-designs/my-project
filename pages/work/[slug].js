import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { sanityClient, urlFor } from "../../lib/Sanity";
import PortableText from "@sanity/block-content-to-react"
import Nav from "../../components/Nav"
import Contact from "../../components/Contact"
const workQuery = `
  *[_type == "works" && slug.current == $slug][0]{
    _id,
    slug,
    title,
    description,
    projectLink,
    codeLink,
    imgUrl,
    tag, 
    techImages[]{
      _key,
      asset->{url},
    }
  }
`

export default function Work({ data }) {
  const { work } = data
  return (
    <div>
      <Head>
        <title>Akshay Agarwal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main>
          <div className="max-w-6xl mx-auto p-5">
            <img 
                className="w-full object-cover rounded-lg"
                src={urlFor(work.imgUrl).url()}
                alt="img"
            />
          </div>
          <div className="max-w-3xl mx-auto p-5">
            <div className="flex justify-between items-center">
                <h2 className="font-bold text-gray-700 text-xl lg:text-3xl mb-2">{work.title}</h2>
                <p className="px-4 py-2 bg-gray-200 rounded-full inline-block text-gray-700 text-sm md:text-base">{work.tag}</p>
            </div>
            <div className="flex flex-wrap my-2 space-x-4">
                <Link href={work.projectLink}>
                    <p className="cursor-pointer text-sm md:text-base text-semibold text-white px-6 py-1 rounded-lg bg-gradient-to-r from-blue-700 to-purple-500 hover:scale-105 transition-transform duration-200 ease-in-out hover:shadow-lg">Website Link</p>
                </Link>
                <Link href={work.codeLink}>
                    <p className="cursor-pointer text-sm md:text-base text-semibold text-white px-6 py-1 rounded-lg bg-gradient-to-r from-blue-700 to-purple-500 hover:scale-105 transition-transform duration-200 ease-in-out hover:shadow-lg">GitHub Link</p>
                </Link>
            </div>
            <h3 className='font-semibold text-gray-700 mt-4 mb-1 text-lg md:text-xl'>Tech Stack 💻 </h3>
            <div className="flex space-x-2 mb-2">
                {
                  work.techImages.map(imgObj => (
                      <img 
                        key={imgObj._key}
                        className="w-7 object-cover rounded-lg"
                        src={imgObj.asset.url}
                        alt="img"
                      />
                  ))
                }
            </div>
            <div className="mt-4 mb-2">
                <h3 className='font-semibold text-gray-700 mb-1 text-lg md:text-xl'>Description 📝</h3>
                <PortableText blocks={work.description} />
            </div>
            <p>If You are looking for a similar project or have any feedback or questions please feel free to contact me by filling out the contact form ⬇️. Thanks for Visiting!! 😊</p>
          </div>
          <Contact />
      </main>

    </div>
  )
}

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(
    `*[_type == "works" && defined(slug.current)]{
      "params": {
        "slug": slug.current
      }
    }`
  );

  return {
    paths,
    fallback: true,
  };

}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const work = await sanityClient.fetch(workQuery, { slug });
  return { props: { data: { work } } };
}
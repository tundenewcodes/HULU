import Image from 'next/image'
import { ThumbUpIcon } from '@heroicons/react/outline'
import { forwardRef } from 'react'

const Thumbnail = ({ result }, ref) => {
  const BASE_URL = 'https://image.tmdb.org/t/p/original/'
  return (
    <div
      
      className='group  cursor-pointer  p-2 transition ease-in transform sm:hover:scale-105 hover:z-50'>
      <Image
        src={
          `${BASE_URL}${
            result.backdrop_path || result.poster_path
          }` || `${BASE_URL}${result.poster_path}`
        }
        height={1080}
        width={1920}
        alt='thumbnail'
        layout='responsive'
      />
      <div>
        <p className='truncate max-w-md'> {result.overview} </p>{' '}
        <h2 className='mt-1 transition-all duration-100  ease-in-out group-hover:font-bold'>
          {' '}
          {result.title || result.original_title}{' '}
        </h2>{' '}
        <p className='flex opacity-0 group-hover:opacity-100  items-center'>
          {' '}
          {result.media_type && `${result.media_type}.`}{' '}
          {result.release_date && `${result.release_date}`}{' '}
          <ThumbUpIcon className='h-12 mx-2' /> {result.vote_count}{' '}
        </p>{' '}
      </div>{' '}
    </div>
  )
}
export default Thumbnail

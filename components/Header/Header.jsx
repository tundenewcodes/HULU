import Image from 'next/image'
import React from 'react'
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from '@heroicons/react/outline'
import HeaderIcons from './HeaderIcons'

const Header = () => {
  return (
    <header  className='flex flex-col sm:flex-row m-5 items-center justify-between h-auto'>
      <div  className='flex flex-grow justify-evenly max-w-2xl '>
        <HeaderIcons title='HOME' Icon={HomeIcon} />
        <HeaderIcons title='TRENDING' Icon={LightningBoltIcon} />
        <HeaderIcons title='VERIFIED' Icon={BadgeCheckIcon} />
        <HeaderIcons title='COLLECTION' Icon={CollectionIcon} />
        <HeaderIcons title='SEARCH' Icon={SearchIcon} />
        <HeaderIcons title='ACCOUNT' Icon={UserIcon} />
      </div>
      <Image
        src='https://links.papareact.com/ua6'
        alt='logo'
        className='object-contain'
        width={200}
        height={100}
      />{' '}
    </header>
  )
}

export default Header

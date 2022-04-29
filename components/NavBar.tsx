import { Avatar, Button } from '@nextui-org/react'
import Image from 'next/image'
import { AiFillGithub, AiFillStar } from 'react-icons/ai'

const NavBar: React.FC = () => {
  return (
    <div
      className="flex justify-evenly items-center py-6"
      style={{ backdropFilter: 'saturate(180%) blur(10px)' }}
    >
      <a href="https://github.com/Jurredr" rel="noreferrer" target="_blank">
        <div className="flex justify-center items-center gap-2 cursor-pointer">
          <Avatar
            className="!cursor-pointer"
            squared
            bordered
            color="gradient"
            zoomed
            src="https://avatars.githubusercontent.com/u/62119716"
          />
          <p className="text-white noselect text-xl hidden md:block">Jurredr</p>
        </div>
      </a>
      <div className="flex justify-center items-center gap-2 sm:gap-3 cursor-pointer">
        <div className="relative h-8 w-8 sm:h-12 sm:w-12">
          <Image
            className="nextimg"
            layout="fill"
            src="/icon.svg"
            alt="Icon"
            draggable={false}
          />
        </div>
        <h1 className="text-white text-3xl sm:text-5xl mt-3 whitespace-nowrap noselect">
          GitHub Widgetbox
        </h1>
      </div>
      <a
        href="https://github.com/Jurredr/github-widgetbox/"
        rel="noreferrer"
        target="_blank"
      >
        <Button color="gradient" auto rounded>
          <div className="flex justify-center items-center">
            <AiFillGithub className="mr-2" size={24} />
            <span>(100 </span>
            <AiFillStar className="ml-[0.1rem] !text-yellow-400" />
            <span>)</span>
          </div>
        </Button>
      </a>
    </div>
  )
}

export default NavBar

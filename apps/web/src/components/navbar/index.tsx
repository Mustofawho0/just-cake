import React from 'react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Search, ShoppingCart, Menu } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className='flex justify-center w-full mt-5 mobile:px-3'>
      <div className='flex items-center justify-between xxl:px-20 lg:px-10 mobile:px-10 mobile:w-full p-4 border border-yellow-500 rounded-full w-[75vw] shadow-lg'>
        <Button
          asChild
          variant='ghost'
          className='hover:bg-transparent tracking-widest font-bold uppercase text-xl text-gray-600'
        >
          <Link href='/'>Just - Cake</Link>
        </Button>
        <div className='hidden xl:block'>
          <div className='flex gap-2'>
            <div className='w-[20vw] flex items-center gap-2 border border-yellow-400 rounded-lg px-5 text-gray-500'>
              <Search size={17} className='text-yellow-500' />
              <input
                type='text'
                placeholder='Search'
                className='w-[15vw] outline-none text-sm bg-transparent border border-transparent focus:border-b-yellow-500 rounded-sm'
              />
            </div>
            <Button
              variant='ghost'
              size='lg'
              className='hover:bg-transparent hover:text-yellow-500 tracking-wide border border-white hover:border-b-yellow-500'
            >
              Product
            </Button>
            <Button
              variant='ghost'
              className='hover:bg-transparent hover:text-yellow-500 tracking-wide border border-white hover:border-b-yellow-500'
            >
              <ShoppingCart />
            </Button>
            <Button
              variant='ghost'
              size='icon'
              className='hover:bg-transparent mr-6'
            >
              <Avatar>
                <AvatarImage src='https://github.com/shadcn.png' />
                <AvatarFallback>PF</AvatarFallback>
              </Avatar>
            </Button>
            <Button
              variant='ghost'
              className='hover:bg-transparent hover:text-yellow-500 tracking-wide border border-white hover:border-b-yellow-500'
            >
              Login
            </Button>
            <Button
              variant='ghost'
              className='hover:bg-transparent hover:text-yellow-500 tracking-wide border border-white hover:border-b-yellow-500'
            >
              Register
            </Button>
          </div>
        </div>
        <div className='block xl:hidden'>
          <div className='flex gap-2'>
            <div className='mobile:hidden sm:hidden md:block'>
              <div className='w-full flex items-center gap-2 border border-yellow-400 rounded-lg px-5 text-gray-500 h-10'>
                <Search size={17} className='text-yellow-500' />
                <input
                  type='text'
                  placeholder='Search'
                  className='w-full outline-none text-sm bg-transparent border border-transparent focus:border-b-yellow-500 rounded-sm'
                />
              </div>
            </div>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant='ghost' size={'icon'}>
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetTitle className='text-center'>
                  Welcome, Username!
                </SheetTitle>
                <div className='w-full flex items-center justify-center py-4'>
                  <Avatar className='w-20 h-20'>
                    <AvatarImage src='https://github.com/shadcn.png' />
                    <AvatarFallback>PF</AvatarFallback>
                  </Avatar>
                </div>
                <div className='border border-b-gray-500 w-full mobile:hidden sm:hidden md:block' />
                <div className='md:hidden'>
                  <div className='flex items-center gap-2 border border-yellow-400 rounded-lg px-5 text-gray-500 h-10'>
                    <Search size={17} className='text-yellow-500' />
                    <input
                      type='text'
                      placeholder='Search'
                      className='outline-none text-sm bg-transparent border border-transparent rounded-sm'
                    />
                  </div>
                </div>
                <div className='flex flex-col gap-4 pt-4'>
                  <Button
                    variant='ghost'
                    size='lg'
                    className='hover:bg-transparent hover:text-yellow-500 tracking-wide border border-white hover:border-b-yellow-500'
                  >
                    Product
                  </Button>
                  <Button
                    variant='ghost'
                    className='hover:bg-transparent hover:text-yellow-500 tracking-wide border border-white hover:border-b-yellow-500 mb-6'
                  >
                    <ShoppingCart />
                  </Button>
                  <Button
                    variant='ghost'
                    className='hover:bg-transparent hover:text-yellow-500 tracking-wide border border-white hover:border-b-yellow-500'
                  >
                    Login
                  </Button>
                  <Button
                    variant='ghost'
                    className='hover:bg-transparent hover:text-yellow-500 tracking-wide border border-white hover:border-b-yellow-500'
                  >
                    Register
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='min-h-screen w-full flex justify-center bg-[url(/76239.jpg)] bg-no-repeat bg-center bg-cover relative'>
        <div className='absolute w-full h-screen bg-black/50 flex justify-center items-center overflow-y-auto p-4'>
            <div>
              <span className='flex justify-center py-10 text-4xl font-bold text-card'>My Projects</span>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
              <Card className='flex flex-col gap-2 p-2 justify-center items-center'>
              <img className='rounded-2xl h-50' src={'Screenshot 2025-12-24 at 2.01.45 PM.png'}></img>
              <span className='text-muted-foreground'>Next.js Tailwind Api </span>
              <Link href={'https://team2-r77x.vercel.app/'}><Button>View Details</Button></Link>              
            </Card>
            <Card className='flex flex-col gap-2 p-2 justify-center items-center'>
              <img className='rounded-2xl h-50' src={'Screenshot 2025-12-24 at 2.03.56 PM.png'}></img>
              <span className='text-muted-foreground'>Next.js Tailwind Api</span>
              <Link href={'https://coffee-n1fj.vercel.app/'}><Button>View Details</Button>  </Link>
            </Card>
            <Card className='flex flex-col gap-2 p-2 justify-center items-center'>
              <img className='rounded-2xl h-50' src={'1-10.png'}></img>
              <span className='text-muted-foreground'>Figma Wireframe Prototype</span>
              <Link href={''}><Button>View Details</Button>  </Link>
            </Card>
            </div>
            </div>
        </div>
    </div>
  )
}

export default page

"use client"

import Link from 'next/link';
import React from 'react';
import { Button } from '@/components/ui/button';


export default function HeroLanding() {
  return (
<>
<div>
	<h1 className="font-bold text-xl">Find your Event</h1>
	<h2>Hello</h2>
	<p className='text-xs'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et id porro soluta! A odit nostrum rem velit quasi amet laborum aliquam rerum veritatis fugit vitae, soluta dicta molestiae reprehenderit ducimus.</p>
	<Button  variant='secondary'>Button</Button>
	<Link href='./auth/signup'>Sign Up</Link>

</div>


</>
  );
};

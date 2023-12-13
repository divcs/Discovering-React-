// // // import { Button } from './components/ui/button'
import './app/global.css'
// // const App = () => {
// //   return <div>{/* <Button className='m-5'>Click me</Button> */}</div>
// // }

// // export default App

// import { Button } from '@/components/ui/button'
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from '@/components/ui/card'
// import { Input } from '@/components/ui/input'
// import { Label } from '@/components/ui/label'
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from '@/components/ui/select'

// function App() {
//   return (
//     <>
//       <div className='flex justify-center items-center h-screen'>
//         <Card className='w-[350px] '>
//           <CardHeader>
//             <CardTitle className='text-center'>Create project</CardTitle>
//             <CardDescription>
//               Deploy your new project in one-click.
//             </CardDescription>
//           </CardHeader>
//           <CardContent>
//             <form>
//               <div className='grid w-full items-center gap-4'>
//                 <div className='flex flex-col space-y-1.5'>
//                   <Label htmlFor='name'>Name</Label>
//                   <Input id='name' placeholder='Name of your project' />
//                 </div>
//                 <div className='flex flex-col space-y-1.5'>
//                   <Label htmlFor='framework'>Framework</Label>
//                   <Select>
//                     <SelectTrigger id='framework'>
//                       <SelectValue placeholder='Select' />
//                     </SelectTrigger>
//                     <SelectContent position='popper'>
//                       <SelectItem value='next'>Next.js</SelectItem>
//                       <SelectItem value='sveltekit'>SvelteKit</SelectItem>
//                       <SelectItem value='astro'>Astro</SelectItem>
//                       <SelectItem value='nuxt'>Nuxt.js</SelectItem>
//                     </SelectContent>
//                   </Select>
//                 </div>
//               </div>
//             </form>
//           </CardContent>
//           <CardFooter className='flex justify-between'>
//             <Button variant='outline'>Cancel</Button>
//             <Button>Deploy</Button>
//           </CardFooter>
//         </Card>
//       </div>
//     </>
//   )
// }

// export default App

// import { Metadata } from 'next'
// import Image from 'next/image'
// import Link from 'next/link'

// import { cn } from '@/lib/utils'
// import { buttonVariants } from '@/components/ui/button'
// import { UserAuthForm } from '@/app/examples/authentication/components/user-auth-form'

// export const metadata: Metadata = {
//   title: 'Authentication',
//   description: 'Authentication forms built using the components.',
// }

// export default function AuthenticationPage() {
//   return (
//     <>
//       <div className='md:hidden'>
//         <img
//           src='#'
//           width={1280}
//           height={843}
//           alt='Authentication'
//           className='block dark:hidden'
//         />
//         <img
//           src='#'
//           width={1280}
//           height={843}
//           alt='Authentication'
//           className='hidden dark:block'
//         />
//       </div>
//       <div className='container relative hidden h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0'>
//         <a
//           href='#'
//           className={cn(
//             buttonVariants({ variant: 'ghost' }),
//             'absolute right-4 top-4 md:right-8 md:top-8'
//           )}
//         >
//           Login
//         </a>
//         <div className='relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex'>
//           <div className='absolute inset-0 bg-zinc-900' />
//           <div className='relative z-20 flex items-center text-lg font-medium'>
//             <svg
//               xmlns='http://www.w3.org/2000/svg'
//               viewBox='0 0 24 24'
//               fill='none'
//               stroke='currentColor'
//               strokeWidth='2'
//               strokeLinecap='round'
//               strokeLinejoin='round'
//               className='mr-2 h-6 w-6'
//             >
//               <path d='M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3' />
//             </svg>
//             Acme Inc
//           </div>
//           <div className='relative z-20 mt-auto'>
//             <blockquote className='space-y-2'>
//               <p className='text-lg'>
//                 &ldquo;This library has saved me countless hours of work and
//                 helped me deliver stunning designs to my clients faster than
//                 ever before.&rdquo;
//               </p>
//               <footer className='text-sm'>Sofia Davis</footer>
//             </blockquote>
//           </div>
//         </div>
//         <div className='lg:p-8'>
//           <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
//             <div className='flex flex-col space-y-2 text-center'>
//               <h1 className='text-2xl font-semibold tracking-tight'>
//                 Create an account
//               </h1>
//               <p className='text-sm text-muted-foreground'>
//                 Enter your email below to create your account
//               </p>
//             </div>
//             {/* <UserAuthForm /> */}
//             <p className='px-8 text-center text-sm text-muted-foreground'>
//               By clicking continue, you agree to our{' '}
//               <a
//                 href='#'
//                 className='underline underline-offset-4 hover:text-primary'
//               >
//                 Terms of Service
//               </a>{' '}
//               and{' '}
//               <a
//                 href='#'
//                 className='underline underline-offset-4 hover:text-primary'
//               >
//                 Privacy Policy
//               </a>
//               .
//             </p>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

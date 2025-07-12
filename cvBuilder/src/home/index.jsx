import Header from '@/components/ui/custom/Header'
import { UserButton } from '@clerk/clerk-react'
import { AtomIcon, Edit, Share2 } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <Header/>
      <div>
      
     <section className=" z-50">
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Build Your Resume <span className='text-primary'>With AI</span> </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Effortlessly Craft a Standout Resume with Our AI-Powered Builder</p>
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a href="/dashboard" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary hover:bg-primary focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Get Started
                <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
        </div>
        <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
            <span className="font-semibold text-gray-400 uppercase">CONNECT WITH US!</span>
            <div className="flex flex-wrap justify-center items-center mt-8 text-gray-500 sm:justify-between gap-x-12">
                {/* GitHub */}
                <a href="https://github.com/chinmay-yy" target="_blank" rel="noopener noreferrer" className="mr-0 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400 flex items-center">
                    <svg className="h-12 w-12" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.58.688.482C19.138 20.203 22 16.447 22 12.021 22 6.484 17.523 2 12 2z"/>
                    </svg>
                    <span className="ml-3 text-xl font-bold">GitHub</span>
                </a>
                {/* Twitter */}
                <a href="https://x.com/saini_chinmay" target="_blank" rel="noopener noreferrer" className="mr-0 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400 flex items-center">
                    <svg className="h-12 w-12" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.46 5.924c-.793.352-1.645.59-2.54.698a4.48 4.48 0 001.963-2.475 8.94 8.94 0 01-2.828 1.082 4.48 4.48 0 00-7.633 4.086A12.72 12.72 0 013.11 4.868a4.48 4.48 0 001.388 5.976 4.47 4.47 0 01-2.03-.561v.057a4.48 4.48 0 003.594 4.393 4.48 4.48 0 01-2.025.077 4.48 4.48 0 004.184 3.114A8.98 8.98 0 012 19.54a12.68 12.68 0 006.88 2.018c8.26 0 12.785-6.84 12.785-12.785 0-.195-.004-.39-.013-.583A9.14 9.14 0 0024 4.59a8.94 8.94 0 01-2.54.698z"/>
                    </svg>
                    <span className="ml-3 text-xl font-bold">Twitter</span>
                </a>
                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/chinmay-saini-ab8407292/" target="_blank" rel="noopener noreferrer" className="mr-0 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400 flex items-center">
                    <svg className="h-12 w-12" viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg" fill="none">
                        <path d="M34 34V34H27.1344V23.372C27.1344 20.9403 27.0902 17.8587 23.8712 17.8587C20.612 17.8587 20.0894 20.4533 20.0894 23.2132V34H13.2215V11.345H19.7819V14.2352H19.8687C20.751 12.6065 22.7403 11.131 25.6353 11.131C32.4166 11.131 34 15.3053 34 21.0343V34H34ZM4.00295 8.454C1.79213 8.454 0 6.66187 0 4.45206C0 2.24225 1.79213 0.450104 4.00295 0.450104C6.21377 0.450104 8.0059 2.24225 8.0059 4.45206C8.0059 6.66187 6.21377 8.454 4.00295 8.454ZM0.444153 34H7.55288V11.345H0.444153V34Z" fill="currentColor"/>
                    </svg>
                    <span className="ml-3 text-xl font-bold">LinkedIn</span>
                </a>
            </div>
        </div> 
    </div>
</section>
<section className="py-8 bg-white z-50 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
  <h2 className="font-bold text-3xl">How it Works?</h2>
  <h2 className="text-md text-gray-500">Create your professional resume in just 3 simple steps</h2>

  <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
    <a
      className="block rounded-xl border bg-white border-gray-200 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
      href="#"
    >
      <AtomIcon className='h-8 w-8'/>
      <h2 className="mt-4 text-xl font-bold text-black">Choose a Template</h2>
      <p className="mt-1 text-sm text-gray-600">
        Browse and select from a variety of professional resume templates to match your style.
      </p>
    </a>
    <a
      className="block rounded-xl border bg-white border-gray-200 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
      href="#"
    >
      <Edit className='h-8 w-8'/>
      <h2 className="mt-4 text-xl font-bold text-black">Fill in Your Details</h2>
      <p className="mt-1 text-sm text-gray-600">
        Enter your personal information, education, experience, and skills with our easy-to-use editor.
      </p>
    </a>
    <a
      className="block rounded-xl border bg-white border-gray-200 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
      href="#"
    >
      <Share2 className='h-8 w-8' />
      <h2 className="mt-4 text-xl font-bold text-black">Download or Share</h2>
      <p className="mt-1 text-sm text-gray-600">
        Instantly download your resume as a PDF or share it online with a unique link.
      </p>
    </a>
  </div>

  <div className="mt-12 text-center">
    <a
      href='/auth/sign-in'
      className="inline-block rounded bg-pink-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow-400"
    >
      Get Started Today
    </a>
  </div>
</section>
  </div>
 
    </div>
  )
}

export default Home
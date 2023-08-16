import Image from 'next/image'
import SpecialOffers from './components/specialOffers'
import Categories from './components/categories'
import Footer from './components/footer'
import Navbar from './components/navbar/navbar'

export default function Home() {
  return (
    <main className='bg-pink-150 font-sans'>
      <Navbar/>
     <SpecialOffers/>
     <Categories/>
     <Footer/>

    </main>
 
  )
}

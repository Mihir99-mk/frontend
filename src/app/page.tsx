import Image from 'next/image'
import Navbar from './Components/Navbar'
import SearchBar from './Components/SearchBar'

export default function Home() {
  return (
    <div>
      <Navbar />
      <SearchBar />
    </div>
  )
}

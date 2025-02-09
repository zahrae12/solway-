import { Hero,NosActivites,NosInnovations,NosSolutions,Partenaires,Footer } from "./Sections"
import Nav from "./Components/Nav"
function App() {
  

  return (
    <main className="p-0">
    <Nav />
    <section className='xl:padding-l wide:padding-r'>
      <Hero />
    </section>
    <section className="bg-[url('/src/assets/images/container.png')] bg-cover  bg-no-repeat padding">
     <NosActivites />
    </section>
    <section className="bg-[url('/src/assets/images/cover.png')] bg-cover bg-no-repeat  padding">
  <NosInnovations/>
</section>



  </main>
  )
}

export default App

import { Hero,NosActivites,NosInnovations,NosSolutions,Partenaires,Footer } from "./Sections"
import Nav from "./Components/Nav"
function App() {
  

  return (
    <main className="p-0">
    <Nav />
    <section className='xl:padding-l wide:padding-r'>
      <Hero />
    </section>
    <section className="bg-[url('/src/assets/images/container.png')] bg-cover bg-no-repeat padding small-screen-bg">

     <NosActivites />
    </section>
    <section className="bg-[url('/src/assets/images/cover.png')] bg-cover bg-no-repeat  padding  small-screen-bg">
  <NosInnovations/>
</section>
<section className="bg-[url('/src/assets/images/containerrr.png')] bg-cover bg-no-repeat  padding  small-screen-bg">
  <NosSolutions/>
</section>
<section className="bg-[url('/src/assets/images/grayBack.png')] bg-cover bg-no-repeat  padding  small-screen-bg">
  <Partenaires/>
</section>
<section className="bg-[url('/src/assets/images/footerBack.png')] bg-cover bg-no-repeat  padding  small-screen-bg">
  <Footer/>
</section>



  </main>
  )
}

export default App

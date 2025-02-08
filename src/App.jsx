import { Hero,NosActivites,NosInnovations,NosSolutions,Partenaires,Footer } from "./Sections"
import Nav from "./Components/Nav"
function App() {
  

  return (
    <main className="p-0">
    <Nav />
    <section className='xl:padding-l wide:padding-r padding-b'>
      <Hero />
    </section>
  </main>
  )
}

export default App

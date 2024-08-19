import Features from './components/Features/Features'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
      <div className="containers" style={{ display: "flex", flexDirection: "column", gap: "100px" }}>
        <Header />
        <Features />
        <Footer />
      </div>
    </>
  )
}

export default App

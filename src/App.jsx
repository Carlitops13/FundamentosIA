import React from 'react'
import './styles/globals.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Methodology from './components/Methodology'
import TechnicalFlow from './components/TechnicalFlow'
import Visualizations from './components/Visualizations'
import Results from './components/Results'
import Conclusions from './components/Conclusions'
import Footer from './components/Footer'

function App() {
    return (
        <div className="dark bg-background text-on-surface font-body-base min-h-screen">
            <Header />
            <main className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop py-12 space-y-24 bg-dot-pattern">
                <Hero />
                <Methodology />
                <TechnicalFlow />
                <Visualizations />
                <Results />
                <Conclusions />
            </main>
            <Footer />
        </div>
    )
}

export default App

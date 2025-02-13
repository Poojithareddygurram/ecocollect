import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Features from './components/Features';
import Footer from './components/Footer';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={
          <>
            {/* Hero Section */}
            <section className="relative bg-green-600 text-white py-20">
              <div className="container mx-auto px-4">
                <div className="max-w-3xl">
                  <h1 className="text-4xl md:text-5xl font-bold mb-6">
                    Smart Waste Collection for a Cleaner Environment
                  </h1>
                  <p className="text-xl mb-8">
                    Schedule waste collection, track pickups, and provide feedback - all in one place.
                    Join us in making our community cleaner and more sustainable.
                  </p>
                  <div className="space-x-4">
                    <button className="px-6 py-3 bg-white text-green-600 rounded-lg font-semibold hover:bg-green-50">
                      Request Collection
                    </button>
                    <button className="px-6 py-3 bg-green-700 text-white rounded-lg font-semibold hover:bg-green-800">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Background Image */}
              <div 
                className="absolute inset-0 z-[-1] opacity-20"
                style={{
                  backgroundImage: 'url("https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
            </section>

            <Features />
          </>
        } />
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
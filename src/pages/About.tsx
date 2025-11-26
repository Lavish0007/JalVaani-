import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import AboutSection from '../components/home/About';
import TeamCards from '../components/home/TeamCards';

const About = () => {
  

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="pt-16 flex-grow">
        <div className="bg-green-700 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold mb-4">About JalVaani</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Learn more about our mission to transform agricultural water management
              across India.
            </p>
          </div>
        </div>

        <AboutSection />

        {/* Team Section - use shared TeamCards component */}
        <TeamCards />

        {/* Mission Section */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Mission & Values</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-green-50 p-8 rounded-lg shadow-md">
                  <h3 className="text-2xl font-bold text-green-800 mb-4">Our Mission</h3>
                  <p className="text-gray-700">
                    To empower farmers with intelligent, data-driven irrigation solutions that conserve water, increase yields, and promote sustainable agricultural practices across India.
                  </p>
                </div>
                
                <div className="bg-green-50 p-8 rounded-lg shadow-md">
                  <h3 className="text-2xl font-bold text-green-800 mb-4">Our Vision</h3>
                  <p className="text-gray-700">
                    A future where precision irrigation is the norm, agricultural water waste is eliminated, and every farmer has access to technology that helps them grow more with less.
                  </p>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Core Values</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="bg-green-100 p-6 rounded-lg text-center">
                    <h4 className="font-bold text-green-800 mb-2">Innovation</h4>
                    <p className="text-gray-700 text-sm">Leveraging technology to solve real agricultural challenges</p>
                  </div>
                  <div className="bg-green-100 p-6 rounded-lg text-center">
                    <h4 className="font-bold text-green-800 mb-2">Sustainability</h4>
                    <p className="text-gray-700 text-sm">Protecting water resources for future generations</p>
                  </div>
                  <div className="bg-green-100 p-6 rounded-lg text-center">
                    <h4 className="font-bold text-green-800 mb-2">Accessibility</h4>
                    <p className="text-gray-700 text-sm">Making solutions affordable and easy to use</p>
                  </div>
                  <div className="bg-green-100 p-6 rounded-lg text-center">
                    <h4 className="font-bold text-green-800 mb-2">Impact</h4>
                    <p className="text-gray-700 text-sm">Creating meaningful change in farming communities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;


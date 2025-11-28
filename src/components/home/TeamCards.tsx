import React from 'react';
import { Linkedin } from 'lucide-react';

const team = [
  {
    id: 1,
    name: 'Udisha Verma ',
    email: 'udisha verma13@gmail.com',
    image: 'https://media.licdn.com/dms/image/v2/D5603AQEETndYD_Z_SQ/profile-displayphoto-shrink_400_400/B56ZeSncVJHEAg-/0/1750511503609?e=2147483647&v=beta&t=4IYaXDrWAN3eZyzD0tdVGhImEhq5rVts47G1FYAI1Oc',
    linkedin: 'https://www.linkedin.com/in/udisha-verma/'
  },
  {
    id: 2,
    name: 'Lavish Patel',
    email: 'patellavish.9336@gmail.com',
    image: 'https://media.licdn.com/dms/image/v2/D4D03AQEGOZDlb02owQ/profile-displayphoto-shrink_400_400/B4DZT1DkRlHIAo-/0/1739278142246?e=2147483647&v=beta&t=RZUpZ-je78QXD_LdkM4Nbtw1gqJvKYTg7ILLwMC5EtA',
    linkedin: 'https://www.linkedin.com/in/lavishpatel/'
  },
  {
    id: 3,
    name: 'Vidushi Srivastava',
    email: 'vidushi.official012@gmail.com',
    image: 'https://media.licdn.com/dms/image/v2/D5603AQH2PpSWJrGAmg/profile-displayphoto-shrink_200_200/B56ZTkU5ShHEAY-/0/1738997485908?e=1766016000&v=beta&t=qAvYdbn-zxZTLsd8GGwl1hVeDTaZ976AtjJeFxKVxw4',
    linkedin: 'https://www.linkedin.com/in/srivastava-vidushi/'
  }
];

const TeamCards: React.FC = () => {
  return (
    <section className="py-12 bg-[#F5F5DC]"> {/* Beige background */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
        <h2 className="text-3xl font-semibold text-center text-green-900 mb-8">Meet the Team</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
          {team.map((m) => (
            <div
              key={m.id}
              className="bg-[#E0FFCC] border-2 rounded-lg p-8 text-center shadow-lg border-green-400 
                        transform transition duration-300 hover:scale-105"
            >
              <div className="flex justify-center mb-4">
                <div className="w-28 h-28 rounded-full ring-4 ring-green-500 overflow-hidden">
                  <img src={m.image} alt={m.name} className="w-full h-full object-cover" />
                </div>
              </div>

              <h3 className="text-xl font-semibold text-green-900 mb-1">{m.name}</h3>
              <p className="text-green-800 mb-4 text-sm">{m.email}</p>

              <a
                href={m.linkedin}
                aria-label={`Open ${m.name} LinkedIn`}
                className="inline-flex items-center justify-center text-green-800 hover:text-green-600"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamCards;

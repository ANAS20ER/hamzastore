
import { Shield, Fuel, Wrench, CreditCard } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Garantie de qualité',
    description: 'Tous nos véhicules sont inspectés minutieusement et garantis pour votre tranquillité d\'esprit.',
    icon: Shield,
    color: 'bg-blue-100 text-blue-700'
  },
  {
    id: 2,
    title: 'Financement flexible',
    description: 'Nous proposons des options de financement personnalisées adaptées à votre budget.',
    icon: CreditCard,
    color: 'bg-green-100 text-green-700'
  },
  {
    id: 3,
    title: 'Service d\'entretien',
    description: 'Bénéficiez de notre service d\'entretien professionnel pour maintenir votre véhicule en excellente condition.',
    icon: Wrench,
    color: 'bg-purple-100 text-purple-700'
  },
  {
    id: 4,
    title: 'Reprise de votre ancien véhicule',
    description: 'Nous rachetons votre ancien véhicule à un prix équitable lors de l\'achat d\'une nouvelle voiture.',
    icon: Fuel,
    color: 'bg-orange-100 text-orange-700'
  }
];

const Services = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Nos Services</h2>
          <p className="text-gray-600">
            Nous offrons une gamme complète de services pour vous accompagner dans votre expérience d'achat automobile.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className={`w-12 h-12 rounded-full ${service.color} flex items-center justify-center mb-4`}>
                <service.icon size={24} />
              </div>
              
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

import React, { useState } from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import services from "../utils/Data/ServicesData";
import { Button } from './ui/Button';

interface Service {
  icon: React.ElementType;
  title: string;
  subtitle: string;
  description: string;
  li1: string;
  li2: string;
  li3: string;
  li4: string;
  li5: string;
  bg_link: string;
}

const Services: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalService, setModalService] = useState<Service | null>(null);

  const openModal = (service: Service) => {
    setModalService(service);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setModalService(null);
  };

  return (
    <section id="services" className="pb-12 pt-7 bg-gradient-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="mt-4 text-2xl md:text-5xl font-orbitron font-semibold text-white mb-4">
            Our <span className="text-yellow">Services</span>
          </h2>
          <p className="text-base sm:text-lg text-white max-w-3xl mx-auto">
            Revolutionize your business with innovative digital solutions that drive growth, enhance efficiency, and unlock limitless potential in the evolving digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {services.map((service, index) => (
            <div key={index} onClick={() => openModal(service)} className="flip-card relative rounded-xl group transition-transform transform hover:scale-105 cursor-pointer h-[16rem]">
              <div className="flip-card-inner">
                <div className="flip-card-front flex flex-col items-center justify-center p-1" style={{ backgroundImage: `url(${service.bg_link})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                  <div className="absolute bg-secondary rounded-xl w-full h-full opacity-60"></div>
                  <service.icon className="h-12 w-12 text-yellow mx-auto mb-2 z-20" />
                  <h3 className="font-3d text-xl font-bold mt-5 text-white font-orbitron z-20">{service.title}<br /> <span className="text-yellow">{service.subtitle}</span>
                  </h3>
                </div>
                <div className="flip-card-back flex flex-col items-center justify-center p-5 bg-black bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out text-white text-center z-20">
                  <h3 className="text-base md:text-lg font-bold mb-3 font-orbitron font-3d">{service.title}<br /> <span className="text-yellow">{service.subtitle}</span>
                  </h3>
                  <p className="text-white text:xs sm:text-sm font-3d">{service.description}

                  </p>
                  <div className="flex flex-col justify-center sm:flex-row mt-4">
                    <Button
                      variant="primary"
                      size="sm"
                      className="group px-2 py-2 border"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>

      {/* Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Service Modal"
        className="inset-0 bg-white p-8 rounded-2xl shadow-xl max-w-xl backdrop-blur-sm w-full relative flex md:translate-y-32 justify-center items-center mx-auto z-50">
        <div className="relative">
          <button
            className="absolute top-2 right-1 text-gray-500 text-2xl hover:text-gray-700 hover:scale-105"
            onClick={closeModal}
          >
            <X className="text-gray-600" />
          </button>
          {modalService && (
            <>
              <div className="flex items-center justify-center mb-4">
                <modalService.icon className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-3xl font-bold font-orbitron text-primary my-2">{modalService.title}
                <br /> <span className="text-yellow">{modalService.subtitle}</span>
              </h3>
              <p className="text-primary my-4 text-base">{modalService.description}</p>
              <ul className="text-left text-primary space-y-3 pt-4">
                {[modalService.li1, modalService.li2, modalService.li3, modalService.li4, modalService.li5].map((item, index) => (
                  <li key={index} className="flex items-center font-orbitron text-sm">
                    <span className="w-2 h-2 bg-yellow font-medium rounded-full mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col justify-center sm:flex-row mt-4">
                <Link to="/contact">
                  <Button
                    variant="primary"
                    size="sm"
                    className="group px-2 py-2 font-bold bg-yellow text-secondary hover:text-white hover:bg-secondary"
                  >
                    Growth Plan
                  </Button>
                </Link>
              </div>
            </>
          )}
        </div>
      </Modal>
    </section>
  );
};

export default Services;
import React from 'react';

const certificateData = [
  {
    title: 'Dasar - Dasar Python',
    path: '/Dasar Python.png',
    alt: 'Python Certificate',
    type: 'image',
  },
  {
    title: 'Pelatihan Barista',
    path: '/sertif.jpg',
    alt: 'Pelatihan Barista',
    type: 'image',
  },
  {
    title: 'Ready4AI & Security Training',
    path: '/cert_ready4ai_and_security.pdf',
    alt: 'AI & Security Certificate',
    type: 'pdf',
  },
  {
    title: 'Praktik Kerja Lapangan',
    path: '/26_Rahma_Rohmatinisa.pdf',
    alt: 'Internship Certificate',
    type: 'pdf',
  },
  {
    title: 'HTML Dasar',
    path: '/Completion_Certificate_for_HTML_Dasar.pdf',
    alt: 'HTML Certificate',
    type: 'pdf',
  },
  {
    title: 'TOEIC',
    path: '/toeic.pdf',
    alt: 'TOEIC Certificate',
    type: 'pdf',
  },
  {
    title: 'JavaScript Dasar',
    path: '/Completion_Certificate_for_JavaScript_Dasar.pdf',
    alt: 'JavaScript Certificate',
    type: 'pdf',
  },
  {
    title: 'Web Development Pemula',
    path: '/Completion_Certificate_for_Web_Development_Pemula_Special_Challenge.pdf',
    alt: 'Web Development Certificate',
    type: 'pdf',
  },
];

const Certificate: React.FC = () => {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-main mb-6">My Certificates</h2>
        <p className="text-main mb-8 max-w-3xl mx-auto">
          Here are some of the certificates I've earned through various courses and training programs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificateData.map((cert) => (
          <div key={cert.title} className="bg-sidebar rounded-lg shadow-lg overflow-hidden flex flex-col">
            <div className="h-96 bg-gray-700">
              {cert.type === 'image' ? (
                <img src={cert.path} alt={cert.alt} className="w-full h-full object-contain" />
              ) : (
                <iframe src={cert.path} title={cert.title} className="w-full h-full border-0" />
              )}
            </div>
            <div className="p-6 text-center flex flex-col flex-grow">
              <h3 className="text-xl font-semibold mb-4 text-main flex-grow">{cert.title}</h3>
              <a href={cert.path} className="text-accent hover:underline mt-auto" download>
                View or Download
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificate;

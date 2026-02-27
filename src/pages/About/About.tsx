import Collapse from '@/components/Collapse';

import './style.css';

interface AboutSection {
  title: string;
  content: string;
}

const ABOUT_SECTIONS: AboutSection[] = [
  {
    title: 'Fiabilité',
    content:
      'Les annonces postées sur Kasa garantissent que les photos correspondent aux logements, et que toutes les informations sont régulièrement vérifiées par nos équipes.',
  },
  {
    title: 'Respect',
    content:
      'La bienveillance fait partie des valeurs fondatrices de Kasa. Chez nous, chaque logement correspond au titre et à la description qui lui sont attribués.',
  },
  {
    title: 'Service',
    content:
      "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
  },
  {
    title: 'Sécurité',
    content:
      "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
  },
];

const About = () => {
  return (
    <div className="about-page">
      <div className="about-hero">
        <h1>En savoir plus sur nous</h1>
      </div>
      <div className="about-collapses">
        {ABOUT_SECTIONS.map((section) => (
          <Collapse key={section.title} title={section.title}>
            {section.content}
          </Collapse>
        ))}
      </div>
    </div>
  );
};

export default About;

import type { Host as HostType } from '@/types/rental';

import './style.css';

interface HostProps {
  host: HostType;
}

const Host = ({ host }: HostProps) => {
  const { name, picture } = host;
  return (
    <div className="host" aria-label={`Hôte : ${name ?? ''}`}>
      <p className="host-name">{name ?? ''}</p>
      <img
        className="host-picture"
        src={picture ?? ''}
        alt={name ?? 'Hôte'}
      />
    </div>
  );
};


export default Host;

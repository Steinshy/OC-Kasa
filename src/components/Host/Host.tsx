import type { Host as HostType } from '@/types/rental';
import { optimizeImageUrl } from '@/utils/kasa-api';

import './style.scss';

interface HostProps {
  host?: HostType;
}

const Host = ({ host }: HostProps) => {
  const { name, picture } = host ?? {};
  if (!name && !picture) return null;

  return (
    <div className="host" aria-label={`Hôte : ${name}`}>
      <p className="host-name">{name}</p>
      {picture && <img className="host-picture" src={optimizeImageUrl(picture, 64)} alt={name} />}
    </div>
  );
};

export default Host;

import { memo } from 'react';

import Gallery from '@/components/Gallery';

interface RentalGalleryProps {
  pictures?: string[];
}

const RentalGallery = memo(({ pictures = [] }: RentalGalleryProps) => {
  return <Gallery pictures={pictures} />;
});

RentalGallery.displayName = 'RentalGallery';

export default RentalGallery;

import { CSSProperties, FC } from 'react';
import type { BannerProps } from './type';

const styleBanner: CSSProperties = {
   width: '100%',
   maxWidth: '600px',
   objectFit: 'cover',
   marginBottom: '16px',
};

const Banner: FC<BannerProps> = ({ src, alt, style }) => {
   return <img src={src} style={{ ...styleBanner, ...style }} alt={alt} />;
};

export default Banner;

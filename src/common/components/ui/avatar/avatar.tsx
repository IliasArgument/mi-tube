import clsx from 'clsx';

export interface AvatarProps {
  src: string | null;
  alt?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  className?: string;
  fallback?: string;
}

export default function Avatar({
  src,
  alt = 'Avatar',
  size,
  className,
}: AvatarProps) {
  const sizeMap = {
    xs: 24,
    sm: 32,
    md: 40,
    lg: 56,
    xl: 80,
    '2xl': 120,
  };
  return (
    <div className={clsx('avatar', `avatar--${size}`, className)}>
      {src && <img src={src} alt={alt} width={sizeMap[size]} className="avatar__image" />}
    </div>
  );
}

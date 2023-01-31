import ContentLoader from 'react-content-loader';

export default function Skeleton(props) {
  return (
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={280}
      height={466}
      viewBox="0 0 280 466"
      backgroundColor="#f3f3f3"
      foregroundColor="#f3f3f3"
      {...props}>
      <circle cx="140" cy="125" r="125" />
      <rect x="0" y="263" rx="10" ry="10" width="280" height="27" />
      <rect x="0" y="310" rx="10" ry="10" width="280" height="87" />
      <rect x="0" y="421" rx="10" ry="10" width="90" height="45" />
      <rect x="130" y="421" rx="24" ry="24" width="150" height="45" />
    </ContentLoader>
  );
}

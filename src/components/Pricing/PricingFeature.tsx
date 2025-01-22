interface PricingFeatureProps {
  text: string;
}

export default function PricingFeature({ text }: PricingFeatureProps) {
  return (
    <div className="flex items-center space-x-3" role="listitem" aria-label={`Feature: ${text}`}>
      <span className="text-gray-600">{text}</span>
    </div>
  );
}

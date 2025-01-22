import { Globe } from 'lucide-react';

export default function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <Globe className="h-8 w-8 text-teal-600" aria-label="NorthPole Gateway logo" />
      <h1 className="text-2xl font-bold text-teal-600">NorthPole Gateway</h1>
    </div>
  );
}

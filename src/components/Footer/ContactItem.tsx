import { LucideIcon } from 'lucide-react';

interface ContactItemProps {
  Icon: LucideIcon;
  title: string;
  content: string;
}

export const ContactItem: React.FC<ContactItemProps> = ({ Icon, title, content }) => (
  <div className="flex items-center gap-4">
    <div className="p-3 rounded-full border-2 border-orange-500">
      <Icon className="w-6 h-6 text-orange-500" />
    </div>
    <div>
      <p className="text-orange-500">{title}</p>
      <p className="text-white">{content}</p>
    </div>
  </div>
);
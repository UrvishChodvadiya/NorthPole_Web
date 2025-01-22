import { Link } from 'react-router-dom';
import { LinkSectionProps } from './types';

export const LinkSection: React.FC<LinkSectionProps> = ({ title, links }) => (
  <div>
    <h3 className="text-xl font-bold text-white">{title}</h3>
    <ul className="mt-4">
      {links.map((link) => {
        const isStringLink = typeof link === 'string';
        const linkText = isStringLink ? link : link.label;
        const linkHref = isStringLink ? null : link.href;

        return (
          <li key={linkText} className="flex items-center gap-2">
            <span className="text-orange-500 text-3xl">→</span>
            {linkHref ? (
              <Link to={linkHref} className="text-teal-100 hover:text-orange-500 flex items-center">
                {linkText}
              </Link>
            ) : (
              <span className="text-teal-100 cursor-pointer  hover:text-orange-500">{linkText}</span>
            )}
          </li>
        );
      })}
    </ul>
  </div>
);

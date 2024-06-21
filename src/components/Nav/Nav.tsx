import clsx from 'clsx';
import { Text, X } from 'lucide-preact';
import { useState } from 'preact/hooks';

const links = [
  { id: 'home', label: 'Home' },
  { id: 'experience', label: 'Experience' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'design', label: 'UX' },
];

function Nav () {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav class="sticky top-0">
      <button
        onClick={toggleMenu}
        class="lg:hidden"
      >
        {
          isOpen
            ? <X size={24} />
            : <Text size={24} />
        }
      </button>
      <ul class={clsx(
        'flex',
        'max-lg:flex-col',
        'max-lg:fixed',
        !isOpen && 'max-lg:hidden'
      )}>
        {
          links.map(({ id, label }) => (
            <li>
              <a href={`#${id}`}>{label}</a>
            </li>
          ))
        }
      </ul>
    </nav>
  );
}

export default Nav;
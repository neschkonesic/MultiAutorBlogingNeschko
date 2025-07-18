import { User } from '../types';

const defaultAuthors: User[] = [
  {
    id: '1',
    email: 'djoricnenad@gmail.com',
    name: 'Ђорић Ненад',
    role: 'super_admin',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
    bio: 'Супер администратор платформе, писац и уредник.',
    joinedAt: '2024-01-01',
    isActive: true
  },
  {
    id: '2',
    email: 'marko.petrovic@example.com',
    name: 'Марко Петровић',
    role: 'editor',
    avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
    bio: 'Главни уредник, специјализован за књижевност и културу.',
    joinedAt: '2024-01-15',
    isActive: true
  },
  {
    id: '3',
    email: 'ana.jovanovic@example.com',
    name: 'Ана Јовановић',
    role: 'author',
    avatar: 'https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
    bio: 'Аутор чланака о технологији и науци.',
    joinedAt: '2024-02-01',
    isActive: true
  },
  {
    id: '4',
    email: 'milos.nikolic@example.com',
    name: 'Милош Николић',
    role: 'author',
    avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
    bio: 'Писац и истраживач традиције заплањског краја.',
    joinedAt: '2024-02-15',
    isActive: true
  },
  {
    id: '5',
    email: 'jelena.stojanovic@example.com',
    name: 'Јелена Стојановић',
    role: 'author',
    avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
    bio: 'Културолог и аутор чланака о локалној историји.',
    joinedAt: '2024-03-01',
    isActive: true
  }
];

// Initialize authors from localStorage or use default
const getStoredAuthors = (): User[] => {
  const stored = localStorage.getItem('registeredAuthors');
  if (stored) {
    return JSON.parse(stored);
  }
  return defaultAuthors;
};

const saveAuthorsToStorage = (authors: User[]): void => {
  localStorage.setItem('registeredAuthors', JSON.stringify(authors));
};

export const registeredAuthors: User[] = getStoredAuthors();

export const deleteAuthor = (authorId: string): boolean => {
  const currentAuthors = getStoredAuthors();
  const index = currentAuthors.findIndex(author => author.id === authorId);
  if (index !== -1) {
    currentAuthors.splice(index, 1);
    saveAuthorsToStorage(currentAuthors);
    // Update the exported array
    registeredAuthors.length = 0;
    registeredAuthors.push(...currentAuthors);
    return true;
  }
  return false;
};

export const addNewAuthor = (author: User): void => {
  const currentAuthors = getStoredAuthors();
  currentAuthors.push(author);
  saveAuthorsToStorage(currentAuthors);
  // У стварној апликацији, ово би се сачувало у базу података
  registeredAuthors.push(author);
};

export const getRegisteredAuthors = (): User[] => {
  return getStoredAuthors();
};
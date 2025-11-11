export const members = [
  {
    slug: 'haytham',
    name: 'Haytham',
    role: ' General Manager',
    email: ' haytham@signaturejewels.ae',
    phone: ' +971504023372',
    whatsapp: ' +971504023372',
    address: 'Al Hakam ibn Amr, Al Nahyan, E25, Abu Dhabi',
    photo: null
  },
  {
    slug: 'ola',
    name: 'Ola Abu Shareef',
    role: 'Sales Manager',
    email: 'ola@signaturejewels.ae',
    phone: '+9710564023098',
    whatsapp: '+9710564023098',
    address: 'Al Hakam ibn Amr, Al Nahyan, E25, Abu Dhabi',
    photo: null
  },
  {
    slug: 'sabah',
    name: 'Sabah Al Deeri',
    role: 'Operation Manager',
    email: 'sabah@signaturejewels.ae',
    phone: '+971050149499',
    whatsapp: '+971050149499',
    address: 'Al Hakam ibn Amr, Al Nahyan, E25, Abu Dhabi',
    photo: null
  }
];

export const getMemberBySlug = (slug) => {
  return members.find(member => member.slug === slug);
};

export const getInitials = (name) => {
  if (!name) return '';
  return name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
};


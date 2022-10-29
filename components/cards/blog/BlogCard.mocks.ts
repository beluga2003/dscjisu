// import { Image } from 'next/image';
import { IBlogCard } from './BlogCard';

const base: IBlogCard = {
  tag: 'cybersecurity',
  title: `Why cybersecurity Important !`,
  body: `Cyber security is mainly protecting computers, servers, smartphones,
  networks, and data from malicious attacks which is conducted by hackers.
  It&#39;s also known as information technology security or Ethical hacking.`,
  author: 'Rahul Kamilya',
  date: '2021-01-01',
  readingTime: '2 min read',
  blogImage: '/blogs/why-cybersecurity-Important-!.jpg',
  authorImage: 'https://lh4.googleusercontent.com/o1ziIEHPfTEbTsioQWFGtFzrQftroni_oEk8h9MuZj5q88RJ6NZHYZIm4t8ByzQOM2c6sXevA-0nK9yrUitjky5hBM1TLiuc5lPsbtTzlN03ufSayK54Y2ose0Jonq9PgwgrDaIN8toDWJfe1H3sqNSh5ISEHeksST3zu2zLwR211o76MRusDlZ4',
  blogslug: 'why-cybersecurity-Important-!'
};

export const mockBlogCardProps = {
  base,
};

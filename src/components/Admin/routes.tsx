import React from 'react';

import ProfilePage from './Pages/Profile';

const HomePage = React.lazy(() => import('./Pages/Home'));
const NewBlogPostPage = React.lazy(() => import('./Pages/NewBlogPost'));

export default [
  { path: '/admin', component: HomePage },
  { path: '/profile', component: ProfilePage },
  { path: '/new-blog-post', component: NewBlogPostPage },
];

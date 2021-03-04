import React from 'react';

const ExternalLink = ({ href, children, ...other }) => (
  <a href={href} {...other}>
    {children}
  </a>
);

export default ExternalLink;

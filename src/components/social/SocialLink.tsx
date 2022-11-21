import React from 'react';

type SocialLinkProps = {
  icon: string;
  size?: 'sm' | 'md' | 'lg';
};
/**
 *
 * link get icon: https://icofont.com/icons
 */
const SocialLink: React.FC<SocialLinkProps> = (props) => {
  const { icon, size } = props;
  return (
    <span className={`social-link ${size || ''}`}>
      <i className={icon}></i>
    </span>
  );
};

export default React.memo(SocialLink);

import React from 'react';

interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

const CardHeader: React.FC<CardHeaderProps> = ({
  children,
  className = ''
}) => {
  return (
  <div className={`card-header-styles ${className}`}>
{children}
    </div>
  );
}

export default CardHeader;

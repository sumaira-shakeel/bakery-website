// wrapper.tsx
import React from 'react';

interface WrapperProps {
    children: React.ReactNode; // Define children prop
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
    return <div className="wrapper  ">{children}</div>; // Render children inside a div
};

export default Wrapper;
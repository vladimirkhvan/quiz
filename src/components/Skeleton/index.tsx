import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton: React.FC = () => {
    const componentWidth:number = window.innerWidth > 1000 ? 800 : window.innerWidth - 100;

    return (<ContentLoader
        speed={2}
        width={componentWidth}
        height={248}
        viewBox={`0 0 ${componentWidth} 248`}
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb">
        <rect x="0" y="0" rx="9" ry="9" width={componentWidth - 30} height="18" />
        <rect x="0" y="23" rx="9" ry="9" width={componentWidth - 100}  height="18" />
        <rect x="0" y="53" rx="10" ry="10" width="161" height="38" />
        <rect x="0" y="96" rx="10" ry="10" width="161" height="38" />
        <rect x="0" y="139" rx="10" ry="10" width="161" height="38" />
        <rect x="0" y="182" rx="10" ry="10" width="161" height="38" />
    </ContentLoader>);
}
    
export default Skeleton;
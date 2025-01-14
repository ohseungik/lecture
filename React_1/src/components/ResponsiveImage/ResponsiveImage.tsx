import React from 'react';
import Image from "next/legacy/image";

type ResponsiveImageProps = {
    src: string;
    alt: string;
}

const ResponsiveImage = ({ src, alt }: ResponsiveImageProps) => {
    return (
        <div className='relative overflow-hidden pt-[100%]'>
            <Image alt={alt} src={src} priority={true} layout="fill"/>
        </div>
    )
}

export default ResponsiveImage;
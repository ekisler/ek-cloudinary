import React from 'react';

interface Props {
    urlImage: string | null
}

export const Message = ({ urlImage }: Props) => {
    return (
        <>
            {
                urlImage && <span className='url-cloudinary-submit'>
                    ¡Su imagen se cargó con éxito! ✅ <a target='_blank' href={urlImage} rel="noreferrer"> Ver imagen</a>
                </span>
            }
        </>
    )
}
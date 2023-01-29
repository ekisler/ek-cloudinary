import React from 'react';
interface Props {
    onImageUpload: () => void;
    dragProps: any;
    isDragging: boolean
}

export const BoxDragAndDrop = ({ isDragging, onImageUpload, dragProps }:Props) => {
    return (
        <div
        onClick={onImageUpload}
        {...dragProps}
        className={`container-dnd center-flex ${isDragging ? 'isDragging' : ''}`}
        >
            <span className='label-dnd'>Elija una imagen o arrastre y suelte una imagen 📤</span>
        </div>
    )
}
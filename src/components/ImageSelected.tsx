import React from 'react';

interface Props {
    loading: boolean;
    selected: string;
    onUpload: () => Promise<void>;
    onImageRemove: (index: number) => void;
    onImageUpdate: (index: number) => void
}

export const ImageSelected = ({ selected, loading, onUpload, onImageRemove, onImageUpdate }:  Props) => {
    return (
        <div>
            <img className='image-selected' src={selected} alt='image-selected' width={300} />
            <div className='container-buttons'>
                {
                    loading
                        ? <p className='loading-label'>Cargando Imagen ⏳...</p>
                        : <>
                            <button disabled={loading} onClick={onUpload}>Cargar 📤</button>
                            <button disabled={loading} onClick={() => onImageUpdate(0)}>Editar ✏️</button>
                            <button disabled={loading} onClick={() => onImageRemove(0)}>Cancelar ❌</button>
                        </>
                }
            </div>
        </div>
    )
}
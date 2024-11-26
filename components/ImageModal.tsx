'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

interface ImageModalProps {
    src: string;
    alt: string;
}

export function ImageModal({ src, alt }: ImageModalProps) {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsOpen(false);
            }
        };

        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, []);

    return (
        <>
            {/* Imagen inicial */}
            <Image
                src={src}
                alt={alt}
                width={600}
                height={400}
                className="rounded-lg object-cover w-full h-auto shadow-md cursor-pointer transition-transform duration-300 hover:scale-105"
                onClick={() => setIsOpen(true)}
            />

            {/* Modal */}
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogContent className="max-w-[90vw] max-h-[90vh] p-0 overflow-hidden">
                    {/* Título para accesibilidad */}
                    <DialogTitle className="sr-only">{alt}</DialogTitle>

                    {/* Contenedor con tamaño explícito */}
                    <div className="relative w-[90vw] h-[70vh]">
                        <Image
                            src={src}
                            alt={alt}
                            fill
                            className="object-contain"
                        />
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
}

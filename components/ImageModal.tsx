'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Dialog, DialogContent } from "@/components/ui/dialog"

interface ImageModalProps {
    src: string
    alt: string
}

export function ImageModal({ src, alt }: ImageModalProps) {
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsOpen(false)
            }
        }

        document.addEventListener('keydown', handleEscape)
        return () => document.removeEventListener('keydown', handleEscape)
    }, [])

    return (
        <>
            <Image
                src={src}
                alt={alt}
                width={600}
                height={400}
                className="rounded-lg object-cover w-full h-auto shadow-md cursor-pointer transition-transform duration-300 hover:scale-105"
                onClick={() => setIsOpen(true)}
            />
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogContent className="max-w-[90vw] max-h-[90vh] p-0 overflow-hidden">
                    <Image
                        src={src}
                        alt={alt}
                        width={1200}
                        height={800}
                        className="w-full h-full object-contain"
                    />
                </DialogContent>
            </Dialog>
        </>
    )
}


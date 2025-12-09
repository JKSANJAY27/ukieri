"use client";

import { X } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";
import { createPortal } from "react-dom";

interface ImageModalProps {
    isOpen: boolean;
    onClose: () => void;
    src: string;
    alt: string;
    caption?: string;
}

export function ImageModal({ isOpen, onClose, src, alt, caption }: ImageModalProps) {
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        if (isOpen) window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return createPortal(
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-8"
            onClick={onClose}
        >
            <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
                aria-label="Close modal"
            >
                <X className="w-8 h-8 md:w-10 md:h-10" />
            </button>

            <div
                className="relative w-full max-w-7xl max-h-[90vh] flex flex-col items-center justify-center"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="relative w-full h-[60vh] md:h-[80vh]">
                    <Image
                        src={src}
                        alt={alt}
                        fill
                        className="object-contain"
                        priority
                    />
                </div>
                {caption && (
                    <div className="mt-4 p-4 bg-black/50 backdrop-blur text-white text-center rounded-lg max-w-3xl">
                        <p className="text-sm md:text-base font-medium">{caption}</p>
                    </div>
                )}
            </div>
        </div>,
        document.body
    );
}

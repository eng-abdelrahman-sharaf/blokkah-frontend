'use client'

import React, { useEffect } from 'react';
import { useModal } from '@/context/ModalContext';

const ModalWrapper: React.FC = () => {
    const { isOpen, content, closeModal } = useModal();

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (target.classList.contains('modal-backdrop')) {
                closeModal();
            }
        };

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                closeModal();
            }
        };

        if (isOpen) {
            window.addEventListener('click', handleClickOutside);
            window.addEventListener('keydown', handleEscape);
        }

        return () => {
            window.removeEventListener('click', handleClickOutside);
            window.removeEventListener('keydown', handleEscape);
        };
    }, [isOpen, closeModal]);

    if (!isOpen || !content) return null;

    return (
        <div
            className="modal-backdrop fixed inset-0 flex items-center justify-center p-4"
            style={{
                background: 'rgba(16, 24, 40, 0.48)',
                backdropFilter: 'blur(8px)',
                position: 'fixed',
                top: '0',
                left: '0',
                right: '0',
                bottom: '0',
                zIndex: '1000'
            }}
        >
            <div className="max-w-[544px] w-full rounded-xl p-6 bg-white">
                {content}
            </div>
        </div>
    );
};

export default ModalWrapper;
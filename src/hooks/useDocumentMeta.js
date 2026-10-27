import { useEffect, useRef } from 'react';
import { useScene } from '../context/SceneContext';

/**
 * useDocumentMeta — Dynamic Meta Tags & Virtual Routing (History API)
 */

const ROOM_META = {
    null: {
        path: '/',
        title: 'Jay Mehta — Versatile Software Engineer',
        description: 'Portfolio of Jay Mehta, software engineering intern at Scanerio and AI/ML student (Class of 2028), showcasing web projects, client work, and hackathon builds.',
    },
    about: {
        path: '/about',
        title: 'About — Jay Mehta Portfolio',
        description: 'Learn about Jay Mehta — a versatile software engineer working across APIs, frontend, backend, automation, and databases, graduating in 2028.',
    },
    gallery: {
        path: '/gallery',
        title: 'Gallery & Featured Work — Jay Mehta Portfolio',
        description: 'Explore the flagship projects engineered by Jay Mehta, including Quorum, Ghanshyam Property, SPG, CoffeeMania, and Automated Security Gate.',
    },
    studio: {
        path: '/studio',
        title: 'The Studio — Jay Mehta Portfolio',
        description: 'Explore Jay Mehta\'s interactive 3D studio showcasing Java, web development, and connected device projects.',
    },
    contact: {
        path: '/contact',
        title: 'Contact — Jay Mehta Portfolio',
        description: 'Let\'s build something people remember. Get in touch with Jay Mehta for full-stack software development and client websites.',
    },
};

// Map URL paths back to room IDs for deep linking
const PATH_TO_ROOM = {
    '/': null,
    '/about': 'about',
    '/gallery': 'gallery',
    '/studio': 'studio',
    '/contact': 'contact',
};

export function getInitialRoomFromUrl() {
    const path = window.location.pathname.replace(/\/+$/, '') || '/';
    return PATH_TO_ROOM[path] !== undefined ? PATH_TO_ROOM[path] : null;
}

export function useDocumentMeta() {
    const { currentRoom, teleportTo, hasEntered } = useScene();
    const isHandlingPopState = useRef(false);
    const lastPushedRoom = useRef(undefined); // Track what we last pushed to avoid duplicates

    // Update document meta and URL when room changes
    useEffect(() => {
        const roomKey = currentRoom === null ? 'null' : currentRoom;
        const meta = ROOM_META[roomKey] || ROOM_META['null'];

        // Update the page title
        document.title = meta.title;

        // Update meta description
        const descTag = document.querySelector('meta[name="description"]');
        if (descTag) {
            descTag.setAttribute('content', meta.description);
        }

        // Update OG meta tags
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) ogTitle.setAttribute('content', meta.title);

        const ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogDesc) ogDesc.setAttribute('content', meta.description);

        const ogUrl = document.querySelector('meta[property="og:url"]');
        if (ogUrl) ogUrl.removeAttribute('content');

        // Update canonical link
        const canonicalTag = document.querySelector('link[rel="canonical"]');
        if (canonicalTag) {
            canonicalTag.removeAttribute('href');
        }

        // Push to browser history
        if (!isHandlingPopState.current && lastPushedRoom.current !== currentRoom) {
            if (lastPushedRoom.current === undefined) {
                window.history.replaceState({ room: currentRoom }, '', meta.path);
            } else {
                window.history.pushState({ room: currentRoom }, '', meta.path);
            }
            lastPushedRoom.current = currentRoom;
        }
        isHandlingPopState.current = false;
    }, [currentRoom]);

    // Handle browser back/forward buttons
    useEffect(() => {
        const handlePopState = (e) => {
            const room = e.state ? e.state.room : null;
            if (room !== undefined) {
                isHandlingPopState.current = true;
                lastPushedRoom.current = room;
                teleportTo(room);
            }
        };

        window.addEventListener('popstate', handlePopState);
        return () => window.removeEventListener('popstate', handlePopState);
    }, [teleportTo]);
}

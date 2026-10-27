import { projects } from '../../../../data/projects';
/**
 * Studio Content Data
 * 
 * Custom content for Shan's interactive monitor towers.
 */

export const PLATFORM_CONFIG = {
    youtube: {
        color: '#00D9FF',
        accentColor: '#5BE7FF',
        icon: '▶',
        label: 'Tech Demo',
        shape: 'tv', // Wide CRT style
    },
    blog: {
        color: '#5BE7FF',
        accentColor: '#00D9FF',
        icon: '📝',
        label: 'Case Study',
        shape: 'monitor', // Thin desktop monitor
    },
    tiktok: {
        color: '#00D9FF',
        accentColor: '#5BE7FF',
        icon: '📱',
        label: 'Micro Motion',
        shape: 'phone', // Vertical phone
    },
    linkedin: {
        color: '#00D9FF',
        accentColor: '#5BE7FF',
        icon: 'in',
        label: 'Milestone',
        shape: 'monitor',
    },
    codrops: {
        color: '#00D9FF',
        accentColor: '#5BE7FF',
        icon: '💧',
        label: 'Featured',
        shape: 'monitor',
    },
};

const RAW_CONTENT_DATA = projects.map((project, index) => ({
    id: `studio-${project.id}`,
    platform: 'blog',
    title: project.title,
    description: `${project.type}: ${project.shortDescription}`,
    thumbnail: project.image,
    url: project.url || null,
    date: '', // Project completion dates not supplied; do not invent them.
    readTime: project.type,
    frontTexture: project.studioImage,
    paintedFrontTexture: project.studioPaintedImage
}));

export const CONTENT_DATA = RAW_CONTENT_DATA;

export const getContentByPlatform = (platform) => {
    if (platform === 'all') return CONTENT_DATA;
    return CONTENT_DATA.filter(item => item.platform === platform);
};

export const getLatestContent = () => {
    return [...CONTENT_DATA].sort((a, b) => new Date(b.date) - new Date(a.date))[0];
};

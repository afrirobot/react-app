// Service Pricing Configuration
export const servicePricing = {
    'graphic-design': {
        name: 'Graphic Design',
        icon: 'bx bx-pencil',
        description: 'Professional graphic design services including YouTube thumbnails, Instagram posts, and advertisement designs. High-quality visuals that capture attention and drive engagement.',
        options: {
            'youtube-thumbnail': { name: 'YouTube Thumbnail', single: 15, package: 100, packageCount: 15 },
            'instagram-post': { name: 'Logo-Design', single: 50, package: 150, packageCount: 5.5 },
            'ads-design': { name: 'Ads Design', single: 15, package: 100, packageCount: 15 }
        }
    },
    'video-editing': {
        name: 'Video Editing',
        icon: 'bx bx-video',
        description: 'Expert video editing for both short-form and long-form content. Perfect for social media, YouTube, commercials, and corporate videos with professional quality.',
        options: {
            'short-form': { 
                name: 'Short Form Video', 
                single: 25, 
                package: 300, 
                packageCount: 15,
                description: 'Videos under 3 minutes (Reels, TikTok, Shorts)'
            },
            'long-form': { 
                name: 'Long Form Video', 
                single: 40, 
                package: 500, 
                packageCount: 15,
                description: 'Videos over 3 minutes (YouTube, Tutorials, Documentaries)'
            }
        }
    },
    'tech-development': {
        name: 'Tech Development',
        icon: 'bx bx-code-alt',
        description: 'Comprehensive technology development services including websites, mobile apps, AI solutions, and security systems. Built with modern technologies and best practices.',
        options: {
            'web-development': {
                name: 'Web Development',
                tiers: [
                    { name: '6 Pages Website', price: 300, description: 'Up to 6 pages with basic functionality' },
                    { name: '6+ Pages Website', price: 450, description: '6+ pages with advanced features (up to $800)' }
                ]
            },
            'mobile-app': {
                name: 'Mobile App Development',
                tiers: [
                    { name: 'Simple App', price: 500, description: 'Basic functionality and UI' },
                    { name: 'Advanced App', price: 1000, description: 'Complex features and premium design' }
                ]
            },
            'ai-development': {
                name: 'AI Development',
                tiers: [
                    { name: 'Simple AI', price: 1000, description: 'Basic AI integration and functionality' },
                    { name: 'Advanced AI', price: 2000, description: 'Complex AI systems and machine learning' }
                ]
            },
            'security-development': {
                name: 'Security Development',
                tiers: [
                    { name: 'Basic Security', price: 500, description: 'Essential security measures and protocols' },
                    { name: 'Advanced Security', price: 3000, description: 'Comprehensive security system implementation' }
                ]
            }
        }
    }
};

export const toolsList = [
    { name: 'Oryza', logo: 'logos/Oryza.avif' },
    { name: 'Wyvora', logo: 'logos/Wyvora.avif' },
    { name: 'Xraden', logo: 'logos/Xraden.avif' },
    { name: 'Acentra Corp', logo: 'logos/Acentra Corp.avif' },
    { name: 'Boxera', logo: 'logos/Boxera.avif' },
    { name: 'Kyvera', logo: 'logos/Kyvera.avif' },
    { name: 'Eryven', logo: 'logos/Eryven.avif' },
    { name: 'Fivan', logo: 'logos/Fivan.avif' },
    { name: 'Mynto', logo: 'logos/Mynto.avif' },
    { name: 'Fyntra', logo: 'logos/Fyntra.avif' },
    { name: 'Lravel', logo: 'logos/Lravel.avif' },
    { name: 'Axora', logo: 'logos/Axora.avif' }
];


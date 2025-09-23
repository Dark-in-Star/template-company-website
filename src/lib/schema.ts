
export const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Procellecence Technology",
    "url": process.env.NEXT_PUBLIC_SITE_URL,
    "logo": `${process.env.NEXT_PUBLIC_SITE_URL}/img/favicon.ico`,
    "industry": {
        "@type": "InformationTechnologyIndustry"
    },
    "description": "Procellecence Technology, a global IT solutions provider, empowers businesses worldwide with innovative digital solutions. We specialize in AI (Artificial Intelligence) chatbots, custom app development (Android, iOS, desktop), web development, and results-driven SEO strategies to enhance your business performance.",
    "globalLocation": "https://schema.org/Place",
    "sameAs": [
        "https://www.instagram.com/procellence/",
        "https://www.facebook.com/ProcellenceOfficial",
        "https://x.com/procellenceTech",
        "https://www.linkedin.com/company/procellencetechnology/",
        "https://www.youtube.com/@procellence?sub_confirmation=1"
    ],
    "foundingDate": "2023-11-05",
    "founders": [{
        "@type": "Person",
        "name": "Akshoy Kumar Duya"
    }],
    "employee": [{
        "@type": "Person",
        "name": "Subhajit Nath",
        "jobTitle": "Software Engineer",
        "worksFor": {
            "@type": "Organization",
            "name": "Procellecence Technology"
        },
        "knowsLanguage": ["English", "Bengali", "Hindi"]
    }, {
        "@type": "Person",
        "name": "Sudipta Dinda",
        "jobTitle": "Software Engineer",
        "worksFor": {
            "@type": "Organization",
            "name": "Procellecence Technology"
        },
        "knowsLanguage": ["English", "Hindi", "Bengali"]
    }, {
        "@type": "Person",
        "name": "Arup Duya",
        "jobTitle": "Graphic Designer",
        "worksFor": {
            "@type": "Organization",
            "name": "Procellecence Technology"
        },
        "knowsLanguage": ["English", "Hindi", "Bengali"]
    }, {
        "@type": "Person",
        "name": "Shweta Sahani",
        "jobTitle": "Marketing Executive",
        "worksFor": {
            "@type": "Organization",
            "name": "Procellecence Technology"
        },
        "knowsLanguage": ["English", "Hindi"]
    }],
    "contactPoint": [{
        "@type": "ContactPoint",
        "telephone": "+91-85099-44292",
        "contactType": "Customer Service",
        "email": "info@procellence.com",
        "availableLanguage": ["English", "Hindi", "Bengali"]
    }],
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "Kolkata",
        "addressRegion": "WB",
        "addressCountry": "IN"
    },
    "openingHoursSpecification": [{
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
        ],
        "opens": "10:00:00",
        "closes": "17:00:00",
        "timeZone": "Asia/Kolkata"
    }],
    "legalName": "Procellecence Technology",
    "additionalType": "https://schema.org/SoftwareDevelopment",
    "award": "Best IT Solutions Provider 2023",
    "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": process.env.NEXT_PUBLIC_SITE_URL
    }
}

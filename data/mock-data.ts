export const profileData = {
    name: "Chioma Princess Geraldine Okeke",
    title: "Full-Stack Developer",
    email: "okekegeraldenne@gmail.com",
    phone: "602-740-7962",
    linkedin: "https://linkedin.com/in/okeke-chioma",
    github: "https://github.com/Chioma-Okeke",
    location: "Tempe, Arizona",
    profileImage:
        "https://res.cloudinary.com/djrp3aaq9/image/upload/v1758915248/WhatsApp_Image_2025-09-13_at_00.35.40_6d6eeac2_pndl8i.jpg",
    resumeUrl: "/chioma_okeke_resume.pdf",

    about: {
        summary:
            "A dedicated Full-Stack Developer passionate about building secure, scalable, and user-focused applications.",
        highlights: [
            "Awarded the highly competitive Mastercard Foundation Scholarship, selected from a pool of 6,000+ applicants for academic excellence and leadership potential",
            "Spearheaded various frontend development projects using React and Next.js, optimizing rendering performance and reducing page load times by 20%, which contributed to a 30% boost in user engagement.",
            "Mentored peers through She Code Africa, guiding learners in mastering advanced React concepts. 90% of participants reported increased confidence in building real-world applications.",
        ],
    },

    skills: {
        programming: ["JavaScript", "TypeScript", "Python", "C++"],
        frontend: [
            "React.js",
            "Next.js",
            "HTML5",
            "CSS3",
            "Tailwind CSS",
            "Bootstrap",
            "shadcn UI",
        ],
        backend: ["Node.js", "Express.js", "FastAPI", "RESTful APIs"],
        databases: ["PostgreSQL", "MongoDB", "MySQL"],
        tools: ["Git", "GitHub", "Docker", "Heroku", "Linux", "Windows"],
        specializations: [
            "Cybersecurity",
            "Data Structures",
            "Algorithms",
            "Software Security",
        ],
    },

    experience: [
        {
            id: 1,
            company: "Arizona State University",
            role: "Web Application Developer Assistant",
            duration: "Aug 2025 - Present",
            location: "Tempe, AZ",
            description:
                "EdPlus is an enterprise unit at Arizona State University, focused on designing and delivering scalable digital teaching and learning models.",
            achievements: [
                "Developing and extending modular front-end components and backend logic in Salesforce using Apex and Lightning Web Components (LWC), applying core software engineering principles within a large-scale cloud platform",
                "Improving platform reliability by implementing automated Jest test suites covering 85% of critical components, which reduced regression-related incidents by 30% and accelerated feature release cycles by 20%",
            ],
        },
        {
            id: 2,
            company: "Cavista Technology",
            role: "Software Engineer I",
            duration: "Mar 2023 - Aug 2025",
            location: "Lagos, Nigeria",
            description:
                "Cavista is a global partner of Axxess, developing scalable web applications and enhancing usability for enterprise-level healthcare technology solutions.",
            achievements: [
                "Built a form-to-model workflow using Aurelia + TypeScript that passed structured inputs from the frontend to the backend, enabling auto-generated print-ready clinical views and reducing manual documentation",
                "Designed and shipped a dynamic content management feature that allowed users to rearrange page sections to fit their workflow, improving usability and reducing support requests by 20%",
            ],
        },
        {
            id: 3,
            company: "Huawei Technologies",
            role: "Software Integration Engineering Intern",
            duration: "May 2021 - Oct 2021",
            location: "Lagos, Nigeria",
            description:
                "Huawei is a leading global Information and Communications Technology (ICT) infrastructure provider and smart device provider.",
            achievements: [
                "Created automated dashboards using HTML, CSS, and JavaScript to visualize KPIs for 4 major Internet Service Providers (ISPs), cutting manual reporting by 30% and accelerating network anomaly detection",
                "Assisted in onboarding new interns, guiding them through workflows and documentation to reduce ramp-up time and ease team integration",
            ],
        },
    ],

    projects: [
        {
            id: 1,
            title: "Personal Budgeting Application (In Progress)",
            description:
                "Building a full-stack budgeting application to replace manual Excel tracking, with a FastAPI backend for transaction management and OCR-powered receipt scanning.",
            technologies: [
                "Next.js",
                "Tailwind CSS",
                "Fast API",
                "PostgreSQL",
                "Tesseract OCR",
                "TypeScript",
                "Python",
            ],
            achievements: [
                "Developed OOP-based FastAPI backend with models and services for transactions, categories, and recurring expenses",
                "Implemented RESTful endpoints for expense tracking, budget limits, and monthly reports",
                "Designing an interactive dashboard with charts and insights powered by the Next.js frontend",
            ],
            image: "https://res.cloudinary.com/djrp3aaq9/image/upload/v1758952452/frugal-flyer-VbdUnqoe5UU-unsplash_ocs53o.jpg",
            demoUrl: "",
            githubUrl: "https://github.com/Chioma-Okeke/BudgetIt",
            date: "Sept 2025 – Present",
        },
        {
            id: 1,
            title: "Personal Budgeting Application (In Progress)",
            description:
                "Designed and developed a responsive cosmetics brand website to strengthen Veetgold’s digital presence and showcase its product line, enhancing customer trust and brand engagement.",
            technologies: [
                "Next.js",
                "Tailwind CSS",
                "TypeScript",
                "Framer Motion",
                "Vercel",
            ],
            achievements: [
                "Built reusable, performance-optimized Next.js components with clean architecture and accessibility best practices",
                "Implemented a fully responsive layout with smooth animations and optimized SEO for faster load and higher visibility",
                "Enhanced brand credibility by improving mobile user experience and reducing bounce rate through modern UI design",
            ],
            image: "https://res.cloudinary.com/djrp3aaq9/image/upload/v1751229984/logo_ae8tzv.webp",
            demoUrl: "https://veetgold-official.vercel.app/",
            githubUrl: "https://github.com/Chioma-Okeke/veetgold-official",
            date: "Sept 2025 – Present",
        },
        {
            id: 2,
            title: "NIMASA Clearance System",
            description:
                "Developed the frontend of NIMASA's NYSC Clearance System, with role-based dashboard for corps members, head of departments, supervisors, and admins.",
            technologies: [
                "Next.js",
                "Tailwind CSS",
                "Zod",
                "TanStack Query",
                "TypeScript",
            ],
            achievements: [
                "Achieved 20% faster clearance letter retrieval",
                "Improved corps member engagement by 30%",
                "Created responsive, accessible, and interactive UI design",
            ],
            image: "https://res.cloudinary.com/djrp3aaq9/image/upload/v1757230006/WhatsApp_Image_2025-09-05_at_10.15.22_cf7b114e_gxkmuo.jpg",
            demoUrl: "",
            githubUrl:
                "https://github.com/Chioma-Okeke/Nimasa-NYSC-Clearance-Portal",
            date: "Aug 2025",
        },
        {
            id: 3,
            title: "Laundry Inventory Management System",
            description:
                "Full-featured inventory and receipt printing system for dry cleaning business, enabling customer registration, item tracking, role-based access, and automated print-ready receipts.",
            technologies: [
                "Next.js",
                "MongoDB",
                "TailwindCSS",
                "TypeScript",
                "shadCn",
            ],
            achievements: [
                "Automated receipt generation for thermal printers",
                "Improved staff efficiency by 40%",
                "Implemented advanced search & filtering with React Query",
            ],
            image: "https://res.cloudinary.com/djrp3aaq9/image/upload/v1747241404/de-royale-choice-1_xd42sl.jpg",
            demoUrl: "",
            githubUrl: "https://github.com/Chioma-Okeke/De-royale-choice",
            date: "Apr 2025",
        },
        {
            id: 4,
            title: "Task Management API",
            description:
                "Created RESTful API with Node.js & Express.js for task CRUD operations, secure JWT auth, middleware validation, and advanced filtering by category, deadline, and status.",
            technologies: ["Node.js", "Express.js", "MongoDB", "JWT"],
            achievements: [
                "Implemented secure JWT authentication system",
                "Created comprehensive middleware validation",
                "Developed advanced filtering and search capabilities",
            ],
            image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
            demoUrl: "",
            githubUrl: "https://github.com/Chioma-Okeke/task-management-app",
            date: "Mar 2025",
        },
        {
            id: 5,
            title: "Tolce Learning Hub",
            description:
                "An informative website which talks about the services offered by the company.",
            technologies: ["Next.js", "TypeScript", "Cloudinary"],
            achievements: ["Improved company online visibility by 40%"],
            image: "https://res.cloudinary.com/djrp3aaq9/image/upload/v1750851276/tolce_learning_hub_logo_lglxq1.png",
            demoUrl: "https://tolce-learning-hub.vercel.app/",
            githubUrl: "https://github.com/Chioma-Okeke/tolce-learning-hub-FE",
            date: "Mar 2025",
        },
    ],

    education: [
        {
            id: 1,
            degree: "M.S. Computer Science",
            major: "Software and System Security",
            school: "Arizona State University",
            location: "Tempe, AZ",
            duration: "Aug 2025 - May 2027",
            gpa: "",
            coursework: [
                "Data Structures and Algorithms",
                "Database Management System Implementation",
                "Software Security",
                "Applied Cryptography",
            ],
        },
        {
            id: 2,
            degree: "B.Eng. Computer Engineering",
            major: "Computer Engineering",
            school: "Covenant University",
            location: "Ogun State, Nigeria",
            duration: "Aug 2017 - Aug 2022",
            gpa: "4.67/5.0 GPA",
            coursework: [
                "Object-oriented Programming",
                "Embedded Systems Engineering",
                "Internet of Things",
                "Smart Systems Engineering",
            ],
        },
    ],

    volunteerWork: [
        {
            id: 1,
            organization: "She Code Africa",
            role: "Co-lead, Frontend Development Arm",
            duration: "Aug 2024 - Aug 2025",
            location: "Lagos, Nigeria",
            description:
                "Initiated React challenges impacting 90% of learners, led mentorship workshops, and introduced advanced React concepts to strengthen learner development.",
            achievements: [
                "Impacted 90% of learners through React challenges",
                "Led comprehensive mentorship workshops",
                "Introduced advanced React concepts for skill development",
                "Strengthened community engagement and learning outcomes",
            ],
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
        },
    ],

    testimonials: [
        {
            id: 1,
            name: "Sarah Johnson",
            role: "Senior Software Engineer",
            company: "Tech Solutions Inc.",
            content:
                "Chioma is an exceptional developer with a keen eye for detail. Her work on our healthcare platform was outstanding, delivering both functionality and exceptional user experience.",
            image: "https://images.unsplash.com/photo-1494790108755-2616b612b29c?w=100&h=100&fit=crop&crop=face",
        },
        {
            id: 2,
            name: "Michael Chen",
            role: "Product Manager",
            company: "Healthcare Innovation Labs",
            content:
                "Working with Chioma was a pleasure. She consistently delivered high-quality code on time and her cybersecurity expertise added tremendous value to our security-critical applications.",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
        },
        {
            id: 3,
            name: "Adaeze Okonkwo",
            role: "She Code Africa Member",
            company: "Frontend Developer",
            content:
                "Chioma's mentorship transformed my React skills completely. Her teaching approach is clear, practical, and inspiring. She truly cares about helping others grow in tech.",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
        },
    ],

    blog: {
        external: true,
        platform: "Hashnode.com",
        url: "https://medium.com/@chiomaokeke",
        recentPosts: [
            {
                id: 1,
                title: "Mastering CSS Flexbox: A Beginner's Guide to Flexible Layouts",
                excerpt:
                    "Break down of each Flexbox property with clear explanations and practical examples to help you fully grasp its capabilities...",
                date: "02-25-2025",
                readTime: "5 mins read",
                url: "https://chummygeraldine.hashnode.dev/say-goodbye-to-floats-mastering-css-grid-and-flexbox-for-modern-layouts",
            },
            {
                id: 2,
                title: "Say Goodbye to Floats: Mastering CSS Grid and Flexbox for Modern Layouts",
                excerpt:
                    "Breakdown of layout systems. Introduction to Grid and Flexbox.",
                date: "02-25-2025",
                readTime: "5 mins read",
                url: "https://chummygeraldine.hashnode.dev/say-goodbye-to-floats-mastering-css-grid-and-flexbox-for-modern-layouts",
            },
            {
                id: 3,
                title: "Boost Your CSS Debugging Efficiency with Browser Tools",
                excerpt:
                    "CSS issues can be some of the trickiest to debug in front-end development. Have you ever found yourself tweaking styles, refreshing the page endlessly...",
                date: "02-05-2025",
                readTime: "3 min read",
                url: "https://chummygeraldine.hashnode.dev/boost-your-css-debugging-efficiency-with-browser-tools",
            },
        ],
    },
};

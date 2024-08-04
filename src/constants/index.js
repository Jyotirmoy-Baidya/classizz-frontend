export const AddJoinOptions = ["Add Class", "Join Institute", "Join Class"];

export const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const color = [
    { bg: 'bg-pink-100', border: 'border-pink-300', span: 'bg-pink-300' },
    { bg: 'bg-green-100', border: 'border-green-300', span: 'bg-green-300' },
    { bg: 'bg-cyan-100', border: 'border-cyan-300', span: 'bg-cyan-300' },
    { bg: 'bg-yellow-100', border: 'border-yellow-300', span: 'bg-yellow-300' },
    { bg: 'bg-blue-100', border: 'border-blue-300', span: 'bg-blue-300' },
    { bg: 'bg-orange-100', border: 'border-orange-300', span: 'bg-orange-300' },
    { bg: 'bg-purple-100', border: 'border-purple-300', span: 'bg-purple-300' },
    { bg: 'bg-sky-100', border: 'border-sky-300', span: 'bg-sky-300' },
]

export const ownClasses = [
    {
        className: 'CSE1', c: 0, code: '123', selectedSubjects: [], subjects: [
            { name: "Chemistry", color: 4 },
            { name: "Physics", color: 1 },
            { name: "English", color: 6 },
            { name: "Math", color: 0 },
            { name: "Biology", color: 5 }
        ],
    },
    {
        className: 'CSE2', c: 1, code: '343', selectedSubjects: [], subjects: [
            { name: "Math", color: 0 },
            { name: "Biology", color: 5 }
        ]
    },
    {
        className: 'CSE3', c: 2, code: '163', selectedSubjects: [], subjects: [
            { name: "Chemistry", color: 4 },
            { name: "Biology", color: 5 }
        ]
    },
    {
        className: 'CSE4', c: 3, code: '191', selectedSubjects: [], subjects: [
            { name: "Chemistry", color: 4 },
        ]
    },
    {
        className: 'Physics Lab', c: 4, code: '864', selectedSubjects: [], subjects: [
            { name: "Chemistry", color: 4 },
            { name: "Physics", color: 1 },
            { name: "English", color: 6 },
        ]
    },

];


export const colors = [
    { bg_color: 'bg-pink-100', border_color: 'border-pink-500' },
    { bg_color: 'bg-teal-100', border_color: 'border-teal-500' },
    { bg_color: 'bg-slate-100', border_color: 'border-slate-500' },
    { bg_color: 'bg-cyan-100', border_color: 'border-cyan-500' },
    { bg_color: 'bg-gray-100', border_color: 'border-gray-500' },
    { bg_color: 'bg-orange-100', border_color: 'border-orange-500' },
    { bg_color: 'bg-green-100', border_color: 'border-green-500' },
]

export const announcementList = [
    {
        "date": "2023-04-15",
        "announcements": [
            {
                "dataCreator": "Jack Carter",
                "title": "Philosophy of Ethics",
                "description": "An exploration of ethical theories and their application in contemporary issues. lorem Lorem ipsum dolor sit amet consectetur adipisicing elit.Iure impedit deserunt perspiciatis modi! Dolores magni qui eligendi possimus molestiae libero odio, recusandae corporis labore iusto quam dolorum similique consequuntur culpa. ",
                "subject": "Physics"
            },
            {
                "dataCreator": "Alice Johnson",
                "title": "AI in Healthcare",
                "description": "Examining the role of artificial intelligence in transforming the healthcare industry.",
                "subject": "Hindi"
            }
        ]
    },
    {
        "date": "2023-01-30",
        "announcements": [
            {
                "dataCreator": "Alice Johnson",
                "title": "The Rise of AI",
                "description": "Exploring the advancements and implications of artificial intelligence in modern society.",
                "subject": "Physics"
            },
            {
                "dataCreator": "Bob Smith",
                "title": "Climate Change and You",
                "description": "Understanding the impact of climate change and what you can do to help mitigate its effects.",
                "subject": "Hindi"
            }
        ]
    },
    {
        "date": "2022-11-10",
        "announcements": [
            {
                "dataCreator": "Carol White",
                "title": "History of the Renaissance",
                "description": "An in-depth look at the cultural, political, and scientific changes during the Renaissance period.",
                "subject": "Chemistry"
            },
            {
                "dataCreator": "David Lee",
                "title": "The Quantum Realm",
                "description": "A journey into the mysterious world of quantum mechanics and its mind-bending phenomena.",
                "subject": "Physics"
            },
            {
                "dataCreator": "Eve Clark",
                "title": "Modern Art Movements",
                "description": "An exploration of various modern art movements and their influence on contemporary art.",
                "subject": "Physics"
            }
        ]
    },
    {
        "date": "2021-06-20",
        "announcements": [
            {
                "dataCreator": "Frank Green",
                "title": "Basics of Organic Chemistry",
                "description": "A comprehensive guide to the principles and reactions in organic chemistry.",
                "subject": "Chemistry"
            },
            {
                "dataCreator": "Grace Baker",
                "title": "The Human Genome",
                "description": "Understanding the human genome and the advancements in genetic research.",
                "subject": "Maths"
            },
            {
                "dataCreator": "Henry Walker",
                "title": "Economics 101",
                "description": "An introduction to basic economic principles and how they apply to everyday life.",
                "subject": "English"
            },
            {
                "dataCreator": "Irene Young",
                "title": "Modern Web Development",
                "description": "A guide to modern web development practices and technologies.",
                "subject": "Maths"
            }
        ]
    },

    {
        "date": "2021-01-12",
        "announcements": [
            {
                "dataCreator": "Bob Smith",
                "title": "Renewable Energy Sources",
                "description": "Exploring various renewable energy sources and their potential to replace fossil fuels.",
                "subject": "Maths"
            },
            {
                "dataCreator": "Carol White",
                "title": "The Age of Enlightenment",
                "description": "A comprehensive study of the Enlightenment period and its lasting impact on modern society.",
                "subject": "Hindi"
            }
        ]
    }
]

export const notes = [
    {
        "subject": "Mathematics",
        "color": 0,
        "topics": ["Algebra", "Geometry", "Calculus", "Statistics", "Trigonometry", "Number Theory"]
    },

    {
        "subject": "Computer Science",
        "color": 4,
        "topics": ["Programming", "Data Structures", "Algorithms", "Databases", "Computer Networks", "Operating Systems", "Artificial Intelligence", "Machine Learning", "Cybersecurity"]
    },
    {
        "subject": "Physics",
        "color": 1,
        "topics": ["Mechanics", "Optics", "Thermodynamics", "Electromagnetism", "Quantum Physics", "Relativity", "Nuclear Physics"]
    },
    {
        "subject": "Chemistry",
        "color": 2,
        "topics": ["Organic Chemistry", "Inorganic Chemistry", "Physical Chemistry", "Biochemistry", "Analytical Chemistry"]
    },
    {
        "subject": "Biology",
        "color": 3,
        "topics": ["Genetics", "Cell Biology", "Evolution", "Ecology", "Human Anatomy", "Botany", "Zoology", "Microbiology"]
    },
    {
        "subject": "History",
        "color": 5,
        "topics": ["Ancient Civilizations", "Medieval History", "Modern History", "World Wars", "Revolutions", "Colonialism", "Cold War"]
    },
    {
        "subject": "Literature",
        "color": 6,
        "topics": ["Classical Literature", "Modern Literature", "Poetry", "Drama", "Prose", "Literary Criticism", "World Literature"]
    }
]

export const quizes = [
    {
        "quizId": 1,
        "quizName": "Math Basics",
        "subjects": [
            { name: "Geography", color: 5 },
            { name: "Chemistry", color: 4 },
            { name: "Physics", color: 1 },
            { name: "Art", color: 6 },
            { name: "Chemistry", color: 4 },
            { name: "Physics", color: 1 },
            { name: "Art", color: 6 }
        ],
        "totalMarks": 100
    },
    {
        "quizId": 2,
        "quizName": "World History",
        "subjects": [
            { name: "Chemistry", color: 4 },
            { name: "Physics", color: 1 },
            { name: "Art", color: 6 },
            { name: "Chemistry", color: 4 },
            { name: "Physics", color: 1 },
            { name: "Art", color: 6 }
        ],
        "totalMarks": 80,
    },
    {
        "quizId": 3,
        "quizName": "Science Fundamentals",
        "subjects": [
            { name: "Math", color: 0 },
            { name: "Physics", color: 1 }
        ],
        "totalMarks": 90
    },
    {
        "quizId": 4,
        "quizName": "English Grammar",
        "subjects": [
            { name: "English", color: 2 },
            { name: "Biology", color: 3 }
        ],
        "totalMarks": 70
    },

]

export const students = [
    {
        name: "John Doe",
        profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
        badges: [
            "https://img.icons8.com/color/50/000000/medal2--v1.png",
            "https://img.icons8.com/color/50/000000/trophy.png",
            "https://img.icons8.com/color/50/000000/trophy.png"
        ]
    },
    {
        name: "Jane Smith",
        profilePic: "https://randomuser.me/api/portraits/women/1.jpg",
        badges: [
            "https://img.icons8.com/color/50/000000/medal2--v1.png",
            "https://img.icons8.com/color/50/000000/trophy.png"
        ]
    },
    {
        name: "Alice Johnson",
        profilePic: "https://randomuser.me/api/portraits/women/2.jpg",
        badges: [
            "https://img.icons8.com/color/50/000000/medal2--v1.png",
            "https://img.icons8.com/color/50/000000/trophy.png",
            "https://img.icons8.com/color/50/000000/medal2--v1.png",
            "https://img.icons8.com/color/50/000000/trophy.png"
        ]
    },
    {
        name: "Bob Brown",
        profilePic: "https://randomuser.me/api/portraits/men/2.jpg",
        badges: [

        ]
    },
    {
        name: "Carol White",
        profilePic: "https://randomuser.me/api/portraits/women/3.jpg",
        badges: [
            "https://img.icons8.com/color/50/000000/medal2--v1.png",

        ]
    },
    {
        name: "David Green",
        profilePic: "https://randomuser.me/api/portraits/men/3.jpg",
        badges: [
            "https://img.icons8.com/color/50/000000/medal2--v1.png",
            "https://img.icons8.com/color/50/000000/trophy.png"
        ]
    }
];


export const teachers = [
    {
        name: "Mr. John Doe",
        profilePic: "https://randomuser.me/api/portraits/men/10.jpg",
        subjects: [
            { name: "Math", color: 0 },
            { name: "Physics", color: 1 }
        ]
    },
    {
        name: "Ms. Jane Smith",
        profilePic: "https://randomuser.me/api/portraits/women/10.jpg",
        subjects: [
            { name: "English", color: 2 },
            { name: "Biology", color: 3 }
        ]
    },
    {
        name: "Mrs. Alice Johnson",
        profilePic: "https://randomuser.me/api/portraits/women/11.jpg",
        subjects: [
            { name: "Chemistry", color: 4 },
            { name: "Physics", color: 1 },
            { name: "Art", color: 6 }
        ]
    },
    {
        name: "Mr. Bob Brown",
        profilePic: "https://randomuser.me/api/portraits/men/11.jpg",
        subjects: [
            { name: "Geography", color: 5 },
        ]
    },
];




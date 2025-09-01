// Mock data for Netflix-style AI/ML Portfolio

export const personalInfo = {
  name: "Aditya Kumar",
  title: "AI/ML Researcher & Engineer",
  subtitle: "Specializing in NLP, LLMs & Deep Learning",
  bio: "Passionate researcher working on cutting-edge AI/ML projects with focus on Natural Language Processing and Large Language Models. Currently pursuing advanced research in Generative AI and optimization.",
  location: "IIT Gandhinagar, India",
  email: "aditya.kumar@iitgn.ac.in",
  github: "https://github.com/Destructor169",
  linkedin: "https://www.linkedin.com/in/aditya-iitgn",
  profileImage: "https://customer-assets.emergentagent.com/job_ai-portfolio-hub-11/artifacts/jsumew97_Screenshot%202025-05-22%20at%201.49.02%E2%80%AFPM.png"
};

export const featuredProjects = [
  {
    id: "transgan",
    title: "TransGAN for 3D Point Cloud Generation",
    description: "Research project adapting Transformer-based Generative Adversarial Networks for 3D point cloud synthesis, exploring pure Transformer architecture for complex spatial dependencies in 3D data.",
    category: "Research",
    technologies: ["PyTorch", "Transformers", "GANs", "3D Point Clouds", "WGAN-GP"],
    status: "Published",
    featured: true,
    year: "2024",
    duration: "6 months",
    backgroundImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=450&fit=crop",
    github: "https://github.com/Destructor169/TransGan",
    demo: null,
    collaborators: ["Vatsalraj Rathod", "Vedanshi Raiyani", "IIT Gandhinagar"],
    impact: "Successfully deployed full generation pipeline for 3D point cloud synthesis using pure Transformer architecture"
  },
  {
    id: "electricity-optimization",
    title: "Optimizing Energy Usage for IITGN Campus",
    description: "Comprehensive analysis of energy consumption patterns, room efficiency evaluation, solar energy potential exploration, and sustainable policy proposals for reducing electricity usage at IITGN.",
    category: "Research",
    technologies: ["Python", "EQUEST Modeling", "Solar Analysis", "Time Series", "CAGR Forecasting"],
    status: "Completed",
    featured: true,
    year: "2024",
    duration: "4 months",
    backgroundImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=450&fit=crop",
    github: "https://github.com/Destructor169/Optimizing-Energy-Usage-for-the-IITGN-Campus",
    demo: null,
    collaborators: ["Siddharth Verma", "Mahesh Dange", "Yash Ahire", "Tanvi Yadav", "Manas Agarwal"],
    impact: "Identified potential to reduce campus electricity consumption through predictive optimization and sustainable policies"
  }
];

export const nlpProjects = [
  {
    id: "email-spam-detection",
    title: "Email Spam Detection System",
    description: "Machine learning-based email spam detection system using natural language processing techniques and classification algorithms.",
    category: "NLP",
    technologies: ["Python", "Scikit-learn", "NLTK", "Pandas", "Machine Learning"],
    status: "Complete",
    year: "2024",
    backgroundImage: "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?w=800&h=450&fit=crop",
    github: "https://github.com/Destructor169/Email-spam-Detection",
    demo: null
  },
  {
    id: "fine-tuning-llms",
    title: "Fine-Tuning Large Language Models",
    description: "Implementation of fine-tuning techniques for large language models including parameter-efficient methods and domain adaptation.",
    category: "NLP",
    technologies: ["Transformers", "PyTorch", "Hugging Face", "LoRA", "PEFT"],
    status: "Complete",
    year: "2024",
    backgroundImage: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=450&fit=crop",
    github: "https://github.com/Destructor169/Fine-Tuning-LLMs",
    demo: null
  },
  {
    id: "book-recommending-system",
    title: "Book Recommendation System",
    description: "Intelligent book recommendation system using collaborative filtering and content-based filtering with natural language processing for book descriptions.",
    category: "NLP",
    technologies: ["Python", "Pandas", "Scikit-learn", "NLP", "Collaborative Filtering"],
    status: "Complete",
    year: "2023",
    backgroundImage: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=800&h=450&fit=crop",
    github: "https://github.com/Destructor169/Book-Recommending-System",
    demo: null
  },
  {
    id: "image-encryption",
    title: "Image Encryption using Chaos Theory",
    description: "Advanced image encryption and decryption system implementing chaos theory algorithms for secure image transmission and storage.",
    category: "Computer Vision",
    technologies: ["Python", "Chaos Theory", "Cryptography", "OpenCV", "NumPy"],
    status: "Complete",
    year: "2023",
    backgroundImage: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=450&fit=crop",
    github: "https://github.com/Destructor169/Image-Encryption-Decryption-using-Chaos-Theory",
    demo: null
  }
];

export const courseProjects = [
  {
    id: "machine-learning-es335",
    title: "Machine Learning Course Projects (ES-335)",
    description: "Comprehensive collection of machine learning assignments and projects covering supervised learning, unsupervised learning, and deep learning techniques at IITGN.",
    category: "Course Work",
    technologies: ["Python", "Scikit-learn", "PyTorch", "Pandas", "NumPy"],
    status: "Complete",
    year: "2024",
    backgroundImage: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&h=450&fit=crop",
    github: "https://github.com/Destructor169/Machine-Learning-ES-335",
    demo: null
  },
  {
    id: "fai-project",
    title: "Foundations of AI Course Project",
    description: "Project work for Foundations of Artificial Intelligence course covering search algorithms, knowledge representation, and AI problem-solving techniques.",
    category: "Course Work",
    technologies: ["Python", "AI Algorithms", "Search Techniques", "Logic Programming"],
    status: "Complete",
    year: "2024",
    backgroundImage: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=450&fit=crop",
    github: "https://github.com/Destructor169/FAI_Project",
    demo: null
  },
  {
    id: "self-driving-car",
    title: "Self-Driving Car Simulation",
    description: "Autonomous vehicle simulation implementing computer vision and machine learning algorithms for path planning and obstacle detection.",
    category: "Computer Vision",
    technologies: ["Python", "OpenCV", "Machine Learning", "Computer Vision", "Simulation"],
    status: "Complete",
    year: "2023",
    backgroundImage: "https://images.unsplash.com/photo-1489599651485-c88340bdec42?w=800&h=450&fit=crop",
    github: "https://github.com/Destructor169/Self-Driving-Car",
    demo: null
  },
  {
    id: "sonic-gamer",
    title: "Sonic Gamer - Game Development",
    description: "Interactive game development project featuring classic platformer mechanics with modern game design principles and AI-powered gameplay elements.",
    category: "Game Development",
    technologies: ["Python", "Pygame", "Game Development", "AI", "Graphics"],
    status: "Complete",
    year: "2023",
    backgroundImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=450&fit=crop",
    github: "https://github.com/Destructor169/sonic-gamer",
    demo: null
  }
];

export const certifications = [
  {
    id: "ml-specialization",
    title: "Machine Learning Specialization",
    issuer: "Stanford University (Coursera)",
    date: "2023",
    credentialId: "ABCD1234",
    skills: ["Machine Learning", "Python", "Neural Networks", "Deep Learning"]
  },
  {
    id: "deep-learning",
    title: "Deep Learning Specialization",
    issuer: "DeepLearning.AI (Coursera)",
    date: "2023",
    credentialId: "EFGH5678",
    skills: ["Deep Learning", "CNNs", "RNNs", "TensorFlow", "PyTorch"]
  },
  {
    id: "nlp-specialization",
    title: "Natural Language Processing Specialization",
    issuer: "DeepLearning.AI (Coursera)",
    date: "2024",
    credentialId: "IJKL9012",
    skills: ["NLP", "Transformers", "BERT", "Sentiment Analysis", "Language Models"]
  },
  {
    id: "aws-ml",
    title: "AWS Machine Learning - Specialty",
    issuer: "Amazon Web Services",
    date: "2024",
    credentialId: "MNOP3456",
    skills: ["AWS", "SageMaker", "ML Deployment", "Cloud Computing"]
  }
];

export const skills = {
  "Programming Languages": ["Python", "R", "JavaScript", "SQL", "C++"],
  "ML/DL Frameworks": ["PyTorch", "TensorFlow", "Scikit-learn", "Keras", "Hugging Face"],
  "NLP Libraries": ["spaCy", "NLTK", "Transformers", "LangChain", "OpenAI API"],
  "Data Tools": ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Plotly"],
  "Cloud & DevOps": ["AWS", "Docker", "Git", "MLflow", "Weights & Biases"],
  "Web Technologies": ["FastAPI", "Flask", "React", "Node.js", "MongoDB"]
};

export const workExperience = [
  {
    id: "teaching-assistant",
    title: "Teaching Assistant",
    company: "Indian Institute of Technology Gandhinagar",
    type: "Part-time",
    duration: "Jan 2025 - May 2025",
    period: "5 months",
    location: "Gandhinagar, Gujarat, India",
    workType: "On-site",
    description: "Mentored 400+ students by resolving technical queries, delivering live coding demos, and evaluating assignments to strengthen conceptual understanding.",
    skills: ["Teaching", "Mentoring", "Technical Support", "Live Coding", "Assignment Evaluation"],
    current: true
  },
  {
    id: "pal-mentor",
    title: "Pal Mentor",
    company: "IITGN-X",
    type: "Part-time", 
    duration: "Jan 2025 - Apr 2025",
    period: "4 months",
    location: "Gandhinagar, Gujarat, India",
    workType: "On-site",
    description: "Supporting learners by addressing course-related doubts, conducting lectures with hands-on code demonstrations, and curating and evaluating assignments.",
    skills: ["Course Support", "Lecture Delivery", "Code Demonstrations", "Assignment Curation", "Student Mentoring"],
    current: true
  }
];

export const stats = {
  totalProjects: 12,
  researchPapers: 2,
  certifications: 4,
  yearsExperience: 1,
  githubStars: 150,
  contributions: 500
};
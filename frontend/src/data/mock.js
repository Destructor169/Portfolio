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
    basegroundImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=450&fit=crop",
    github: "https://github.com/Destructor169/Optimizing-Energy-Usage-for-the-IITGN-Campus",
    demo: null,
    collaborators: ["Siddharth Verma", "Mahesh Dange", "Yash Ahire", "Tanvi Yadav", "Manas Agarwal"],
    impact: "Identified potential to reduce campus electricity consumption through predictive optimization and sustainable policies"
  }
];

export const nlpProjects = [
  {
    id: "sentiment-analyzer",
    title: "Advanced Sentiment Analysis Engine",
    description: "Deep learning-based sentiment analysis system using BERT and custom transformers for multi-language social media text analysis.",
    category: "NLP",
    technologies: ["BERT", "Transformers", "PyTorch", "FastAPI", "Docker"],
    status: "Complete",
    year: "2024",
    backgroundImage: "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?w=800&h=450&fit=crop",
    github: "https://github.com/Destructor169/sentiment-analyzer",
    demo: "https://sentiment-demo.vercel.app"
  },
  {
    id: "llm-chatbot",
    title: "Context-Aware LLM Chatbot",
    description: "Intelligent chatbot powered by fine-tuned LLM with RAG (Retrieval-Augmented Generation) for domain-specific knowledge queries.",
    category: "NLP",
    technologies: ["OpenAI GPT", "LangChain", "Vector DB", "FastAPI", "React"],
    status: "Complete",
    year: "2024",
    backgroundImage: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=450&fit=crop",
    github: "https://github.com/Destructor169/llm-chatbot",
    demo: "https://llm-chatbot-demo.vercel.app"
  },
  {
    id: "text-summarizer",
    title: "Neural Text Summarization",
    description: "Abstractive text summarization using T5 and BART models with custom training on research papers and news articles.",
    category: "NLP",
    technologies: ["T5", "BART", "Hugging Face", "PyTorch", "Streamlit"],
    status: "Complete",
    year: "2023",
    backgroundImage: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=800&h=450&fit=crop",
    github: "https://github.com/Destructor169/text-summarizer",
    demo: "https://text-summarizer-demo.streamlit.app"
  },
  {
    id: "named-entity-recognition",
    title: "Multi-domain NER System",
    description: "Named Entity Recognition system trained on multiple domains including biomedical, legal, and technical texts using spaCy and custom models.",
    category: "NLP",
    technologies: ["spaCy", "BERT", "CRF", "Python", "Flask"],
    status: "Complete",
    year: "2023",
    backgroundImage: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=450&fit=crop",
    github: "https://github.com/Destructor169/ner-system",
    demo: null
  }
];

export const courseProjects = [
  {
    id: "image-classifier",
    title: "CNN Image Classification",
    description: "Convolutional Neural Network for multi-class image classification using transfer learning with ResNet and VGG architectures.",
    category: "Computer Vision",
    technologies: ["PyTorch", "CNN", "Transfer Learning", "ResNet", "VGG"],
    status: "Complete",
    year: "2023",
    backgroundImage: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&h=450&fit=crop",
    github: "https://github.com/Destructor169/image-classifier",
    demo: null
  },
  {
    id: "stock-predictor",
    title: "Stock Price Prediction with LSTM",
    description: "Time series forecasting model using LSTM networks to predict stock prices with technical indicators and sentiment analysis.",
    category: "Machine Learning",
    technologies: ["LSTM", "TensorFlow", "Pandas", "Plotly", "Yahoo Finance API"],
    status: "Complete",
    year: "2023",
    backgroundImage: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=450&fit=crop",
    github: "https://github.com/Destructor169/stock-predictor",
    demo: null
  },
  {
    id: "recommendation-system",
    title: "Movie Recommendation Engine",
    description: "Collaborative filtering and content-based recommendation system using matrix factorization and deep learning approaches.",
    category: "Machine Learning",
    technologies: ["Collaborative Filtering", "Matrix Factorization", "PyTorch", "Pandas", "Sklearn"],
    status: "Complete",
    year: "2023",
    backgroundImage: "https://images.unsplash.com/photo-1489599651485-c88340bdec42?w=800&h=450&fit=crop",
    github: "https://github.com/Destructor169/movie-recommender",
    demo: null
  },
  {
    id: "face-recognition",
    title: "Real-time Face Recognition",
    description: "Face detection and recognition system using OpenCV and deep learning models for real-time video processing.",
    category: "Computer Vision",
    technologies: ["OpenCV", "Face Recognition", "Python", "Deep Learning", "Real-time Processing"],
    status: "Complete",
    year: "2023",
    backgroundImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=450&fit=crop",
    github: "https://github.com/Destructor169/face-recognition",
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

export const stats = {
  totalProjects: 12,
  researchPapers: 2,
  certifications: 4,
  yearsExperience: 3,
  githubStars: 150,
  contributions: 500
};
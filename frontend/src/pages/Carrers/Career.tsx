import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";


type Job = {
  id: string;
  title: string;
  category: string;
  type: string;
  salary?: string;
  description: string;
  responsibilities: string[];
  skills: string[];
};

const jobs: Job[] = [
  {
    id: '1',
    title: 'Frontend Developer',
    category: 'Web Development',
    type: 'Remote',
    salary: "$800 - $2,500",
    description: 'Build responsive UIs using React.',
    responsibilities: ['Develop user interfaces', 'Collaborate with designers', 'Optimize applications', 'Write clean code', 'Code reviews', 'Maintain documentation', 'Industry updates'],
    skills: ['React', 'JavaScript', 'HTML', 'CSS', 'Git']
  },
  {
    id: '2',
    title: 'Backend Developer',
    category: 'Web Development',
    type: 'Remote',
    salary: "$800 - $2,800",
    description: 'Seeking a Backend Developer skilled in Django, Node.js & Express.js to build scalable APIs, manage databases.',
    responsibilities: ['Server-Side Development', ' Database Management', 'Authentication & Security', ' API Development & Integration', ' Performance Optimization', 'Error Handling & Debugging', 'Deployment & DevOps', ' Code Maintainability & Testing', 'Documentation & Collaboration'],
    skills: [' Proficiency in Node.js and Express.js.', 'Strong understanding of RESTful API design and microservices.', 'Experience with MongoDB, PostgreSQL, MySQL, or Redis.', 'Knowledge of JWT authentication, OAuth, and security best practices.', 'Familiarity with Docker, Kubernetes, and cloud platforms (AWS, Azure, GCP).', ' Strong problem-solving skills and ability to work in Agile teams.']
  },
  {
    id: '3',
    title: 'WordPress Developer',
    category: 'Web Development',
    type: 'Remote',
    salary: "$600 - $2,000",
    description: 'skilled in building, customizing, and optimizing WordPress websites, themes, and plugins.',
    responsibilities: ['Develop, customize, and maintain WordPress websites, themes, and plugins.', ' Ensure website performance, security, and SEO optimization.', 'Implement responsive and user-friendly designs using HTML, CSS, JavaScript, and PHP.', ' Manage and optimize databases (MySQL) for efficient performance.', ' Troubleshoot and debug WordPress-related issues.', 'Integrate third-party APIs, payment gateways, and plugins.', 'Perform regular updates, backups, and security checks.', 'Collaborate with designers and content teams for seamless UX/UI.'],
    skills: ['PHP, HTML, CSS, JavaScript, MySQL', 'Custom themes, plugin creation, and customization', ' Elementor, WPBakery, Gutenberg, SEO optimization, caching (WP Rocket, W3 Total Cache), security best practices', 'MySQL optimization, queries, and backups, REST API, third-party services, and payment gateways', 'Git, CI/CD, staging environments, Kubernetes, and cloud platforms (AWS, Azure, GCP).', 'Troubleshooting WordPress issues, error handling']
  },
  {
    id: '4',
    title: 'Shopify Expert',
    category: 'Web Development',
    type: 'Remote',
    salary: " $700 - $2,500",
    description: 'specializing in store setup, theme customization, app development, and e-commerce optimization.',
    responsibilities: [
      "Develop, customize, and optimize Shopify stores, themes, and apps.",
      "Implement responsive and user-friendly designs for better UX/UI.",
      'Integrate third-party apps, payment gateways, and APIs.',
      'Optimize site performance, SEO, and conversion rates.',
      'Troubleshoot and resolve Shopify-related issues and bugs.',
      'Manage product listings, inventory, and store configurations.',
      'Ensure website security, speed, and mobile responsiveness.',
      'Collaborate with designers, marketers, and clients for business growth.',
    ],
    skills: ['Shopify Development', 'Programming Languages', 'E-commerce Optimization', 'API & App Integration', 'Frontend & UX/UI Design', 'Database & CMS Management', 'Problem-Solving & Debugging', 'Marketing & Analytics']
  },

  {
    id: '5',
    title: 'SEO Expert',
    category: 'Web Development',
    type: 'Remote',
    salary: "$700 - $2,500",
    description: 'specializing in website optimization, keyword strategy, and technical SEO to improve search rankings and online visibility.',
    responsibilities: [
      "Conduct keyword research and implement on-page & off-page SEO strategies.",
      "Optimize website structure, meta tags, URLs, and content for better rankings.",
      "Perform technical SEO audits to improve site speed, mobile-friendliness, and indexing.",
      "Develop and execute link-building strategies to increase domain authority.",
      "Monitor SEO performance using tools like Google Analytics, Search Console, and SEMrush.",
      "Stay updated with search engine algorithms and industry best practices.",
      "Collaborate with developers and content teams to enhance SEO-friendly content.",
      "Implement local SEO, voice search, and schema markup for better visibility.",
    ],
    skills: [
      'Keyword Research & Strategy',
      ' On-Page SEO',
      'Off-Page SEO',
      'Technical SEO',
      'Analytics & Tracking',
      'Content Optimization',
      ' Local SEO',
      'Algorithm Updates'
    ]
  },

  {
    id: '6',
    title: 'UI/UX Designer',
    category: 'Digital Design',
    type: 'Contract',
    salary: " $500 - $2,000",
    description: 'Design user experiences using Figma.',
    responsibilities: ['User research', 'Create wireframes', 'Design prototypes', 'Developer collaboration', 'User testing', 'Design iterations', 'Trend analysis'],
    skills: ['Figma', 'Sketch', 'Adobe XD', 'InVision', 'Usability Testing']
  },
  {
    id: '7',
    title: 'Creative Director',
    category: 'web Development',
    type: 'Remote',
    salary: "$1,000 - $3,500",
    description: 'leading branding, design, and visual storytelling to develop compelling digital and multimedia experiences',
    responsibilities: [
      "Develop and oversee branding, design, and visual storytelling strategies.",
      "Lead creative teams in UI/UX design, advertising, and multimedia projects.",
      "Ensure consistency in brand identity, messaging, and aesthetics.",
      "Collaborate with marketing, developers, and content teams for campaigns.",
      "Stay updated on design trends, technology, and industry innovations."
    ],
    skills: [
      ' Branding & Visual Identity'
      , 'Graphic & UI/UX Design (Adobe Creative Suite, Figma)',
      'Creative Strategy & Storytelling',
      ' Leadership & Team Management',
      'Marketing & Advertising Campaign',
      'Trend Analysis & Innovation'
    ]
  },

  {
    id: '8',
    title: 'Content Writer',
    category: 'Web Development',
    type: 'Remote',
    salary: "$500 - $2,000",
    description: 'specializing in creating engaging, SEO-optimized content for websites, blogs, and digital marketing campaigns.',
    responsibilities: [
      "  Write SEO-optimized, engaging, and informative content for blogs, websites, and marketing materials.",
      "Develop content strategies, editorial calendars, and content plans.",
      "Conduct research to ensure accuracy and relevance in content.",
      "Optimize content for readability, keywords, and search engine rankings.",
      "Collaborate with designers, marketers, and developers for content strategy.",
      "Proofread and edit content to ensure clarity, tone, and brand consistency."
    ],
    skills: [
      "SEO & Keyword Research",
      "Creative & Technical Writing",
      "Editing & Proofreading",
      "Content Strategy & Storytelling",
      "Research & Fact-Checking",
      "CMS (WordPress, Shopify, etc.)"
    ]
  },

  {
    id: '9',
    title: 'Motion Graphics Designer',
    category: 'Digital Design',
    type: 'Remote',
    salary: "$600 - $2,000",
    description: 'Produce animated content using After Effects.',
    responsibilities: ['Create motion graphics', 'Video editing', 'Visual effects', 'Storyboarding', 'Animation', 'Sound design', '3D modeling'],
    skills: ['Adobe After Effects', 'Cinema 4D', 'Premiere Pro', 'Illustrator', 'Sound Editing']
  },
  {
    id: '10',
    title: 'Product Designer',
    category: 'Digital Design',
    type: 'Remote',
    salary: "$700 - $2,500",
    description: 'Design digital products using Sketch.',
    responsibilities: ['User flows', 'Interactive prototypes', 'Design systems', 'User testing', 'Product strategy', 'Visual design', 'Design reviews'],
    skills: ['Sketch', 'InVision', 'Zeplin', 'User-Centered Design', 'Wireframing', 'Design Thinking']
  },
  {
    id: '11',
    title: 'Sales Manager',
    category: 'Sales',
    type: 'Remote',
    salary: "$1,000 - $3,500",
    description: 'Lead sales team to achieve revenue targets.',
    responsibilities: ['Develop sales strategies', 'Manage sales pipeline', 'Client acquisition', 'Negotiate contracts', 'Sales forecasting', 'Team training', 'Performance tracking'],
    skills: ['Salesforce', 'CRM', 'Lead Generation', 'Account Management', 'Cold Calling', 'Presentation Skills']
  },
  {
    id: '12',
    title: 'Account Executive',
    category: 'Sales',
    type: 'Remote',
    salary: "$800 - $2,500",
    description: 'Drive customer acquisition and revenue growth.',
    responsibilities: ['Prospect new clients', 'Build relationships', 'Sales presentations', 'Customer success', 'Revenue forecasting', 'Market analysis', 'Product knowledge'],
    skills: ['Salesforce', 'CRM', 'Lead Generation', 'Account Management', 'Cold Calling', 'Presentation Skills']
  },
  {
    id: '13',
    title: "Software Development Intern",
    category: "Web Development",
    type: "Remote",
    salary: "$500 - $1,500",
    description: "Gain hands-on experience in developing cutting-edge web applications while working with our senior development team.",
    responsibilities: [
      "Assist in development and maintenance of web applications",
      "Write clean, documented code using modern frameworks",
      "Collaborate with UX/UI designers and product managers",
      "Participate in code reviews and testing procedures",
      "Help troubleshoot and debug existing systems",
      "Contribute to technical documentation",
      "Attend daily standups and sprint planning meetings"
    ],
    skills: [
      "Basic understanding of JavaScript/TypeScript",
      "Familiarity with React or Angular frameworks",
      "Knowledge of REST API concepts",
      "Strong problem-solving abilities",
      "Excellent communication skills",
      "Ability to work in team environment",
      "Currently pursuing Computer Science degree"
    ]
  },

  {
    id: '14',
    title: "Technical Project Manager",
    category: "Management",
    type: "Remote",
    salary: "$1,000 - $3,500",
    description: "Optimize the performance of our company's Computer Information Systems and ensure project success.",
    responsibilities: [
      "Manage end-to-end project execution with cross-functional teams",
      "Develop comprehensive project plans aligning with business objectives",
      "Monitor and report on project milestones using JIRA/Asana",
      "Facilitate communication between technical and non-technical stakeholders",
      "Conduct risk analysis and implement mitigation strategies",
      "Manage project budgets up to $500k",
      "Oversee vendor negotiations and procurement processes"
    ],
    skills: [
      "Bachelor's in Computer Science or related field",
      "PMP or Scrum Master certification",
      "5+ years IT project management experience",
      "Expertise in SDLC methodologies",
      "Advanced JIRA/Confluence proficiency",
      "Strong financial analysis skills",
      "Excellent conflict resolution abilities"
    ]
  },

  {
    id: '15',
    title: "HR Manager",
    category: "Management",
    type: "Remote",
    salary: "$1,000 - $3,500",
    description: "overseeing recruitment, employee relations, and performance management while implementing HR tech solutions.",
    responsibilities: [
      "Oversee recruitment, onboarding, and talent management.",
      "Manage employee relations, performance reviews, and workplace policies.",
      "Implement HR technologies (HRIS, payroll, and benefits systems).",
      "Ensure compliance with labor laws and company policies.",
      "Foster a positive workplace culture and employee engagement."
    ],
    skills: [
      "Bachelor's in Computer Science or related field",
      "PMP or Scrum Master certification",
      "5+ years IT project management experience",
      "Expertise in SDLC methodologies",
      "Advanced JIRA/Confluence proficiency",
      "Strong financial analysis skills",
      "Excellent conflict resolution abilities"
    ]
  },

  {
    id: '16',
    title: "Sales Executive",
    category: "Sales",
    type: "Remote",
    salary: "$1,000 - $3,500",
    description: "Drive enterprise software sales through strategic relationship building.",
    responsibilities: [
      "Identify key accounts",
      "Quarterly sales planning",
      "Custom proposal development",
      "C-level negotiations",
      "Sales pipeline management",
      "Market analysis",
      "Cross-team collaboration"
    ],
    skills: [
      "5+ years tech sales experience",
      "CRM expertise (Salesforce)",
      "MEDDIC methodology",
      "Contract negotiation",
      "Public speaking",
      "MBA preferred",
      "Proven track record"
    ]
  },
  {
    id: '17',
    title: "IT Operations Manager",
    category: "Management",
    type: "Remote",
    salary: "$1,000 - $3,500",
    description: "Oversee global IT infrastructure and lead team of system administrators.",
    responsibilities: [
      "Budget planning ($2M+)",
      "Disaster recovery planning",
      "Vendor management",
      "Security compliance",
      "Team leadership (10+ staff)",
      "Technology roadmap",
      "Incident response"
    ],
    skills: [
      "CISSP certification",
      "Cloud migration experience",
      "ITIL framework",
      "Network architecture",
      "6+ years experience",
      "Cross-functional leadership",
      "Crisis management"
    ]
  },
  {
    id: '18',
    title: "Project Manager",
    category: "Management",
    type: "Remote",
    salary: "$1,000 - $3,500",
    description: "overseeing software development, team coordination, and project execution to ensure timely and efficient delivery.",
    responsibilities: [
      "Plan, manage, and oversee software development projects from initiation to completion.",
      "Coordinate team tasks, timelines, and resources to meet project goals.",
      "Ensure agile methodologies, best coding practices, and quality standards are followed.",
      "Communicate with stakeholders, clients, and cross-functional teams.",
      "Identify and mitigate risks, bottlenecks, and project challenges."
    ],
    skills: [
      "Project Management (Agile, Scrum, Waterfall)",
      "Team Leadership & Collaboration",
      " Software Development Lifecycle (SDLC)",
      "Risk Management & Problem-Solving",
      "Stakeholder Communication",
      "Time & Resource Management"
    ]
  },
  {
    id: '19',
    title: "Upwork Freelancer",
    category: "Freelancing",
    type: "Remote",
    salary: "$1,000 - $3,500",
    description: "specializing in profile optimization, client acquisition, and successful project management on the Upwork platform.",
    responsibilities: [
      "Optimize Upwork profile for visibility and credibility.",
      "Craft compelling proposals and bids to secure projects.",
      "Communicate effectively with clients to understand project needs.",
      "Deliver high-quality work while managing deadlines and expectations.",
      "Maintain a strong client relationship for repeat business and positive reviews."
    ],
    skills: [
      " Profile Optimization & Branding",
      "Proposal Writing & Client Communication",
      "Project & Time Management",
      " Negotiation & Pricing Strategies",
      "Freelancing & Remote Work Best Practices"
    ]
  },
  {
    id: '20',
    title: "Fiver",
    category: "Freelancing",
    type: "Remote",
    salary: "$1,000 - $3,500",
    description: "specializes in optimizing profiles, creating high-converting gigs, and securing projects to maximize earnings on the Fiverr platform.",
    responsibilities: [
      " Optimize Fiverr profiles and gigs for better visibility and conversions",
      "Research and implement competitive pricing and keyword strategies",
      "Write compelling gig descriptions and use effective visuals",
      "Engage with clients, respond to inquiries, and manage orders efficiently",
      " Deliver high-quality services while maintaining positive reviews and ratings",
      "Analyze Fiverr analytics to improve performance and sales",
      "Stay updated with Fiverr algorithm changes and best practices"
    ],
    skills: [
      " Profile Optimization & Branding",
      "Proposal Writing & Client Communication",
      "Project & Time Management",
      " Negotiation & Pricing Strategies",
      "Freelancing & Remote Work Best Practices"
    ]
  },
]

const Careers: React.FC = () => {
  const [filteredJobs, setFilteredJobs] = useState<Job[]>(jobs);
  const [expandedJobId, setExpandedJobId] = useState<string | null>(null);
  const [showAllButton, setShowAllButton] = useState<boolean>(false);
  const navigate = useNavigate();
  const cardRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const handleFilter = (category: string) => {
    const filtered = jobs.filter(job => job.category === category);
    setFilteredJobs(filtered);
    setShowAllButton(true);
  };

  const toggleDetails = (id: string) => {
    setExpandedJobId(expandedJobId === id ? null : id);
  };

  const applyNow = (id: string) => {
    navigate(`/job-application?id=${id}`);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (expandedJobId && cardRefs.current[expandedJobId] && !cardRefs.current[expandedJobId]?.contains(event.target as Node)) {
      setExpandedJobId(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [expandedJobId]);

  return (
    <div className="min-h-screen p-6 pt-36 bg-gradient-primary">
      <h2 className="mb-6 text-3xl font-bold text-center text-white font-orbitron">Current <span className='text-yellow'>
        Openings</span></h2>
      <div className="flex flex-wrap justify-center mb-6 space-x-4 ">
        {['Web Development', 'Digital Design', 'Sales', 'Management', 'Freelancing'].map((category) => (
          <button
            key={category}
            className="px-4 py-2 mb-2 font-semibold text-white transition-all duration-150 ease-linear scale-95 rounded-lg shadow-lg hover:scale-100 hover:text-yellow bg-primary hover:bg-secondary sm:mb-0"
            onClick={() => handleFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>



      <div id="jobs-list" className="max-w-4xl mx-auto space-y-4">
        {filteredJobs.map((job) => (
          <div key={job.id} className="p-4 shadow-xl bg-primary backdrop-blur-lg rounded-xl" ref={el => cardRefs.current[job.id] = el}>
            <div className="flex items-center justify-between p-3 transition-all duration-300 rounded-lg cursor-pointer hover:bg-white/5" onClick={() => toggleDetails(job.id)}>
              <span className="text-lg font-semibold text-white font-orbitron">{job.title}</span>
              <button
                className="px-3 py-1 font-semibold text-[#FFFFFF] border  transition-all duration-300 rounded-lg bg-primary hover:bg-gradient-primary"
              >
                {expandedJobId === job.id ? '-' : '+'}
              </button>
            </div>

            {expandedJobId === job.id && (
              <div className="mt-3 text-white">
                <table className="w-full mb-3">
                  <tbody>
                    <tr>
                      <td className="text-lg font-medium text-white font-orbitron">Position:</td>
                      <td>{job.title}</td>
                    </tr>
                    <tr>
                      <td className="text-lg font-medium text-white font-orbitron">Category:</td>
                      <td>{job.category}</td>
                    </tr>
                    <tr>
                      <td className="text-lg font-medium text-white font-orbitron" >Type:</td>
                      <td>{job.type}</td>
                    </tr>

                    <tr>
                      <td className="text-lg font-medium text-white font-orbitron" >Salary:</td>
                      <td>{job.salary}</td>
                    </tr>
                  </tbody>
                </table>
                <p className="mb-4 text-lg font-bold text-yellow font-orbitron ">{job.description}</p>

                <div className="mb-4">
                  <h3 className="mb-2 text-xl font-semibold text-white font-orbitron">Responsibilities:</h3>
                  <ul className="space-y-2">
                    {job.responsibilities.map((res, index) => (
                      <li key={index} className="text-white"><span className="pr-1.5 font-bold text-yellow ">•</span> {res}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 text-xl font-semibold text-white font-orbitron">Required Skills:</h3>
                  <ul className="space-y-2">
                    {job.skills.map((skill, index) => (
                      <li key={index} className="text-[#FFFFFF]"><span className="font-bold text-yellow pr-1.5">✓</span> {skill}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-end">
                  <button
                    className="border px-4 py-2 mt-4 font-semibold transition-all duration-300 rounded-lg text-[#FFFFFF] bg-primary hover:bg-secondary"
                    onClick={() => navigate('/job-application')}
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      {showAllButton && (
        <button
          className="block px-5 py-2 mx-auto my-6 font-semibold text-purple-900 transition-all duration-300 bg-white rounded-lg shadow-lg hover:bg-purple-50"
          onClick={() => {
            setFilteredJobs(jobs);
            setShowAllButton(false);
          }}
        >
          All Careers
        </button>
      )}
    </div>
  );
};

export default Careers;
import { Button } from "@/components/ui/button";
import { Download, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Resume = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation - hidden when printing */}
      <div className="print:hidden fixed top-4 left-4 right-4 flex justify-between items-center z-10 gap-2">
        <Link to="/">
          <Button variant="outline" className="bg-white/90 border-gray-300 text-gray-700 hover:bg-gray-100">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Button>
        </Link>
        <Button asChild className="bg-black text-white hover:bg-gray-800">
          <a href="/Fredrick_Kitonyi_Resume.pdf" download="Fredrick_Kitonyi_Resume.pdf">
            <Download className="w-4 h-4 mr-2" />
            Download PDF
          </a>
        </Button>
      </div>

      {/* Resume Content - ATS Optimized */}
      <div className="max-w-[8.5in] mx-auto px-4 sm:px-8 py-12 print:py-0 print:px-[0.5in] print:max-w-none">
        {/* Header */}
        <header className="text-center border-b-2 border-black pb-4 mb-6 mt-12 print:mt-0">
          <h1 className="text-3xl font-bold uppercase tracking-wide mb-2">Fredrick Kitonyi Kiio</h1>
          <p className="text-lg font-semibold mb-2">Software Engineering Student | Full Stack Developer | Tech Innovator</p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-xs sm:text-sm">
            <span>Email: frimattechnologies016@gmail.com</span>
            <span className="hidden sm:inline">|</span>
            <span>Phone: +254 112 277 289</span>
            <span className="hidden sm:inline">|</span>
            <span>Location: Nairobi, Kenya</span>
          </div>
        </header>

        {/* Objective */}
        <section className="mb-6">
          <h2 className="text-lg font-bold uppercase border-b border-black mb-2">Objective</h2>
          <p className="text-sm leading-relaxed">
            Passionate Software Engineering student at Zetech University with strong foundation from ICT Diploma at ICS Technical College. 
            Committed to building innovative solutions and contributing to cutting-edge software projects with expertise in full-stack development and emerging technologies.
          </p>
        </section>

        {/* Education */}
        <section className="mb-6">
          <h2 className="text-lg font-bold uppercase border-b border-black mb-2">Education</h2>
          
          <div className="mb-4">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
              <h3 className="font-bold text-sm sm:text-base">Diploma in Software Engineering - Zetech University, Nairobi Campus</h3>
              <span className="text-xs sm:text-sm text-gray-600 sm:text-black sm:whitespace-nowrap">2023 - 2026 (Expected)</span>
            </div>
            <p className="text-sm italic">Current GPA: 3.9/4.0</p>
            <p className="text-sm mt-1">Relevant Coursework: Object-Oriented Programming, Web Development (React, Node.js, PHP), Database Systems, Data Structures & Algorithms, Mobile App Development, Cloud Computing & DevOps, AI & Machine Learning, Cybersecurity, Agile Methodologies</p>
          </div>

          <div className="mb-4">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
              <h3 className="font-bold text-sm sm:text-base">Diploma in ICT - ICS Technical College, Nairobi</h3>
              <span className="text-xs sm:text-sm text-gray-600 sm:text-black sm:whitespace-nowrap">2022 - 2023</span>
            </div>
            <p className="text-sm italic">GPA: 3.8/4.0</p>
            <p className="text-sm mt-1">Relevant Coursework: Computer Fundamentals, Programming (Java, Python), Web Development, Database Design & SQL, Networking, System Administration</p>
          </div>

          <div className="mb-4">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
              <h3 className="font-bold text-sm sm:text-base">KCSE - Katelembo Centre of Excellence Boys High School</h3>
              <span className="text-xs sm:text-sm text-gray-600 sm:text-black sm:whitespace-nowrap">2015 - 2018</span>
            </div>
            <p className="text-sm">Focus: Mathematics, Computer Studies, Physics</p>
          </div>

          <div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
              <h3 className="font-bold text-sm sm:text-base">KCPE - Machakos Primary School</h3>
              <span className="text-xs sm:text-sm text-gray-600 sm:text-black sm:whitespace-nowrap">2007 - 2014</span>
            </div>
          </div>
        </section>

        {/* Professional Experience */}
        <section className="mb-6">
          <h2 className="text-lg font-bold uppercase border-b border-black mb-2">Professional Experience</h2>
          
          <div className="mb-4">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
              <h3 className="font-bold text-sm sm:text-base">Freelance Web Developer - Self-Employed</h3>
              <span className="text-xs sm:text-sm text-gray-600 sm:text-black sm:whitespace-nowrap">2023 - Present</span>
            </div>
            <ul className="text-sm list-disc ml-5 mt-1">
              <li>Developed 15+ responsive websites for local businesses using React, JavaScript, and CSS frameworks</li>
              <li>Improved client website loading speeds by 40% through optimization techniques</li>
              <li>Maintained 100% client satisfaction rate through quality deliverables and communication</li>
            </ul>
          </div>

          <div className="mb-4">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
              <h3 className="font-bold text-sm sm:text-base">Software Development Intern - Zetech University Innovation Hub</h3>
              <span className="text-xs sm:text-sm text-gray-600 sm:text-black sm:whitespace-nowrap">2024 (4 months)</span>
            </div>
            <ul className="text-sm list-disc ml-5 mt-1">
              <li>Developed student portal enhancement features using React and Node.js</li>
              <li>Contributed to 3 open-source projects hosted by Zetech GitHub</li>
              <li>Led a team of 5 students in hackathon, winning 1st place</li>
              <li>Mentored 10+ junior students in programming fundamentals</li>
            </ul>
          </div>

          <div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
              <h3 className="font-bold text-sm sm:text-base">Cyber Cafe Assistant - Community Cyber Cafe</h3>
              <span className="text-xs sm:text-sm text-gray-600 sm:text-black sm:whitespace-nowrap">2023 - 2024</span>
            </div>
            <ul className="text-sm list-disc ml-5 mt-1">
              <li>Assisted 50+ customers daily with digital services and computer usage</li>
              <li>Maintained 99% uptime for all systems through proactive maintenance</li>
            </ul>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-6">
          <h2 className="text-lg font-bold uppercase border-b border-black mb-2">Projects</h2>
          
          <div className="mb-2">
            <h3 className="font-bold inline">Portfolio Website</h3>
            <span className="text-sm"> - React, TypeScript, Tailwind CSS. Personal portfolio with responsive design and modern animations.</span>
          </div>
          
          <div className="mb-2">
            <h3 className="font-bold inline">Zetech Student Portal Enhancement</h3>
            <span className="text-sm"> - React, Node.js, PostgreSQL. Features: Real-time notifications, grade analytics, course planning.</span>
          </div>
          
          <div className="mb-2">
            <h3 className="font-bold inline">Campus Event Management System</h3>
            <span className="text-sm"> - Java Spring Boot, MySQL, Angular. Full-stack app for event scheduling, RSVP, and reporting.</span>
          </div>
          
          <div>
            <h3 className="font-bold inline">Cybersecurity Awareness App</h3>
            <span className="text-sm"> - React Native, Firebase. Mobile app with interactive quizzes and security tips.</span>
          </div>
        </section>

        {/* Technical Skills */}
        <section className="mb-6">
          <h2 className="text-lg font-bold uppercase border-b border-black mb-2">Technical Skills</h2>
          <div className="text-sm space-y-1">
            <p><strong>Programming:</strong> Java, JavaScript, Python, C++, TypeScript, PHP, HTML5, CSS3, SQL</p>
            <p><strong>Frameworks:</strong> React, Angular, Spring Boot, Node.js, Express.js, Django, Bootstrap, Tailwind CSS</p>
            <p><strong>Databases:</strong> PostgreSQL, MySQL, MongoDB, Oracle Database, Firebase, Redis</p>
            <p><strong>Cloud Platforms:</strong> AWS (EC2, S3, Lambda), Google Cloud Platform, Microsoft Azure, Heroku</p>
            <p><strong>Tools:</strong> Git, Docker, Kubernetes, Jenkins, VS Code, IntelliJ IDEA, Postman, Jira</p>
            <p><strong>Methodologies:</strong> Agile/Scrum, DevOps, CI/CD, Test-Driven Development, Object-Oriented Design</p>
          </div>
        </section>

        {/* Achievements & Certifications */}
        <section className="mb-6">
          <h2 className="text-lg font-bold uppercase border-b border-black mb-2">Achievements & Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 text-sm">
            <div>
              <p className="font-semibold mb-1">Achievements:</p>
              <ul className="list-disc ml-5">
                <li>Dean's List - All Semesters (2023-2024)</li>
                <li>Zetech Innovation Challenge Winner 2024</li>
                <li>Kenya University Software Engineering Competition - 1st Place</li>
                <li>Zetech Hackathon 2024 - Grand Prize Winner</li>
                <li>Google Developer Student Club - Lead Developer</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold mb-1">Certifications:</p>
              <ul className="list-disc ml-5">
                <li>Oracle Certified Associate - Java SE 8</li>
                <li>AWS Certified Cloud Practitioner</li>
                <li>Google Cloud Professional Developer</li>
                <li>Microsoft Azure Fundamentals (AZ-900)</li>
                <li>Scrum Master Certified (SMC)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* References */}
        <section className="mb-6">
          <h2 className="text-lg font-bold uppercase border-b border-black mb-2">References</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
            <div>
              <p className="font-bold">Mr. Boniface Musila</p>
              <p>Phone: 0724 035 090</p>
            </div>
            <div>
              <p className="font-bold">Mr. Daniel Maundu</p>
              <p>Phone: 0100 325 115</p>
            </div>
          </div>
        </section>

        {/* Print instructions - hidden when printing */}
        <div className="print:hidden text-center mt-8 pb-8 text-gray-500 text-sm">
          <p>Click "Download PDF" to save this resume. Use your browser's print dialog and select "Save as PDF".</p>
        </div>
      </div>

      {/* Print-specific styles */}
      <style>{`
        @media print {
          @page {
            size: letter;
            margin: 0.5in;
          }
          body {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
        }
      `}</style>
    </div>
  );
};

export default Resume;

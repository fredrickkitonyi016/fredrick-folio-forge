import { Button } from "@/components/ui/button";
import { Download, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const ResumeEverlyne = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-white text-black" style={{ fontFamily: '"Times New Roman", Times, serif' }}>
      {/* Navigation - hidden when printing */}
      <div className="print:hidden fixed top-4 left-4 right-4 flex justify-between items-center z-10 gap-2">
        <Link to="/resume">
          <Button variant="outline" className="bg-white/90 border-gray-300 text-gray-700 hover:bg-gray-100">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
        </Link>
        <Button onClick={handlePrint} className="bg-black text-white hover:bg-gray-800">
          <Download className="w-4 h-4 mr-2" />
          Download PDF
        </Button>
      </div>

      {/* Resume Content - ATS Optimized */}
      <div className="max-w-[8.5in] mx-auto px-4 sm:px-8 py-12 print:py-0 print:px-[0.5in] print:max-w-none">
        {/* Header */}
        <header className="text-center border-b-2 border-black pb-4 mb-6 mt-12 print:mt-0">
          <h1 className="text-3xl font-bold uppercase tracking-wide mb-2">Everlyne Musembi</h1>
          <p className="text-lg font-semibold mb-2">Animation &amp; Graphics Design Professional | Visual Storyteller | Motion Designer</p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-xs sm:text-sm">
            <span>Email: everlynewayua27@gmail.com</span>
            <span className="hidden sm:inline">|</span>
            <span>Phone: 0707 276 874</span>
            <span className="hidden sm:inline">|</span>
            <span>Location: Nairobi, Kenya</span>
            <span className="hidden sm:inline">|</span>
            <span>LinkedIn: Evelyn Wayua</span>
          </div>
        </header>

        {/* Professional Summary */}
        <section className="mb-6">
          <h2 className="text-lg font-bold uppercase border-b border-black mb-2">Professional Summary</h2>
          <p className="text-sm leading-relaxed">
            Creative and detail-oriented Animation and Graphics Design professional pursuing a Diploma in Animation
            and Graphics Design at the Kenya Institute of Mass Communication (KIMC). Skilled in 2D/3D animation,
            visual storytelling, motion graphics, branding, and digital illustration. Passionate about producing
            visually compelling content that communicates ideas clearly and elevates brands across print, broadcast,
            and digital platforms.
          </p>
        </section>

        {/* Education */}
        <section className="mb-6">
          <h2 className="text-lg font-bold uppercase border-b border-black mb-2">Educational Background</h2>

          <div className="mb-4">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
              <h3 className="font-bold text-sm sm:text-base">Diploma in Animation and Graphics Design — Kenya Institute of Mass Communication (KIMC)</h3>
              <span className="text-xs sm:text-sm text-gray-600 sm:text-black sm:whitespace-nowrap">Sep 2017 – 2025</span>
            </div>
            <p className="text-sm mt-1">
              Relevant Coursework: 2D &amp; 3D Animation, Motion Graphics, Character Design, Storyboarding,
              Digital Illustration, Video Editing, Visual Effects (VFX), Branding &amp; Identity Design, Typography,
              UI/UX Fundamentals, Media Production.
            </p>
          </div>

          <div className="mb-4">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
              <h3 className="font-bold text-sm sm:text-base">Certificate in Computer Packages — Kenya Institute of Management</h3>
              <span className="text-xs sm:text-sm text-gray-600 sm:text-black sm:whitespace-nowrap">May 2022 – Aug 2022</span>
            </div>
            <p className="text-sm mt-1">Coursework: MS Word, MS Excel, MS PowerPoint, Internet &amp; Email, Computer Fundamentals.</p>
          </div>

          <div className="mb-4">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
              <h3 className="font-bold text-sm sm:text-base">KCSE — Vyulya Girls High School</h3>
              <span className="text-xs sm:text-sm text-gray-600 sm:text-black sm:whitespace-nowrap">2018 – 2021</span>
            </div>
            <p className="text-sm">Mean Grade: C Plus</p>
          </div>

          <div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
              <h3 className="font-bold text-sm sm:text-base">KCPE — Machakos Primary School</h3>
              <span className="text-xs sm:text-sm text-gray-600 sm:text-black sm:whitespace-nowrap">2012 – 2017</span>
            </div>
          </div>
        </section>

        {/* Professional Experience */}
        <section className="mb-6">
          <h2 className="text-lg font-bold uppercase border-b border-black mb-2">Professional Experience</h2>

          <div className="mb-4">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
              <h3 className="font-bold text-sm sm:text-base">Animation &amp; Graphics Design Trainee — Kenya Institute of Mass Communication</h3>
              <span className="text-xs sm:text-sm text-gray-600 sm:text-black sm:whitespace-nowrap">2023 – 2025</span>
            </div>
            <ul className="text-sm list-disc ml-5 mt-1">
              <li>Produced 2D and 3D animated shorts, motion graphics, and explainer videos for coursework and client-based studio projects.</li>
              <li>Designed brand identity assets — logos, posters, social media creatives, and marketing collateral — for real-world briefs.</li>
              <li>Collaborated in production teams on storyboarding, character design, rigging, and post-production editing.</li>
              <li>Applied color theory, typography, and composition principles to deliver visually consistent brand systems.</li>
            </ul>
          </div>

          <div className="mb-4">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
              <h3 className="font-bold text-sm sm:text-base">Freelance Graphics Designer — Self-Employed</h3>
              <span className="text-xs sm:text-sm text-gray-600 sm:text-black sm:whitespace-nowrap">2022 – Present</span>
            </div>
            <ul className="text-sm list-disc ml-5 mt-1">
              <li>Delivered logo design, branding, flyers, business cards, and social media graphics for SMEs and personal brands.</li>
              <li>Managed the full creative pipeline from client briefing and concept sketches to final delivery.</li>
              <li>Maintained a 100% client satisfaction rate through timely revisions and clear communication.</li>
            </ul>
          </div>
        </section>

        {/* Technical Skills */}
        <section className="mb-6">
          <h2 className="text-lg font-bold uppercase border-b border-black mb-2">Technical Skills</h2>
          <div className="text-sm space-y-1">
            <p><strong>Animation:</strong> Adobe Animate, Autodesk Maya, Blender, Toon Boom Harmony, After Effects</p>
            <p><strong>Graphics Design:</strong> Adobe Photoshop, Illustrator, InDesign, CorelDRAW, Canva, Figma</p>
            <p><strong>Video &amp; Motion:</strong> Adobe Premiere Pro, After Effects, DaVinci Resolve, Final Cut Pro</p>
            <p><strong>Core Disciplines:</strong> Storyboarding, Character Design, Rigging, Motion Graphics, Branding, Typography, Color Theory, VFX, UI/UX Basics</p>
            <p><strong>Office Tools:</strong> MS Word, MS Excel, MS PowerPoint, Google Workspace</p>
          </div>
        </section>

        {/* Soft Skills */}
        <section className="mb-6">
          <h2 className="text-lg font-bold uppercase border-b border-black mb-2">Soft Skills</h2>
          <div className="text-sm grid grid-cols-1 sm:grid-cols-2 gap-x-8">
            <ul className="list-disc ml-5">
              <li>Creative problem solving &amp; visual thinking</li>
              <li>Effective client communication &amp; briefing</li>
              <li>Time management &amp; meeting deadlines</li>
            </ul>
            <ul className="list-disc ml-5">
              <li>Teamwork &amp; production collaboration</li>
              <li>Attention to detail &amp; quality control</li>
              <li>Adaptability &amp; continuous learning</li>
            </ul>
          </div>
        </section>

        {/* Key Projects */}
        <section className="mb-6">
          <h2 className="text-lg font-bold uppercase border-b border-black mb-2">Key Projects</h2>

          <div className="mb-2">
            <h3 className="font-bold inline">2D Animated Short Film</h3>
            <span className="text-sm"> — Wrote, storyboarded, and animated a short film exploring cultural storytelling; produced in Adobe Animate with After Effects compositing.</span>
          </div>

          <div className="mb-2">
            <h3 className="font-bold inline">Brand Identity System for SME</h3>
            <span className="text-sm"> — Delivered logo, color system, typography guide, business cards, and social templates in Adobe Illustrator and Photoshop.</span>
          </div>

          <div className="mb-2">
            <h3 className="font-bold inline">Explainer Motion Graphics Video</h3>
            <span className="text-sm"> — Designed and animated a 60-second explainer using After Effects, including voice-over sync, kinetic typography, and iconography.</span>
          </div>

          <div>
            <h3 className="font-bold inline">3D Character Model &amp; Rig</h3>
            <span className="text-sm"> — Modeled, textured, and rigged a stylized 3D character in Blender for animation coursework.</span>
          </div>
        </section>

        {/* Achievements & Certifications */}
        <section className="mb-6">
          <h2 className="text-lg font-bold uppercase border-b border-black mb-2">Achievements &amp; Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 text-sm">
            <div>
              <p className="font-semibold mb-1">Achievements:</p>
              <ul className="list-disc ml-5">
                <li>Recognized for Best Student Animation Project at KIMC</li>
                <li>Featured designer in KIMC creative showcase exhibitions</li>
                <li>Successfully delivered 20+ freelance design briefs to full client satisfaction</li>
                <li>Head of Sound Instruments, YCS — Vyulya Girls High School (2019 – 2021)</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold mb-1">Certifications:</p>
              <ul className="list-disc ml-5">
                <li>Diploma in Animation &amp; Graphics Design — KIMC</li>
                <li>Certificate in Computer Packages — Kenya Institute of Management</li>
                <li>Adobe Creative Suite Proficiency (Photoshop, Illustrator, After Effects)</li>
                <li>Introduction to Blender 3D — Online Certification</li>
                <li>Digital Marketing &amp; Social Media Design — Online Certification</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="mb-6">
          <h2 className="text-lg font-bold uppercase border-b border-black mb-2">Leadership Positions</h2>
          <ul className="text-sm list-disc ml-5">
            <li>Head of Sound Instruments, YCS — Vyulya Girls High School (2019 – 2021)</li>
            <li>Member of the Creative Arts &amp; Media Club — Kenya Institute of Mass Communication</li>
          </ul>
        </section>

        {/* Personal Attributes */}
        <section className="mb-6">
          <h2 className="text-lg font-bold uppercase border-b border-black mb-2">Personal Attributes</h2>
          <ul className="text-sm list-disc ml-5 grid grid-cols-1 sm:grid-cols-2">
            <li>Honesty and Integrity</li>
            <li>Hard Work &amp; Dedication</li>
            <li>God Fearing</li>
            <li>Respectful &amp; Team-Oriented</li>
            <li>Commitment to Excellence</li>
            <li>Creative &amp; Detail-Oriented</li>
          </ul>
        </section>

        {/* Hobbies */}
        <section className="mb-6">
          <h2 className="text-lg font-bold uppercase border-b border-black mb-2">Hobbies &amp; Interests</h2>
          <ul className="text-sm list-disc ml-5">
            <li>Charity work and community volunteering</li>
            <li>Hiking and outdoor exploration</li>
            <li>Watching animation, films, and studying visual storytelling</li>
          </ul>
        </section>

        {/* Referees */}
        <section className="mb-6">
          <h2 className="text-lg font-bold uppercase border-b border-black mb-2">Referees</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
            <div>
              <p className="font-bold">Md. Lilian Maina</p>
              <p>Lecturer, Film Department</p>
              <p>Kenya Institute of Mass Communication</p>
              <p>P.O. Box 42422-00100, Nairobi</p>
              <p>Phone: 0718 834 066</p>
            </div>
            <div>
              <p className="font-bold">Mr. Denish Otieno</p>
              <p>Head of Film Department</p>
              <p>Kenya Institute of Mass Communication</p>
              <p>P.O. Box 42422-00100, Nairobi</p>
              <p>Phone: 0708 262 895</p>
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
          @page { size: letter; margin: 0.5in; }
          html, body {
            background: #ffffff !important;
            color: #000000 !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          section { break-inside: avoid; page-break-inside: avoid; }
          h1, h2, h3 {
            break-after: avoid; page-break-after: avoid;
            break-inside: avoid; page-break-inside: avoid;
          }
          ul, li, p { break-inside: avoid; page-break-inside: avoid; }
          h2 { border-bottom: 1px solid #000 !important; }
          header { border-bottom: 2px solid #000 !important; }
          .print\\:hidden { display: none !important; }
        }
      `}</style>
    </div>
  );
};

export default ResumeEverlyne;

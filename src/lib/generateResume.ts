import jsPDF from "jspdf";

export function generateResumePDF() {
  const doc = new jsPDF({ unit: "pt", format: "a4" });
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 40;
  const contentWidth = pageWidth - margin * 2;
  let y = margin;

  const PRIMARY: [number, number, number] = [14, 165, 233]; // cyan/blue
  const DARK: [number, number, number] = [30, 41, 59];
  const MUTED: [number, number, number] = [100, 116, 139];

  const ensureSpace = (need: number) => {
    if (y + need > pageHeight - margin) {
      doc.addPage();
      y = margin;
    }
  };

  const setFont = (
    size: number,
    style: "normal" | "bold" | "italic" = "normal",
    color: [number, number, number] = DARK,
  ) => {
    doc.setFont("helvetica", style);
    doc.setFontSize(size);
    doc.setTextColor(color[0], color[1], color[2]);
  };

  const writeLines = (
    text: string,
    size: number,
    style: "normal" | "bold" | "italic" = "normal",
    color: [number, number, number] = DARK,
    lineGap = 4,
  ) => {
    setFont(size, style, color);
    const lines = doc.splitTextToSize(text, contentWidth) as string[];
    lines.forEach((line) => {
      ensureSpace(size + lineGap);
      doc.text(line, margin, y);
      y += size + lineGap;
    });
  };

  const sectionHeader = (num: string, title: string) => {
    y += 8;
    ensureSpace(40);
    setFont(9, "bold", PRIMARY);
    doc.text(num, margin, y);
    setFont(14, "bold", DARK);
    doc.text(title, margin + 28, y);
    y += 6;
    doc.setDrawColor(PRIMARY[0], PRIMARY[1], PRIMARY[2]);
    doc.setLineWidth(1);
    doc.line(margin, y, margin + 60, y);
    y += 14;
  };

  const bullet = (text: string) => {
    setFont(10, "normal", DARK);
    const lines = doc.splitTextToSize(text, contentWidth - 14) as string[];
    lines.forEach((line, idx) => {
      ensureSpace(14);
      if (idx === 0) {
        doc.setTextColor(PRIMARY[0], PRIMARY[1], PRIMARY[2]);
        doc.text("•", margin + 2, y);
        doc.setTextColor(DARK[0], DARK[1], DARK[2]);
      }
      doc.text(line, margin + 14, y);
      y += 13;
    });
  };

  // ===== Header =====
  doc.setFillColor(15, 23, 42);
  doc.rect(0, 0, pageWidth, 110, "F");
  setFont(26, "bold", [255, 255, 255]);
  doc.text("S. THARUN", margin, 50);
  setFont(12, "normal", [148, 197, 245]);
  doc.text("CSE (AI & ML) Student  |  AI & Machine Learning Enthusiast", margin, 70);
  setFont(9, "normal", [203, 213, 225]);
  doc.text(
    "tharuneukaristheraju778@gmail.com  •  +91 93924 73635  •  Ananthapuramu, India",
    margin,
    88,
  );
  doc.text(
    "linkedin.com/in/tharun-raju-5806232bb   •   github.com/Tharun778021",
    margin,
    102,
  );
  y = 140;

  // ===== About =====
  sectionHeader("01.", "About");
  writeLines(
    "Passionate Computer Science student specializing in Artificial Intelligence & Machine Learning at Srinivasa Ramanujan Institute of Technology. Hands-on experience in building ML models, data preprocessing, and deploying AI solutions on cloud infrastructure. Driven by transforming raw data into actionable insights and creating intelligent systems that solve real-world problems.",
    10,
    "normal",
    MUTED,
  );

  // ===== Experience =====
  sectionHeader("02.", "Experience");
  const experiences = [
    {
      title: "AI Skills & Prompt Engineering Intern",
      company: "National Informatics Centre (NIC), Anantapuramu",
      duration: "May – June 2025  |  Anantapuramu, Andhra Pradesh",
      points: [
        "Completed internship under the Ministry of Electronics and Information Technology (MeitY), Government of India.",
        "Gained hands-on experience in Artificial Intelligence tools and Prompt Engineering techniques.",
        "Contributed to integrating AI technologies into government workflows to improve efficiency and service delivery.",
        "Explored applications of emerging technologies in digital governance and public administration.",
        "Mentored by Bharathi Madam under the guidance of the District Informatics Officer, Anantapuramu.",
      ],
      tech: "AI • Prompt Engineering • Generative AI • Digital Governance",
    },
    {
      title: "AWS AI & ML Virtual Intern",
      company: "EduSkills Foundation",
      duration: "April – June 2025  |  Virtual (10 weeks)",
      points: [
        "Developed machine learning models for employee promotion prediction using Python.",
        "Gained hands-on experience with AWS cloud services for AI/ML deployment.",
        "Performed data preprocessing, cleaning, and feature engineering on real-world datasets.",
        "Created flexible model objects capable of handling various data inputs.",
        "Collaborated with team members following Agile methodologies.",
      ],
      tech: "Python • AWS • Machine Learning • Data Analysis • Cloud Computing",
    },
  ];
  experiences.forEach((exp) => {
    ensureSpace(50);
    setFont(11, "bold", DARK);
    doc.text(exp.title, margin, y);
    y += 14;
    setFont(10, "italic", PRIMARY);
    doc.text(exp.company, margin, y);
    y += 12;
    setFont(9, "normal", MUTED);
    doc.text(exp.duration, margin, y);
    y += 12;
    exp.points.forEach(bullet);
    setFont(8, "italic", MUTED);
    ensureSpace(12);
    doc.text(exp.tech, margin, y);
    y += 16;
  });

  // ===== Education =====
  sectionHeader("03.", "Education");
  setFont(11, "bold", DARK);
  doc.text("Bachelor of Technology — Computer Science & Engineering (AI & ML)", margin, y);
  y += 14;
  setFont(10, "italic", PRIMARY);
  doc.text("Srinivasa Ramanujan Institute of Technology, Ananthapuramu", margin, y);
  y += 12;
  setFont(9, "normal", MUTED);
  doc.text("2023 – 2027 (Expected)  •  NAAC 'A' Grade  •  NBA Accredited  •  AICTE Approved", margin, y);
  y += 14;
  setFont(9, "bold", DARK);
  doc.text("Key Coursework:", margin, y);
  y += 12;
  writeLines(
    "Machine Learning, Deep Learning, Data Structures, Algorithms, Database Systems, Python Programming, Cloud Computing, Natural Language Processing.",
    10,
    "normal",
    MUTED,
  );

  // ===== Projects =====
  sectionHeader("04.", "Projects");
  const projects = [
    {
      title: "AI Website Copy Generator for Local Businesses",
      tag: "AI / NLP  •  Proficiency 95%",
      desc: "Intelligent content generation system that crafts conversion-optimized website copy for local businesses using prompt engineering and AI workflows — homepage copy, service descriptions, and strong CTAs tailored per business tone.",
      skills: "Prompt Engineering, Web Copywriting, Conversion Messaging, Client Requirement Analysis, AI Content Workflows",
    },
    {
      title: "Licence Plate Detector",
      tag: "Computer Vision  •  Proficiency 90%  •  github.com/Tharun778021/licence-plate-detector",
      desc: "Computer vision system that detects and recognizes vehicle licence plates from images and video streams; combines object detection with OCR for parking, traffic, and security use cases.",
      skills: "Computer Vision, OpenCV, OCR, Python, Image Processing",
    },
    {
      title: "Weather Analysis",
      tag: "Data Science  •  Proficiency 92%  •  github.com/Tharun778021/weather-analysis",
      desc: "End-to-end weather data analysis exploring historical climate patterns and visualizing trends across temperature, humidity, and precipitation using Python data science tools.",
      skills: "Python, Pandas, NumPy, Matplotlib, Data Visualization, EDA",
    },
    {
      title: "Student Talents",
      tag: "Web App  •  Proficiency 88%  •  github.com/Tharun778021/talent-pathways-08",
      desc: "Modern web application that helps students explore career pathways, discover relevant skills, and connect with opportunities through a clean, responsive interface.",
      skills: "React, TypeScript, Tailwind CSS, Vite, UI/UX Design",
    },
    {
      title: "Smart Gov Diary",
      tag: "GovTech Web App  •  Proficiency 90%  •  github.com/Tharun778021/smart-gov-diary",
      desc: "Digital diary application that streamlines government office workflows — replacing paper registers with a secure, searchable platform for officers to log activities and maintain records.",
      skills: "React, TypeScript, Tailwind CSS, Vite, Digital Governance, UI/UX",
    },
  ];
  projects.forEach((p) => {
    ensureSpace(60);
    setFont(11, "bold", DARK);
    doc.text(p.title, margin, y);
    y += 13;
    setFont(8, "italic", PRIMARY);
    doc.text(p.tag, margin, y);
    y += 12;
    writeLines(p.desc, 10, "normal", MUTED);
    setFont(9, "bold", DARK);
    ensureSpace(12);
    doc.text("Skills:", margin, y);
    setFont(9, "normal", MUTED);
    doc.text(p.skills, margin + 36, y);
    y += 16;
  });

  // ===== Skills =====
  sectionHeader("05.", "Skills");
  const skills = [
    ["Languages", "Python (90%), SQL (75%), JavaScript (65%)"],
    ["AI / ML", "Machine Learning (85%), Data Analysis (80%), Deep Learning (70%)"],
    ["Cloud & Tools", "AWS (80%), Git (75%), Docker (60%)"],
    ["Libraries", "Pandas (85%), NumPy (85%), Scikit-learn (80%)"],
  ];
  skills.forEach(([cat, list]) => {
    ensureSpace(14);
    setFont(10, "bold", DARK);
    doc.text(`${cat}:`, margin, y);
    setFont(10, "normal", MUTED);
    const wrapped = doc.splitTextToSize(list, contentWidth - 100) as string[];
    wrapped.forEach((line, i) => {
      if (i > 0) {
        y += 12;
        ensureSpace(12);
      }
      doc.text(line, margin + 90, y);
    });
    y += 16;
  });
  setFont(9, "italic", MUTED);
  ensureSpace(12);
  doc.text(
    "Also familiar with: TensorFlow, Keras, Matplotlib, Jupyter, VS Code, Linux, REST APIs, Agile.",
    margin,
    y,
  );
  y += 16;

  // ===== Contact =====
  sectionHeader("06.", "Contact");
  setFont(10, "normal", DARK);
  [
    "Email:    tharuneukaristheraju778@gmail.com",
    "Phone:    +91 93924 73635",
    "LinkedIn: https://www.linkedin.com/in/tharun-raju-5806232bb",
    "GitHub:   https://github.com/Tharun778021",
    "Location: Ananthapuramu, Andhra Pradesh, India",
  ].forEach((line) => {
    ensureSpace(14);
    doc.text(line, margin, y);
    y += 14;
  });

  doc.save("S_Tharun_Resume.pdf");
}

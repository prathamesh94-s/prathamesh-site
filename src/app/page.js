"use client";
import { useState, useRef } from "react";
import { motion } from "framer-motion";

const Portfolio = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const fadeInUp = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1,
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  // Previous projects and skills data remain the same...
  const projects = [
    {
      title: "🔐 Custom Security Dashboard",
      description:
        "Developed a security analytics dashboard integrating Prisma Cloud, Netskope, and CrowdStrike with PostgreSQL and Apache Superset, providing real-time security insights.",
    },
    {
      title: "📌 Vulnerability Tracker",
      description:
        "Built a cloud vulnerability management system that classifies vulnerabilities (open, closed, new), automates data extraction via APIs, and maintains a centralized tracking system in PostgreSQL.",
    },
    {
      title: "🚀 DevSecOps Pipeline",
      description:
        "Implemented a CI/CD pipeline security enforcement with SonarQube and OWASP ZAP, ensuring only secure code is deployed.",
    },
    {
      title: "📡 SIEM with Splunk",
      description:
        "Deployed Splunk on AWS, created custom SPL queries and dashboards to analyze security threats, detect anomalies, and respond in real time.",
    },
    {
      title: "🔑 Just-In-Time (JIT) Access Management",
      description:
        "Designed an automated JIT access control system using Python, AWS CLI, RabbitMQ, and PostgreSQL, enforcing least privilege access dynamically.",
    },
    {
      title: "📜CloudTrail-Driven Adaptive Access Control",
      description:
        "Automated least privilege enforcement by analyzing CloudTrail logs, dynamically adjusting user permissions based on real usage patterns.",
    },
  ];

  const skills = [
    {
      category: "☁️ Cloud Security",
      items: ["AWS", "GCP ", "Prisma Cloud ", "CSPM ", "CWPP 🏴"],
    },
    {
      category: "🛠 DevSecOps & Automation",
      items: ["Jenkins ", "Terraform ", "SonarQube ", "OWASP ZAP "],
    },
    {
      category: "💳 Security Compliance",
      items: ["PCI DSS ", "GDPR", "HIPAA ", "ISO 27001 "],
    },
    {
      category: "📊 SIEM & Monitoring",
      items: ["Splunk", "Elastic ", "Kibana "],
    },
    {
      category: "💻 Programming & Scripting",
      items: ["Python", "Bash", "JavaScript"],
    },
  ];

  const experiences = [
    "⚠️ Resolved CSPM alerts by identifying risks in cloud services and providing actionable recommendations, including IAM role hardening, encryption enablement, and activity monitoring.",
    "🔍 Deployed Prisma Cloud Compute Edition in air-gapped environments, conducting vulnerability assessments and runtime security evaluations.",
    "🌐 Configured Prisma Cloud SaaS for GCP and AWS, enabling agentless vulnerability scanning and ensuring compliance.",
    "📑 Conducted compliance audits for PCI DSS, GDPR, HIPAA, and ISO 27001, ensuring adherence to regulatory standards.",
    "🔒 Developed CIS guidelines for container workloads, securing Kubernetes environments with best practices.",
    "⚙️ Automated Defender deployment and upgrades using scripts and Terraform for consistent security across dynamic environments.",
    "🛡 Addressed Kubernetes security challenges, implementing namespace isolation, network policies, and OWASP Top 10 vulnerability testing.",
    "📜 Designed tailored compliance frameworks with automated policy enforcement and regular audits.",
    "🔐 Secured sensitive data on S3 buckets using DSPM modules, encryption, strict access policies, and object versioning.",
    "🚀 Integrated DevSecOps practices, automating security checks in CI/CD pipelines and enabling secure deployments.",
    "🔍 Audited cloud environments to identify and remediate compliance gaps, preparing organizations for regulatory reviews.",
    "🛡 Leveraged AWS native security tools like GuardDuty, Config, Inspector, and Macie for threat detection, compliance, and data security.",
    "✅ Recommended automated compliance checks using policy-as-code frameworks for consistent cloud resource management.",
    "🌍 Promoted multi-cloud security best practices, including encryption, vulnerability patching, and MFA for critical resources.",
  ];

  const ExperienceCard = ({ experience, isDarkMode }) => {
    return (
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        whileHover={{ scale: 1.02 }}
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 20,
        }}
        className={`
          flex-shrink-0 
          w-[300px] md:w-[400px] lg:w-[500px] 
          p-6 rounded-xl 
          shadow-lg 
          ${isDarkMode ? "bg-gray-700" : "bg-gray-100"}
          transition-all duration-300
        `}
      >
        <p className="text-base md:text-lg leading-relaxed"> {experience}</p>
      </motion.div>
    );
  };

  // Experience Section Component
  const ExperienceSection = ({ experiences, isDarkMode }) => {
    const containerRef = useRef(null);

    const scrollLeft = () => {
      if (containerRef.current) {
        containerRef.current.scrollBy({
          left: -500,
          behavior: "smooth",
        });
      }
    };

    const scrollRight = () => {
      if (containerRef.current) {
        containerRef.current.scrollBy({
          left: 500,
          behavior: "smooth",
        });
      }
    };

    return (
      <div className="relative">
        <h4 className="text-xl font-semibold mb-6">Combined Experience</h4>

        {/* Navigation Buttons */}
        <div className="hidden md:flex justify-between absolute top-1/2 -translate-y-1/2 left-0 right-0 z-10 pointer-events-none">
          <button
            onClick={scrollLeft}
            className={`
              pointer-events-auto
              w-12 h-12 
              rounded-full 
              flex items-center justify-center 
              ${isDarkMode ? "bg-gray-800" : "bg-white"} 
              shadow-lg 
              transform -translate-x-6
              transition-all 
              hover:scale-110
            `}
          >
            ←
          </button>
          <button
            onClick={scrollRight}
            className={`
              pointer-events-auto
              w-12 h-12 
              rounded-full 
              flex items-center justify-center 
              ${isDarkMode ? "bg-gray-800" : "bg-white"} 
              shadow-lg 
              transform translate-x-6
              transition-all 
              hover:scale-110
            `}
          >
            →
          </button>
        </div>

        {/* Scrollable Container */}
        <div
          ref={containerRef}
          className="
            flex 
            gap-6 
            overflow-x-auto 
            pb-6 
            scrollbar-hide
            scroll-smooth
            snap-x 
            snap-mandatory
            -mx-6 
            px-6
          "
          style={{
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {experiences.map((experience, index) => (
            <div key={index} className="snap-start">
              <ExperienceCard experience={experience} isDarkMode={isDarkMode} />
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="mt-4 flex justify-center gap-2">
          {experiences.map((_, index) => (
            <div
              key={index}
              className={`
                w-2 h-2 
                rounded-full 
                transition-all 
                ${
                  index === 0
                    ? isDarkMode
                      ? "bg-white"
                      : "bg-gray-800"
                    : isDarkMode
                    ? "bg-gray-600"
                    : "bg-gray-300"
                }
              `}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      {/* Navigation - Adjusted width */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed w-full z-50 px-6 py-4 backdrop-blur-lg bg-opacity-70"
      >
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <span className="text-2xl font-bold">PJ</span>
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg ${
              isDarkMode ? "bg-white text-gray-900" : "bg-gray-900 text-white"
            }`}
          >
            {isDarkMode ? "☀️" : "🌙"}
          </button>
        </div>
      </motion.nav>

      {/* Hero Section - Adjusted spacing */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="min-h-screen flex items-center justify-center px-6 lg:px-8"
      >
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl lg:text-7xl font-bold leading-tight"
          >
            👋 Hi, I'm <span className="text-blue-500">Prathamesh Jadhav</span>
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl lg:text-2xl opacity-80 max-w-2xl mx-auto"
          >
            ☁️ A{" "}
            <span className="text-yellow-500 font-semibold">
              Cloud Security Engineer
            </span>{" "}
            passionate about 🔐 securing cloud environments, ⚙️ automating
            security processes, and 🚀 implementing DevSecOps best practices.
          </motion.p>
        </div>
      </motion.section>

      {/* Skills Section - Adjusted grid and spacing */}
      <motion.section
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="py-20 px-6 lg:px-8"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-bold mb-16 text-center"
          >
            Skills & Expertise
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillSet, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                className={`p-8 rounded-xl shadow-lg ${
                  isDarkMode ? "bg-gray-800" : "bg-white"
                }`}
              >
                <h3 className="text-2xl font-semibold mb-6">
                  {skillSet.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skillSet.items.map((item, i) => (
                    <span
                      key={i}
                      className={`px-4 py-2 rounded-full text-sm ${
                        isDarkMode ? "bg-gray-700" : "bg-gray-100"
                      }`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Experience Section - Improved layout */}
      <motion.section
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="py-20 px-6 lg:px-8"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-bold mb-16 text-center"
          >
            Experience
          </motion.h2>

          <motion.div
            variants={fadeInUp}
            className={`p-8 lg:p-12 rounded-xl shadow-lg mb-8 ${
              isDarkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <h3 className="text-2xl font-semibold mb-8">
              Cloud Security Analyst | Essen Vision (Aug 2023 - Present)
            </h3>

            {/* Clients Grid - Improved spacing */}
            <div className="mb-12">
              <h4 className="text-xl font-semibold mb-6">
                Clients Worked With:
              </h4>
              <motion.div
                variants={staggerContainer}
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
              >
                {[
                  "HDFC",
                  "RBI",
                  "FYNDNA",
                  "Kotak Bank",
                  "Zepto",
                  "BMCL",
                  "Shoppers Stop",
                  "Kotak Security",
                ].map((client, index) => (
                  <motion.span
                    key={index}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.05 }}
                    className={`px-4 py-3 rounded-lg text-center text-base ${
                      isDarkMode ? "bg-gray-700" : "bg-gray-100"
                    }`}
                  >
                    {client}
                  </motion.span>
                ))}
              </motion.div>
            </div>

            {/* Combined Experience - Improved readability */}
            <div className="space-y-8">
              <ExperienceSection
                experiences={experiences}
                isDarkMode={isDarkMode}
              />
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Projects Section - Adjusted grid and spacing */}
      <motion.section
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="py-20 px-6 lg:px-8"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-bold mb-16 text-center"
          >
            Projects & Case Studies
          </motion.h2>
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                className={`p-8 rounded-xl shadow-lg ${
                  isDarkMode ? "bg-gray-800" : "bg-white"
                }`}
              >
                <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                <p className="text-lg opacity-80 leading-relaxed">
                  {project.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Certifications Section - Improved layout */}
      <motion.section
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="py-20 px-6 lg:px-8"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-bold mb-16 text-center"
          >
            Certifications
          </motion.h2>
          <div className="flex flex-col gap-6">
            {[
              { title: "Prisma Cloud Associate (PSE)", year: "2023" },
              {
                title: "Bachelor of Science in Computer Science",
                year: "2023",
              },
            ].map((cert, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                className={`p-8 rounded-xl shadow-lg ${
                  isDarkMode ? "bg-gray-800" : "bg-white"
                }`}
              >
                <h3 className="text-2xl font-semibold">{cert.title}</h3>
                <p className="text-lg opacity-80 mt-2">{cert.year}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className={`py-8 text-center ${
          isDarkMode ? "bg-gray-800" : "bg-gray-100"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-lg">
            &copy; 2025 Prathamesh Jadhav. All rights reserved.
          </p>
        </div>
      </motion.footer>
    </div>
  );
};

export default Portfolio;

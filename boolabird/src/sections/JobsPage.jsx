import { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, MapPin, CreditCard, Clock, Upload, Send, Mail, Phone, User, FileText, ArrowLeft } from "lucide-react";
import Toast from "@components/layout/Toast";

function JobsPage() {
  const [activeTab, setActiveTab] = useState("openings");
  const [applicationData, setApplicationData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    coverLetter: "",
    resume: null
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState({
    visible: false,
    message: "",
    type: "success",
    duration: 5000,
  });

  const jobOpenings = [
    {
      id: 1,
      title: "Supervisor",
      department: "Operations",
      location: "Multiple Locations",
      type: "Full-time",
      salary: "Competitive",
      experience: "3+ years",
      description: "Oversee daily operations and manage team of sweepers and riders to ensure efficient waste collection and processing.",
      requirements: [
        "Bachelor's degree in any field",
        "3+ years supervisory experience",
        "Strong leadership and communication skills",
        "Knowledge of waste management practices",
        "Valid driver's license"
      ],
      posted: "2024-01-15"
    },
    {
      id: 2,
      title: "Sweepers",
      department: "Field Operations",
      location: "Various Zones",
      type: "Full-time/Part-time",
      salary: "As per industry standards",
      experience: "0-1 year",
      description: "Responsible for street sweeping, waste collection, and maintaining cleanliness in assigned areas.",
      requirements: [
        "Physically fit for outdoor work",
        "Basic literacy for reporting",
        "Commitment to cleanliness",
        "Team player attitude",
        "Flexible working hours"
      ],
      posted: "2024-01-14"
    },
    {
      id: 3,
      title: "Ticketers",
      department: "Customer Service",
      location: "Area Offices",
      type: "Full-time",
      salary: "Competitive",
      experience: "1+ year",
      description: "Manage ticketing system, handle customer inquiries, and coordinate service requests and complaints.",
      requirements: [
        "12th pass or equivalent",
        "Basic computer skills",
        "Good communication in local language",
        "Customer service experience",
        "Problem-solving abilities"
      ],
      posted: "2024-01-13"
    },
    {
      id: 4,
      title: "Tricycle Riders",
      department: "Collection",
      location: "Residential Areas",
      type: "Full-time",
      salary: "Performance-based",
      experience: "0-1 year",
      description: "Operate tricycles for door-to-door waste collection and transportation to collection points.",
      requirements: [
        "Valid driving license (2/3-wheeler)",
        "Knowledge of local routes",
        "Physically fit",
        "Basic understanding of waste segregation",
        "Clean driving record"
      ],
      posted: "2024-01-12"
    },
    {
      id: 5,
      title: "IT Support Specialist",
      department: "Information Technology",
      location: "Head Office",
      type: "Full-time",
      salary: "Market competitive",
      experience: "2+ years",
      description: "Maintain IT infrastructure, provide technical support, and manage software systems for operations.",
      requirements: [
        "Degree in Computer Science/IT",
        "Hardware and software troubleshooting",
        "Network administration skills",
        "Database management knowledge",
        "Experience with ticketing systems"
      ],
      posted: "2024-01-11"
    },
    {
      id: 6,
      title: "Public Relations Officer (P.R.O)",
      department: "Communications",
      location: "Head Office",
      type: "Full-time",
      salary: "Competitive",
      experience: "3+ years",
      description: "Manage public relations, community engagement, and corporate communications.",
      requirements: [
        "Degree in Mass Communication/PR",
        "Excellent communication skills",
        "Media relations experience",
        "Event management abilities",
        "Social media management"
      ],
      posted: "2024-01-10"
    }
  ];

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setApplicationData({
      ...applicationData,
      [name]: files ? files[0] : value,
    });
  };

  const handleApplicationSubmit = async (e) => {
    e.preventDefault();

    if (!applicationData.name || !applicationData.email || !applicationData.position || !applicationData.resume) {
      setToast({
        visible: true,
        message: "Please fill in all required fields and upload your resume",
        type: "error",
        duration: 4000,
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append('name', applicationData.name);
      formData.append('email', applicationData.email);
      formData.append('phone', applicationData.phone || 'Not provided');
      formData.append('position', applicationData.position);
      formData.append('coverLetter', applicationData.coverLetter || 'Not provided');
      formData.append('resume', applicationData.resume);

      const response = await fetch('https://formsubmit.co/ajax/jobs@boolabird.com', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        setToast({
          visible: true,
          message: "Application submitted successfully! We'll review your application and contact you soon.",
          type: "success",
          duration: 6000,
        });

        setApplicationData({
          name: "",
          email: "",
          phone: "",
          position: "",
          coverLetter: "",
          resume: null
        });

        const fileInput = document.querySelector('input[type="file"]');
        if (fileInput) fileInput.value = '';
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error('Error submitting application:', error);
      setToast({
        visible: true,
        message: "There was an error submitting your application. Please try again or email us directly at jobs@boolabird.com",
        type: "error",
        duration: 6000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeToast = () => {
    setToast({ ...toast, visible: false });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 -mt-20">
      <Toast toast={toast} onClose={closeToast} />

      {/* Hero Section */}
      <div className="relative h-80 bg-[#004129] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('/images/gallery3.jpg')" }}
        ></div>

        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-white max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Our Green Warriors Team</h1>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              Be part of our mission for a cleaner, greener future. Multiple positions available.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Back Navigation */}
        <a
          href="/"
          className="inline-flex items-center text-[#004129] hover:text-[#003520] mb-6 font-medium group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </a>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-md shadow-md p-6 mb-8"
        >
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab("openings")}
              className={`px-6 py-3 font-medium border-b-2 transition-colors cursor-pointer ${
                activeTab === "openings"
                  ? "border-[#004129] text-[#004129]"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              Current Openings ({jobOpenings.length})
            </button>
            <button
              onClick={() => setActiveTab("apply")}
              className={`px-6 py-3 font-medium border-b-2 transition-colors cursor-pointer ${
                activeTab === "apply"
                  ? "border-[#004129] text-[#004129]"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              Apply Now
            </button>
          </div>
        </motion.div>

        {/* Content based on active tab */}
        {activeTab === "openings" ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            {jobOpenings.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-md shadow-sm p-6 hover:shadow-md transition-shadow border-l-4 border-[#004129]"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <span className="flex items-center">
                        <Briefcase className="w-4 h-4 mr-1" />
                        {job.department}
                      </span>
                      <span className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {job.location}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      setActiveTab("apply");
                      setApplicationData({ ...applicationData, position: job.title });
                    }}
                    className="mt-4 md:mt-0 bg-[#004129] text-white px-6 py-2 rounded-sm hover:bg-[#003520] cursor-pointer transition-colors font-semibold"
                  >
                    Apply Now
                  </button>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Salary Range</h4>
                    <p className="text-gray-600 flex items-center">
                      <CreditCard className="w-4 h-4 mr-1" />
                      {job.salary}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Experience Required</h4>
                    <p className="text-gray-600">{job.experience}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Job Description</h4>
                  <p className="text-gray-600">{job.description}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Requirements</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    {job.requirements.map((req, i) => (
                      <li key={i}>{req}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-sm text-gray-500">Posted: {new Date(job.posted).toLocaleDateString()}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Apply for a Position</h2>
            <p className="text-gray-600 mb-6">Fill out the form below to apply. All fields marked * are required.</p>

            <form onSubmit={handleApplicationSubmit} className="space-y-6" encType="multipart/form-data">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      value={applicationData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#004129] focus:border-[#004129] transition"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={applicationData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#004129] focus:border-[#004129] transition"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      value={applicationData.phone}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#004129] focus:border-[#004129] transition"
                      placeholder="Your contact number"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Position Applying For *</label>
                  <div className="relative">
                    <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <select
                      name="position"
                      value={applicationData.position}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#004129] focus:border-[#004129] transition appearance-none bg-white"
                    >
                      <option value="">Select a position</option>
                      {jobOpenings.map(job => (
                        <option key={job.id} value={job.title}>{job.title}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Cover Letter / Additional Information
                </label>
                <div className="relative">
                  <FileText className="absolute left-3 top-4 w-5 h-5 text-gray-400" />
                  <textarea
                    name="coverLetter"
                    value={applicationData.coverLetter}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#004129] focus:border-[#004129] transition"
                    placeholder="Tell us why you're interested in this position and any relevant experience..."
                  ></textarea>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Resume/CV (PDF, DOC, DOCX) *
                </label>
                <div className="flex items-center justify-center w-full">
                  <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-[#004129] transition bg-gray-50">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <Upload className={`w-8 h-8 mb-2 ${applicationData.resume ? 'text-[#004129]' : 'text-gray-400'}`} />
                      <p className="text-sm text-gray-500 text-center px-4">
                        {applicationData.resume ? (
                          <span className="text-[#004129] font-medium">{applicationData.resume.name}</span>
                        ) : (
                          <>
                            <span className="font-semibold text-[#004129]">Click to upload</span> or drag and drop
                          </>
                        )}
                      </p>
                      <p className="text-xs text-gray-400 mt-1">PDF, DOC, DOCX (Max: 5MB)</p>
                    </div>
                    <input
                      type="file"
                      name="resume"
                      onChange={handleInputChange}
                      required
                      accept=".pdf,.doc,.docx"
                      className="hidden"
                    />
                  </label>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-sm text-gray-600 flex items-center">
                  <Mail className="w-4 h-4 mr-2 text-[#004129]" />
                  Your application will be sent directly to <strong className="mx-1">jobs@boolabird.com</strong>
                </p>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-[#004129] text-white font-semibold py-4 px-6 rounded-lg shadow-md hover:bg-[#003520] transition-all flex items-center justify-center ${
                  isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Submit Application
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        )}

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-green-50 rounded-2xl p-8 mt-12 border border-green-200"
        >
          <h3 className="text-2xl font-bold text-[#004129] mb-6 text-center">Why Work With BoolaBird?</h3>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="w-8 h-8 text-[#004129]" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Competitive Compensation</h4>
              <p className="text-gray-600">Fair wages and performance-based incentives</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-[#004129]" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Flexible Schedules</h4>
              <p className="text-gray-600">Work hours that fit your lifestyle</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-8 h-8 text-[#004129]" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Growth Opportunities</h4>
              <p className="text-gray-600">Clear career advancement paths</p>
            </div>
          </div>

          <div className="text-center mt-8 pt-6 border-t border-green-200">
            <p className="text-gray-600">
              Have questions? Email us at{' '}
              <a href="mailto:jobs@boolabird.com" className="text-[#004129] font-semibold hover:underline">
                jobs@boolabird.com
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default JobsPage;
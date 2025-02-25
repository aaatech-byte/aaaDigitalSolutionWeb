import { useState } from "react";
import { Button } from "../../components/ui/Button";

const JobApplicationForm: React.FC = () => {
  const [modalMessage, setModalMessage] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState<boolean>(true);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    about: "",
    cv: null as File | null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({ ...formData, cv: e.target.files[0] });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName || !formData.email || !formData.phone || !formData.position || !formData.experience || !formData.cv) {
      setModalMessage("Please fill all required fields!");
      setIsSuccess(false);
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append("fullName", formData.fullName);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("phone", formData.phone);
    formDataToSend.append("position", formData.position);
    formDataToSend.append("experience", formData.experience);
    formDataToSend.append("about", formData.about);
    formDataToSend.append("cv", formData.cv as File);

    try {
      const response = await fetch("http://localhost:5012/api/job-applications", {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        setModalMessage("Application submitted successfully!");
        setIsSuccess(true);
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          position: "",
          experience: "",
          about: "",
          cv: null,
        });
      } else {
        setModalMessage("Failed to submit application. Please try again!");
        setIsSuccess(false);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setModalMessage("Network error. Please check your connection.");
      setIsSuccess(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-primary sm:p-8 md:p-12">
      {/* Modal */}
      {modalMessage && (
        <div className="fixed inset-0 z-20 flex items-center justify-center p-4 bg-gray-800 bg-opacity-75">
          <div className={`p-6 rounded-lg shadow-lg text-center w-full max-w-md ${isSuccess ? "bg-green-500" : "bg-red-500"}`}>
            <h2 className="mb-4 text-xl font-bold text-white">{modalMessage}</h2>
            <button onClick={() => setModalMessage(null)} className="px-6 py-2 text-black bg-white rounded-md hover:bg-gray-200">
              OK
            </button>
          </div>
        </div>
      )}

      <div
        className="w-full max-w-2xl p-6 mt-16 rounded-lg shadow-lg sm:p-8 md:p-10"
        style={{ background: "linear-gradient(224deg, #13072E, #3D1793)" }}
      >
        <h2 className="mb-6 text-3xl font-bold text-center text-white font-orbitron">
          Job <span className="text-yellow">Application Form</span>
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name*"
            className="w-full bg-[#FFFFFF] p-4 rounded"
            required
            onChange={handleChange}
            value={formData.fullName}
          />
          <input
            type="email"
            name="email"
            placeholder="Email*"
            className="w-full p-4 rounded bg-[#FFFFFF]"
            required
            onChange={handleChange}
            value={formData.email}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone*"
            className="w-full p-4 rounded bg-[#FFFFFF]"
            required
            onChange={handleChange}
            value={formData.phone}
          />
          <input
            type="text"
            name="position"
            placeholder="Position Applying For*"
            className="w-full bg-[#FFFFFF] p-4 rounded"
            required
            onChange={handleChange}
            value={formData.position}
          />
          <input
            type="number"
            name="experience"
            placeholder="Years of Experience*"
            className="w-full p-4 rounded bg-[#FFFFFF]"
            required
            onChange={handleChange}
            value={formData.experience}
          />
          <textarea
            name="about"
            placeholder="About Yourself"
            className="w-full p-4 rounded bg-[#FFFFFF]"
            value={formData.about}
            onChange={handleChange}
          ></textarea>

          <label className="text-[#FFFFFF]">Upload CV*</label>
          <input type="file" name="cv" className="w-full p-4 bg-[#FFFFFF]" required onChange={handleFileChange} />

          <div className="flex justify-center">
            <Button type="submit" variant="primary" size="md" className="px-3 py-2 mt-4 font-bold group">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobApplicationForm;

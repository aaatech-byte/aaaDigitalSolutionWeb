import { useState } from "react";
import { Button } from "./ui/Button";

interface FormData {
  name: string;
  phoneNumber: string;
  email: string;
  city: string;
  details: string;
  companyName?: string;
  website?: string;
  service: string;
  budget: string;
  heardAboutUs: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phoneNumber: "",
    email: "",
    city: "",
    details: "",
    companyName: "",
    website: "",
    service: "",
    budget: "",
    heardAboutUs: "",
  });

  const [modalMessage, setModalMessage] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState<boolean>(true);
  const [errors, setErrors] = useState<{ [key: string]: boolean }>({});

  const requiredFields = ["name", "email", "city", "details", "budget", "heardAboutUs", "service"];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: false });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: { [key: string]: boolean } = {};
    requiredFields.forEach(field => {
      if (!formData[field as keyof FormData]) {
        newErrors[field] = true;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setModalMessage("Please fill all required fields!");
      setIsSuccess(false);
      return;
    }

    try {
      const response = await fetch("http://localhost:5012/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const responseData = await response.json();

      if (response.ok) {
        setModalMessage("Message sent successfully!");
        setIsSuccess(true);
        setFormData({
          name: "",
          phoneNumber: "",
          email: "",
          city: "",
          details: "",
          companyName: "",
          website: "",
          service: "",
          budget: "",
          heardAboutUs: "",
        });
      } else {
        setModalMessage(responseData.message || "Failed to send message. Please try again!");
        setIsSuccess(false);
      }
    } catch (error) {
      setModalMessage("Network error. Please check your connection.");
      setIsSuccess(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen pb-10 pt-28 bg-gradient-primary">
      {modalMessage && (
        <div className="fixed inset-0 flex items-center justify-center p-4 bg-gray-800 bg-opacity-75">
          <div className={`p-6 rounded-lg shadow-lg text-center w-full max-w-md ${isSuccess ? "bg-green-500" : "bg-red-500"}`}>
            <h2 className="mb-4 text-xl font-bold text-white">{modalMessage}</h2>
            <button
              onClick={() => setModalMessage(null)}
              className="px-6 py-2 text-black bg-white rounded-md hover:bg-gray-200"
            >
              OK
            </button>
          </div>
        </div>
      )}

      <div className="w-full max-w-2xl p-8 shadow-lg rounded-2xl" style={{ background: 'linear-gradient(224deg, #13072E, #3D1793)' }}>
        <h1 className="mb-4 text-3xl font-bold text-center text-white font-orbitron">
          Contact <span className="text-yellow">US</span>
        </h1>
        <p className="mb-6 text-2xl text-center text-gray-200">Let's Boost Your Digital Presence</p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {Object.keys(formData).map((field) => (
            field !== "details" ? (
              <input
                key={field}
                name={field}
                type="text"
                placeholder={`${field.charAt(0).toUpperCase() + field.slice(1)}${requiredFields.includes(field) ? " *" : ""}`}
                className={`w-full p-3 bg-gray-100 border rounded-md ${errors[field] ? "border-red-500" : ""}`}
                onChange={handleChange}
                value={formData[field as keyof FormData]}
              />
            ) : (
              <textarea
                key={field}
                name={field}
                placeholder="Project Details *"
                className={`w-full h-20 p-3 bg-gray-100 border rounded-md ${errors.details ? "border-red-500" : ""}`}
                onChange={handleChange}
                value={formData.details}
              ></textarea>
            )
          ))}
          <div className="flex justify-center">
            <Button type="submit" variant="primary" size="md" className="px-3 py-2 mt-4 font-bold group">
              Let's Talk
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

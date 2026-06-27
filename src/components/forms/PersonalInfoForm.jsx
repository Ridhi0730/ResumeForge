import React from 'react';

function PersonalInfoForm({ formData, setFormData }) {

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="p-10 flex flex-col items-center justify-center bg-brand-primary border-2">
      <input
        placeholder="Full Name"
        value={formData.fullName}
        onChange={handleChange}
        name="fullName"
        className="border-2 border-gray-300 p-2 rounded-md mb-4 autofill:shadow-[inset_0_0_0_30px_#210124] autofill:text-brand-secondary"
      />

      <input
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        name="email"
        className="border-2 border-gray-300 p-2 rounded-md mb-4 autofill:shadow-[inset_0_0_0_30px_#210124] autofill:text-brand-secondary"
      />

      <input
        placeholder="Phone"
        value={formData.phone}
        onChange={handleChange}
        name="phone"
        className="border-2 border-gray-300 p-2 rounded-md mb-4 autofill:shadow-[inset_0_0_0_30px_#210124] autofill:text-brand-secondary"
      />

      <input
        placeholder="City"
        value={formData.city}
        onChange={handleChange}
        name="city"
        className="border-2 border-gray-300 p-2 rounded-md mb-4 autofill:shadow-[inset_0_0_0_30px_#210124] autofill:text-brand-secondary"
      />

      <input
        placeholder="Linkedin"
        value={formData.linkedin}
        onChange={handleChange}
        name="linkedin"
        className="border-2 border-gray-300 p-2 rounded-md mb-4 autofill:shadow-[inset_0_0_0_30px_#210124] autofill:text-brand-secondary"
      />

      <input
        placeholder="Github"
        value={formData.github}
        onChange={handleChange}
        name="github"
        className="border-2 border-gray-300 p-2 rounded-md mb-4 autofill:shadow-[inset_0_0_0_30px_#210124] autofill:text-brand-secondary"
      />

      {/* Personal Information Preview */}
      {/* <div className="mt-8 bg-brand-primary text-brand-secondary p-4 rounded-md border-2 w-full max-w-md">
        <h2>{formData.fullName}</h2>
        <p>{formData.email}</p>
        <p>{formData.phone}</p>
        <p>{formData.city}</p>
        <p>{formData.linkedin}</p>
        <p>{formData.github}</p>
      </div> */}
    </div>
  );
  
}

export default PersonalInfoForm;
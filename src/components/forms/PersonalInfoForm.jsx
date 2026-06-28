import React from 'react';
import InputField from '../common/InputField';
import Card from '../common/Card';
import FormLayout from './FormLayout';

function PersonalInfoForm({ formData, setFormData, step, setStep }) {

    const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  
  const personalFields = [
  {
    label: "Full Name",
    name: "fullName",
    placeholder: "John Doe",
  },
  {
    label: "Email",
    name: "email",
    type: "email",
    placeholder: "john@example.com",
  },
  {
    label: "Phone",
    name: "phone",
    type: "tel",
    placeholder: "+91 9876543210",
  },
  {
    label: "City",
    name: "city",
    placeholder: "Shimla, Himachal Pradesh",
  },
  {
    label: "LinkedIn",
    name: "linkedin",
    type: "url",
    placeholder: "https://linkedin.com/in/username",
  },
  {
    label: "GitHub",
    name: "github",
    type: "url",
    placeholder: "https://github.com/username",
  },
];



  return (

    <Card className="rf-panel">

      <FormLayout
        title="Personal Information"
        subtitle="Enter your personal details."
        step={step}
        setStep={setStep}
        totalSteps={5}
      >

  <div className="space-y-6">

    <InputField
      label="Full Name"
      name="fullName"
      value={formData.fullName}
      onChange={handleChange}
      placeholder="John Doe"
      required
      description='Enter your name as you want it to appear on your resume.'
    />

    <InputField
      label="Email Address"
      name="email"
      type="email"
      value={formData.email}
      onChange={handleChange}
      placeholder="john@example.com"
      required
      description='Enter your professional email address.'
    />

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

      <InputField
        label="Phone"
        name="phone"
        type="tel"
        value={formData.phone}
        onChange={handleChange}
        placeholder="+91 9876543210"
      />

      <InputField
        label="City"
        name="city"
        value={formData.city}
        onChange={handleChange}
        placeholder="Shimla"
      />

    </div>

    <InputField
      label="LinkedIn"
      name="linkedin"
      type="url"
      value={formData.linkedin}
      onChange={handleChange}
      placeholder="Username"
      prefix='linkedin.com/in/'
    />

    <InputField
      label="GitHub"
      name="github"
      type="url"
      value={formData.github}
      onChange={handleChange}
      placeholder="Username"
      prefix='github.com/'
    />

  </div>

  </FormLayout>

</Card>
  );
  
}

export default PersonalInfoForm;
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_number: "",
  });
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleTermsChange = (e) => {
    setAgreeToTerms(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone_number) {
      setAlertMessage("Please fill out all fields.");
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 5000);
      return;
    }

    if (!agreeToTerms) {
      setAlertMessage("You must agree to the Terms and Conditions.");
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 5000);
      return;
    }

    formData.email = formData?.email.toLowerCase();

    // Open modal with form data
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50 px-4 sm:px-6 lg:px-8 py-10">
      {/* Alert */}
      {showAlert && (
        <div className="absolute top-5 w-full max-w-sm">
          <div
            className={`${
              alertMessage.includes("successfully")
                ? "bg-green-200 border-green-400 text-green-800"
                : "bg-red-200 border-red-400 text-red-800"
            } border p-4 rounded-lg shadow-lg`}
          >
            <p className="font-semibold">
              {alertMessage.includes("successfully") ? "Success" : "Error"}
            </p>
            <pre className="whitespace-pre-wrap text-sm">{alertMessage}</pre>
          </div>
        </div>
      )}

      {/* Signup Form */}
      <div className="w-full max-w-md md:max-w-lg bg-white p-6 sm:p-8 md:p-10 rounded-xl shadow-lg">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-600 text-center mb-6 md:mb-8">
          Create Your Account
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm md:text-base font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="John Doe"
            />
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm md:text-base font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="example@mail.com"
            />
          </div>

          {/* Phone Number Field */}
          <div>
            <label
              htmlFor="phone_number"
              className="block text-sm md:text-base font-medium text-gray-700"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="+1234567890"
            />
          </div>

          {/* Terms and Conditions */}
          <div className="flex items-start">
            <input
              type="checkbox"
              id="terms"
              checked={agreeToTerms}
              onChange={handleTermsChange}
              className="w-5 h-5 mt-1 mr-3"
            />
            <label htmlFor="terms" className="text-sm text-gray-700">
              I agree to the{" "}
              <Link
                to="/terms-and-conditions"
                className="text-blue-500 font-medium hover:underline"
              >
                Terms and Conditions
              </Link>
            </label>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold text-lg shadow-md hover:bg-blue-600 transition duration-300"
            >
              Sign Up
            </button>
            <div className="mt-8 text-center">
   <p className="text-sm text-gray-600">
        Already have an account ?{" "}
        <Link
          to="/signin"
          className="text-blue-500 font-medium hover:underline"
        >
          Login
        </Link>
      </p>
    </div>
          </div>
        </form>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-bold text-gray-700 mb-4">
              Signup Successful!
            </h3>
            <div className="space-y-2">
              <p className="text-gray-600">
                <strong>Name:</strong> {formData.name}
              </p>
              <p className="text-gray-600">
                <strong>Email:</strong> {formData.email}
              </p>
              <p className="text-gray-600">
                <strong>Phone Number:</strong> {formData.phone_number}
              </p>
            </div>
            <button
              onClick={closeModal}
              className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Signup;

// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// const Signup = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone_number: "",
//   });
//   const [agreeToTerms, setAgreeToTerms] = useState(false);
//   const [alertMessage, setAlertMessage] = useState("");
//   const [showAlert, setShowAlert] = useState(false);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isSignupSuccessModalOpen, setIsSignupSuccessModalOpen] = useState(false);
//   const [accepted, setAccepted] = useState(false);

//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [id]: value,
//     }));
//   };

//   const handleTermsChange = (e) => {
//     setAgreeToTerms(e.target.checked);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!formData.name || !formData.email || !formData.phone_number) {
//       setAlertMessage("Please fill out all fields.");
//       setShowAlert(true);
//       setTimeout(() => setShowAlert(false), 5000);
//       return;
//     }

//     if (!agreeToTerms) {
//       setAlertMessage("You must agree to the Terms and Conditions.");
//       setShowAlert(true);
//       setTimeout(() => setShowAlert(false), 5000);
//       return;
//     }

//     formData.email = formData?.email.toLowerCase();

//     // Open modal with form data
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   const handleAccept = () => {
//     setIsModalOpen(false);
//     setIsSignupSuccessModalOpen(true);
//   };

//   const closeSignupSuccessModal = () => {
//     setIsSignupSuccessModalOpen(false);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-blue-50 px-4 sm:px-6 lg:px-8 py-10">
//       {/* Alert */}
//       {showAlert && (
//         <div className="absolute top-5 w-full max-w-sm">
//           <div
//             className={`${
//               alertMessage.includes("successfully")
//                 ? "bg-green-200 border-green-400 text-green-800"
//                 : "bg-red-200 border-red-400 text-red-800"
//             } border p-4 rounded-lg shadow-lg`}
//           >
//             <p className="font-semibold">
//               {alertMessage.includes("successfully") ? "Success" : "Error"}
//             </p>
//             <pre className="whitespace-pre-wrap text-sm">{alertMessage}</pre>
//           </div>
//         </div>
//       )}

//       {/* Signup Form */}
//       <div className="w-full max-w-md md:max-w-lg bg-white p-6 sm:p-8 md:p-10 rounded-xl shadow-lg">
//         <h2 className="text-2xl md:text-3xl font-bold text-blue-600 text-center mb-6 md:mb-8">
//           Create Your Account
//         </h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           {/* Name Field */}
//           <div>
//             <label
//               htmlFor="name"
//               className="block text-sm md:text-base font-medium text-gray-700"
//             >
//               Full Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full mt-2 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               placeholder="John Doe"
//             />
//           </div>

//           {/* Email Field */}
//           <div>
//             <label
//               htmlFor="email"
//               className="block text-sm md:text-base font-medium text-gray-700"
//             >
//               Email Address
//             </label>
//             <input
//               type="email"
//               id="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full mt-2 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               placeholder="example@mail.com"
//             />
//           </div>

//           {/* Phone Number Field */}
//           <div>
//             <label
//               htmlFor="phone_number"
//               className="block text-sm md:text-base font-medium text-gray-700"
//             >
//               Phone Number
//             </label>
//             <input
//               type="tel"
//               id="phone_number"
//               value={formData.phone_number}
//               onChange={handleChange}
//               className="w-full mt-2 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               placeholder="+1234567890"
//             />
//           </div>

//           {/* Terms and Conditions */}
//           <div className="flex items-start">
//             <input
//               type="checkbox"
//               id="terms"
//               checked={agreeToTerms}
//               onChange={handleTermsChange}
//               className="w-5 h-5 mt-1 mr-3"
//             />
//             <label htmlFor="terms" className="text-sm text-gray-700">
//               I agree to the{" "}
//               <button
//                 type="button"
//                 onClick={() => setIsModalOpen(true)}
//                 className="text-blue-500 font-medium hover:underline"
//               >
//                 Terms and Conditions
//               </button>
//             </label>
//           </div>

//           {/* Submit Button */}
//           <div>
//             <button
//               type="submit"
//               className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold text-lg shadow-md hover:bg-blue-600 transition duration-300"
//             >
//               Sign Up
//             </button>
//           </div>
//           <div className="mt-8 text-center">
//       <p className="text-sm text-gray-600">
//         Already have an account ?{" "}
//         <Link
//           to="/signin"
//           className="text-blue-500 font-medium hover:underline"
//         >
//           Login
//         </Link>
//       </p>
//     </div>
//         </form>
//       </div>

//       {/* Terms and Conditions Modal */}
//       {isModalOpen && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//           <div className="bg-white w-full sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-5/12 p-6 rounded-lg shadow-lg max-h-[80vh] overflow-y-auto">
//             <h3 className="text-2xl font-bold text-gray-700 mb-4">
//               Terms and Conditions
//             </h3>
//             <div className="text-gray-700 space-y-4 mb-6">
//               <p>
//                 Welcome to our platform! By accessing or using our services, you agree to the following terms and conditions:
//               </p>
//               <ol className="list-decimal pl-5 space-y-2">
//                 <li><strong>Acceptance of Terms:</strong> By using our platform, you agree to comply with these Terms and Conditions, as well as any future amendments or additional terms we may establish. If you do not agree with these terms, you must refrain from using the services.</li>
//                 <li><strong>Use of Service:</strong> You agree to use our platform only for lawful purposes and in accordance with the acceptable use policy. You must not misuse our services by transmitting harmful or illegal content, or interfering with the functionality of the platform.</li>
//                 <li><strong>Intellectual Property:</strong> All content provided on this platform, including text, graphics, logos, images, and software, are the intellectual property of our company and are protected by copyright laws. You may not copy, reproduce, or distribute any content without explicit permission.</li>
//                 <li><strong>Account Security:</strong> You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account. If you notice any unauthorized access or use of your account, please notify us immediately.</li>
//                 <li><strong>Privacy Policy:</strong> Our Privacy Policy governs the collection, use, and sharing of your personal information. Please review it carefully to understand how we handle your data. By using our services, you consent to the practices described in the Privacy Policy.</li>
//                 <li><strong>Payment and Billing:</strong> Some of our services may require a payment. You agree to pay any applicable fees for the services you select. We reserve the right to change the pricing structure at any time, with prior notice.</li>
//                 <li><strong>Termination:</strong> We may suspend or terminate your access to the platform at our discretion, for reasons including but not limited to violations of these Terms and Conditions, or illegal activity. Upon termination, your rights to access our services will be revoked.</li>
//                 <li><strong>Dispute Resolution:</strong> In the event of a dispute, you agree to resolve the issue through mediation or arbitration, rather than through court proceedings. Any dispute will be governed by the laws of our jurisdiction.</li>
//                 <li><strong>Limitation of Liability:</strong> Our liability for any damages arising from the use of our services is limited to the maximum extent allowed by law. We are not liable for any indirect, incidental, or consequential damages resulting from your use of our platform.</li>
//                 <li><strong>Changes to Terms:</strong> We reserve the right to modify or update these Terms and Conditions at any time. You will be notified of any significant changes, and your continued use of the platform constitutes acceptance of the revised terms.</li>
//               </ol>
//               <p>
//                 If you have any questions or concerns regarding these Terms and Conditions, please contact our support team. By continuing to access or use our services, you acknowledge that you have read, understood, and agreed to these terms.
//               </p>
//             </div>
//             <div className="flex flex-col items-center">
//               <label className="flex items-center mb-4 text-sm text-gray-600">
//                 <input
//                   type="checkbox"
//                   checked={accepted}
//                   onChange={(e) => setAccepted(e.target.checked)}
//                   className="mr-2 w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-400"
//                 />
//                 I agree to the Terms and Conditions
//               </label>
//               <button
//                 onClick={handleAccept}
//                 disabled={!accepted}
//                 className={`px-4 py-2 w-full sm:w-auto bg-blue-500 text-white text-sm font-semibold rounded-lg shadow-md transition duration-200 ${
//                   accepted
//                     ? "hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
//                     : "bg-gray-300 cursor-not-allowed"
//                 }`}
//               >
//                 Accept
//               </button>
//             </div>
//             <button
//               onClick={closeModal}
//               className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 strokeWidth="2"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Signup Success Modal */}
//       {isSignupSuccessModalOpen && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//           <div className="bg-white w-full sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-5/12 p-6 rounded-lg shadow-lg">
//             <h3 className="text-2xl font-bold text-gray-700 mb-4">Signup Successful!</h3>
//             <div className="text-gray-700 mb-6">
//               <p><strong>Name:</strong> {formData.name}</p>
//               <p><strong>Email:</strong> {formData.email}</p>
//               <p><strong>Phone Number:</strong> {formData.phone_number}</p>
//             </div>
//             <div className="flex flex-col items-center">
//               <button
//                 onClick={closeSignupSuccessModal}
//                 className="px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded-lg shadow-md transition duration-200 hover:bg-blue-600"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
          
//         </div>
        
//       )}
//     </div>
//   );
// };

// export default Signup;


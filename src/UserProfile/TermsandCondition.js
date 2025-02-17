import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const TermsandCondition = () => {
    const [accepted, setAccepted] = useState(false);
    const navigate = useNavigate();  // useNavigate hook for navigation

    const handleAccept = () => {
        setAccepted(true);
        
        alert("Thank you for accepting the Terms and Conditions!");
        navigate("/signup");  // Correctly redirect to /signup
    };
  return (
<div className="flex items-center justify-center px-4 py-8 sm:px-8 lg:px-16">
  <div className="bg-white shadow-md rounded-lg p-6 max-w-4xl w-full">
    <h1 className="text-2xl font-bold text-center mb-6">
      Terms and Conditions
    </h1>
    <div className="text-gray-700 space-y-4 mb-6">
      <p>
        Welcome to our platform! By accessing or using our services, you agree to the following terms and conditions:
      </p>
      <ol className="list-decimal pl-5 space-y-2">
        <li>
          <strong>Acceptance of Terms:</strong> By using our platform, you agree to comply with these Terms and Conditions, as well as any future amendments or additional terms we may establish. If you do not agree with these terms, you must refrain from using the services.
        </li>
        <li>
          <strong>Use of Service:</strong> You agree to use our platform only for lawful purposes and in accordance with the acceptable use policy. You must not misuse our services by transmitting harmful or illegal content, or interfering with the functionality of the platform.
        </li>
        <li>
          <strong>Intellectual Property:</strong> All content provided on this platform, including text, graphics, logos, images, and software, are the intellectual property of our company and are protected by copyright laws. You may not copy, reproduce, or distribute any content without explicit permission.
        </li>
        <li>
          <strong>Account Security:</strong> You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account. If you notice any unauthorized access or use of your account, please notify us immediately.
        </li>
        <li>
          <strong>Privacy Policy:</strong> Our Privacy Policy governs the collection, use, and sharing of your personal information. Please review it carefully to understand how we handle your data. By using our services, you consent to the practices described in the Privacy Policy.
        </li>
        <li>
          <strong>Payment and Billing:</strong> Some of our services may require a payment. You agree to pay any applicable fees for the services you select. We reserve the right to change the pricing structure at any time, with prior notice.
        </li>
        <li>
          <strong>Termination:</strong> We may suspend or terminate your access to the platform at our discretion, for reasons including but not limited to violations of these Terms and Conditions, or illegal activity. Upon termination, your rights to access our services will be revoked.
        </li>
        <li>
          <strong>Dispute Resolution:</strong> In the event of a dispute, you agree to resolve the issue through mediation or arbitration, rather than through court proceedings. Any dispute will be governed by the laws of our jurisdiction.
        </li>
        <li>
          <strong>Limitation of Liability:</strong> Our liability for any damages arising from the use of our services is limited to the maximum extent allowed by law. We are not liable for any indirect, incidental, or consequential damages resulting from your use of our platform.
        </li>
        <li>
          <strong>Changes to Terms:</strong> We reserve the right to modify or update these Terms and Conditions at any time. You will be notified of any significant changes, and your continued use of the platform constitutes acceptance of the revised terms.
        </li>
      </ol>
      <p>
        If you have any questions or concerns regarding these Terms and Conditions, please contact our support team. By continuing to access or use our services, you acknowledge that you have read, understood, and agreed to these terms.
      </p>
    </div>
    {/* <div className="flex flex-col items-center">
      <label className="flex items-center mb-4 text-sm text-gray-600">
        <input
          type="checkbox"
          checked={accepted}
          onChange={(e) => setAccepted(e.target.checked)}
          className="mr-2 w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-400"
        />
        I agree to the Terms and Conditions
      </label>
      <button
        onClick={handleAccept}
        disabled={!accepted}
        className={`px-4 py-2 w-full sm:w-auto bg-blue-500 text-white text-sm font-semibold rounded-lg shadow-md transition duration-200 ${
          accepted
            ? "hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
            : "bg-gray-300 cursor-not-allowed"
        }`}
      >
        Accept
      </button>
    </div> */}
  </div>
</div>


  )
}

export default TermsandCondition

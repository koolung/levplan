'use client';

interface CookiePolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CookiePolicyModal = ({ isOpen, onClose }: CookiePolicyModalProps) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-40"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-xl max-w-4xl max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="sticky top-0 bg-[#031931] text-white p-6 flex justify-between items-center">
            <h2 className="text-2xl font-bold">Cookie Policy</h2>
            <button
              onClick={onClose}
              className="text-white hover:text-gray-300 transition-colors text-2xl leading-none"
            >
              ×
            </button>
          </div>

          {/* Content */}
          <div className="p-8 text-gray-800 text-sm leading-relaxed">
            <h3 className="text-lg font-bold mb-4">WHAT ARE COOKIES?</h3>
            <p className="mb-6">
              Cookies are small text files that are stored on your computer or mobile device when you visit a website. They are widely used to 
              make websites work more efficiently and to provide information to the website owners. Cookies allow us to recognize you, remember 
              your preferences, and understand how you use our website.
            </p>

            <h3 className="text-lg font-bold mb-4">HOW WE USE COOKIES</h3>
            <p className="mb-4">LevPlan uses cookies for the following purposes:</p>
            <ul className="list-disc list-inside space-y-3 mb-6 pl-2">
              <li>
                <strong>Essential Cookies:</strong> These cookies are necessary for the website to function properly. They enable core 
                functionality such as security, network management, and accessibility.
              </li>
              <li>
                <strong>Performance Cookies:</strong> These cookies collect information about how you use our website, such as which pages 
                you visit and any errors you encounter. This information helps us improve our website's performance.
              </li>
              <li>
                <strong>Functional Cookies:</strong> These cookies remember your preferences and settings, such as language selection and 
                previous searches, to provide a more personalized experience.
              </li>
              <li>
                <strong>Marketing Cookies:</strong> These cookies track your browsing habits across different websites to deliver targeted 
                advertisements that are relevant to your interests.
              </li>
              <li>
                <strong>Analytics Cookies:</strong> We use analytics cookies to understand visitor behavior and compile aggregate data to 
                help improve the website's functionality and content.
              </li>
            </ul>

            <h3 className="text-lg font-bold mb-4">THIRD-PARTY COOKIES</h3>
            <p className="mb-6">
              Some cookies on our website are placed by third parties, including advertising partners, analytics providers, and social 
              media platforms. These third parties may use cookies to track your online activity across different websites and display 
              personalized advertisements. We encourage you to review the privacy policies of these third parties to understand their 
              cookie practices.
            </p>

            <h3 className="text-lg font-bold mb-4">HOW TO CONTROL COOKIES</h3>
            <p className="mb-4">
              You have the right to accept or reject cookies. Most web browsers allow you to refuse cookies or to alert you when cookies are 
              being sent. To control cookies, you can:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6 pl-2">
              <li>Clear cookies from your browser's settings</li>
              <li>Set your browser to refuse cookies</li>
              <li>Delete individual cookies</li>
              <li>Use private or incognito browsing mode</li>
              <li>Opt out of cookies from specific third-party vendors</li>
            </ul>

            <h3 className="text-lg font-bold mb-4">IMPACT OF REFUSING COOKIES</h3>
            <p className="mb-6">
              Please note that refusing or disabling cookies may affect the functionality of our website and your user experience. Some 
              features may not work properly, and you may be unable to access certain parts of the website. Essential cookies cannot be 
              disabled as they are necessary for the website to function.
            </p>

            <h3 className="text-lg font-bold mb-4">COOKIE RETENTION</h3>
            <p className="mb-6">
              Cookies are stored on your device until they expire or you delete them. The retention period varies depending on the type of 
              cookie and its purpose. Some cookies expire after a single browsing session, while others may remain on your device for weeks 
              or months. You can check your browser settings to see how long cookies are retained.
            </p>

            <h3 className="text-lg font-bold mb-4">CHANGES TO THIS COOKIE POLICY</h3>
            <p className="mb-6">
              LevPlan may update this Cookie Policy from time to time to reflect changes in technology, legislation, or other factors. We 
              encourage you to review this policy periodically to stay informed about how we use cookies. Continued use of the website 
              following any changes signifies your acceptance of those changes.
            </p>

            <h3 className="text-lg font-bold mb-4">YOUR PRIVACY RIGHTS</h3>
            <p className="mb-6">
              For more information about how we collect, use, and protect your personal information, including data collected through cookies, 
              please refer to our Privacy Policy. If you have concerns about our cookie practices or how your data is handled, please contact us.
            </p>

            <h3 className="text-lg font-bold mb-4">CONTACT US</h3>
            <p className="mb-6">
              If you have any questions or concerns about this Cookie Policy or our use of cookies, please contact us at:
            </p>
            <p className="text-sm font-semibold">
              LevPlan Financial Planning Inc<br />
            </p>
          </div>

          {/* Footer */}
          <div className="bg-gray-100 p-6 text-center border-t">
            <button
              onClick={onClose}
              className="bg-[#031931] text-white px-6 py-2 rounded hover:bg-opacity-90 transition-all"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CookiePolicyModal;

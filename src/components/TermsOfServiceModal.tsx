'use client';

interface TermsOfServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TermsOfServiceModal = ({ isOpen, onClose }: TermsOfServiceModalProps) => {
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
            <h2 className="text-2xl font-bold">Terms of Service</h2>
            <button
              onClick={onClose}
              className="text-white hover:text-gray-300 transition-colors text-2xl leading-none"
            >
              ×
            </button>
          </div>

          {/* Content */}
          <div className="p-8 text-gray-800 text-sm leading-relaxed">
            <h3 className="text-lg font-bold mb-4">1. ACCEPTANCE OF TERMS</h3>
            <p className="mb-6">
              By accessing and using this website and services offered by LevPlan Financial Inc. ("Company," "we," "us," or "our"), 
              you accept and agree to be bound by and abide by the terms and provision of this agreement. If you do not agree to abide 
              by the above, please do not use this service.
            </p>

            <h3 className="text-lg font-bold mb-4">2. USE LICENSE</h3>
            <p className="mb-6">
              Permission is granted to temporarily download one copy of the materials (information or software) on LevPlan's website 
              for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under 
              this license you may not:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6 pl-2">
              <li>Modifying or copying the materials</li>
              <li>Using the materials for any commercial purpose or for any public display</li>
              <li>Attempting to decompile or reverse engineer any software contained on the website</li>
              <li>Removing any copyright or other proprietary notations from the materials</li>
              <li>Transferring the materials to another person or "mirroring" the materials on any other server</li>
            </ul>

            <h3 className="text-lg font-bold mb-4">3. DISCLAIMER</h3>
            <p className="mb-6">
              The materials on LevPlan's website are provided on an 'as is' basis. LevPlan makes no warranties, expressed or implied, 
              and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of 
              merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>

            <h3 className="text-lg font-bold mb-4">4. LIMITATIONS</h3>
            <p className="mb-6">
              In no event shall LevPlan or its suppliers be liable for any damages (including, without limitation, damages for loss of 
              data or profit, or due to business interruption) arising out of the use or inability to use the materials on LevPlan's 
              website, even if LevPlan or an authorized representative has been notified orally or in writing of the possibility of such 
              damage.
            </p>

            <h3 className="text-lg font-bold mb-4">5. ACCURACY OF MATERIALS</h3>
            <p className="mb-6">
              The materials appearing on LevPlan's website could include technical, typographical, or photographic errors. LevPlan does 
              not warrant that any of the materials on the website are accurate, complete, or current. LevPlan may make changes to the 
              materials contained on the website at any time without notice.
            </p>

            <h3 className="text-lg font-bold mb-4">6. LINKS</h3>
            <p className="mb-6">
              LevPlan has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked 
              site. The inclusion of any link does not imply endorsement by LevPlan of the site. Use of any such linked website is at the 
              user's own risk.
            </p>

            <h3 className="text-lg font-bold mb-4">7. MODIFICATIONS</h3>
            <p className="mb-6">
              LevPlan may revise these terms of service for the website at any time without notice. By using this website, you are 
              agreeing to be bound by the then current version of these terms of service.
            </p>

            <h3 className="text-lg font-bold mb-4">8. GOVERNING LAW</h3>
            <p className="mb-6">
              These terms and conditions are governed by and construed in accordance with the laws of Canada and the province of 
              New Brunswick, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>

            <h3 className="text-lg font-bold mb-4">9. USER RESPONSIBILITIES</h3>
            <p className="mb-6">
              You agree to use this website only for lawful purposes and in a way that does not infringe upon the rights of others or 
              restrict their use and enjoyment of the website. Prohibited behavior includes:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6 pl-2">
              <li>Harassing or causing distress or inconvenience to any person</li>
              <li>Obscene or offensive language or graphics</li>
              <li>Disrupting the normal flow of dialogue within our website</li>
              <li>Attempting to gain unauthorized access to our systems</li>
            </ul>

            <h3 className="text-lg font-bold mb-4">10. INTELLECTUAL PROPERTY RIGHTS</h3>
            <p className="mb-6">
              All content on this website, including text, graphics, logos, images, and software, is the property of LevPlan Financial Inc. 
              or its suppliers and is protected by international copyright laws. Unauthorized reproduction or distribution of this material 
              is strictly prohibited.
            </p>

            <h3 className="text-lg font-bold mb-4">11. LIMITATION OF LIABILITY</h3>
            <p className="mb-6">
              In no event shall LevPlan, its directors, employees, or agents be liable to you or any third parties for any direct, indirect, 
              incidental, special, punitive, or consequential damages resulting from your use of or inability to use the website or services, 
              even if we have been advised of the possibility of such damages.
            </p>

            <h3 className="text-lg font-bold mb-4">12. CONTACT INFORMATION</h3>
            <p className="mb-6">
              If you have any questions about these Terms of Service, please contact us at:
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

export default TermsOfServiceModal;

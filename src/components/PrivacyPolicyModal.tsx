'use client';

import { useState } from 'react';

export const usePrivacyPolicyModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return { isOpen, open, close };
};

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrivacyPolicyModal = ({ isOpen, onClose }: PrivacyPolicyModalProps) => {
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
            <h2 className="text-2xl font-bold">Privacy Policy</h2>
            <button
              onClick={onClose}
              className="text-white hover:text-gray-300 transition-colors text-2xl leading-none"
            >
              ×
            </button>
          </div>

          {/* Content */}
          <div className="p-8 text-gray-800 text-sm leading-relaxed">
            <p className="mb-6">
              <strong>DATA PRIVACY</strong> LevPlan Financial Inc. ("LevPlan") is committed to protecting the
              privacy of visitors to LevPlan's public web site ("Public Website") and of customers
              using LevPlan's client services web portal ("Portal"), and has established this privacy
              statement ("Statement") to inform you of LevPlan's information gathering and
              dissemination policies and practices regarding your use of the Public Website and/or
              the Client Service web portal.
            </p>

            <h3 className="text-lg font-bold mb-4">PRINCIPLES</h3>
            <p className="mb-4">
              Our data management policies, procedures and practices are designed to
              safeguard three vital aspects of data: integrity, security, and access.
            </p>

            <ul className="list-disc list-inside space-y-3 mb-6 pl-2">
              <li>
                <strong>Integrity</strong> includes qualities of accuracy, consistency, and timeliness.
                Organizational data is a company resource that may be used and relied upon by
                many users. Data integrity begins with the person or office creating the data, and
                is the continuing responsibility of all who subsequently access and use it.
              </li>
              <li>
                <strong>Security</strong> of data encompasses more than electronic security, although that is an
                element of it. While some aspects of security may be assured by technology,
                security also involves a measure of trust. As a valuable and business-critical
                Organizational resource, data must be safeguarded at all levels against damage,
                loss, and breaches of security and all who use it share this responsibility.
              </li>
              <li>
                <strong>Access</strong> to Organizational data is granted internally when a legitimate business or
                research need for the data is demonstrated, and externally when release of such
                data would not violate the company's stewardship obligations, privacy legislation,
                or legal contracts.
              </li>
            </ul>

            <h3 className="text-lg font-bold mb-4">INFORMATION COLLECTED</h3>
            <p className="mb-4">
              Through the Hosted systems (external website,
              marketing automation), LevPlan may collect information such as an Internet Protocol
              (IP) address, web browser information and client actions. This information may be
              collected through the use of commonly-used information-gathering tools, such as
              cookies and web beacons. While participating in online activities clients or other
              individuals may have the option to provide contact information such as name,
              organization name, address, e-mail address, or phone number. Collectively, this
              information is referred to herein as "User Information."
            </p>

            <p className="mb-4 font-semibold">LevPlan may collect personal information in connection with:</p>
            <ul className="list-disc list-inside space-y-2 mb-4 pl-2">
              <li>Website profile creation and user verification for accessing online resources</li>
              <li>Information requests or complaints marketing, newsletters or subscriptions</li>
              <li>Event registration</li>
              <li>Visits or browsing on LevPlan websites</li>
            </ul>

            <p className="mb-4 font-semibold">The types of personal information LevPlan may collect include:</p>
            <ul className="list-disc list-inside space-y-2 mb-6 pl-2">
              <li>Personal and business contact information, such as name, address, telephone number, and email address</li>
              <li>Other unique information such as user IDs and passwords, service preferences and contact preferences</li>
              <li>Details of the services clients have requested from LevPlan or which they have inquired about, together with any additional information necessary to deliver those services and to respond to client inquiries</li>
              <li>Any additional information relating to you that you provide to us directly through our websites or indirectly through use of our websites or online presence, through our representatives or otherwise</li>
            </ul>

            <h3 className="text-lg font-bold mb-4">USE OF INFORMATION COLLECTED</h3>
            <p className="mb-6">
              LevPlan uses User Information for the sole
              purpose of providing and improving client service, maintaining security, and targeted
              information delivery. LevPlan will not share User Information with third parties and is
              subject to privacy restrictions set forth herein.
            </p>

            <hr className="my-6" />

            <h3 className="text-lg font-bold mb-4">OUR PRIVACY POLICY</h3>
            <p className="mb-6">
              LevPlan Financial Planning Inc. (LevPlan, the firm) is committed to protecting and
              respecting your privacy. This privacy policy outlines the ways that we ensure the
              protection of your privacy and the confidentiality of your personal information. This
              policy applies to LevPlan's individual clients, including persons who carry on business
              alone or in partnership with other individuals.
            </p>

            <h4 className="font-bold mb-3">What is Personal Information</h4>
            <p className="mb-6">
              Personal information is defined as information about an identifiable individual such as
              name, address, age, gender, income, marital status, finances, employment, and
              government issued identification numbers. Personal information does not include
              business contact information.
            </p>

            <h4 className="font-bold mb-3">Why We Need Your Information</h4>
            <p className="mb-6">
              Securities and insurance industry regulations require that we obtain a minimum amount
              of information about you so that we can provide the proper level of service and
              supervision to your account. Certain details such as your financial position and risk
              parameters are required as the basis for our recommendations about the proper
              management of your account. We require your SIN in order to comply with certain
              Canada Revenue Agency reporting requirements. We will use your Drivers License or
              Passport as a means of identifying you.
            </p>

            <h4 className="font-bold mb-3">Disclosure of Personal Information - Third Parties</h4>
            <p className="mb-6">
              In certain circumstances, disclosure of personal information to a third party may be
              necessary, as in the case of dealing with our service providers or when disclosure is
              lawfully required. Our service providers are bound by the same regulations and are
              required to maintain procedures and high standards in respect to the protection of your
              personal information.
            </p>
            <p className="mb-6">
              We are required to provide your personal information to regulatory bodies within the
              investment and insurance industries upon request. We may also be required to disclose
              your information to government agencies, law enforcement, or when we are in receipt of
              a valid Court Order or search warrant.
            </p>

            <h4 className="font-bold mb-3">Accountability & Protection of Information</h4>
            <p className="mb-6">
              All LevPlan personnel are required to follow the standards set out in the firm's privacy
              policy and must sign a confidentiality and non-disclosure agreement as a condition of
              employment. Accessing your confidential personal information is only permitted for a
              legitimate business purpose.
            </p>
            <p className="mb-6">
              We maintain strict security standards to protect your information against unauthorized
              access and use. Only authorized individuals have access to your personal information,
              and we conduct training for all personnel on the importance of confidentiality and
              customer privacy.
            </p>

            <h4 className="font-bold mb-3">Retention and Disposal</h4>
            <p className="mb-6">
              We retain your personal information only as long as required to service your account or
              as long as industry regulations demand. When we no longer need your personal
              information, we will delete electronic records and destroy physical records.
            </p>

            <h4 className="font-bold mb-3">Your Right To Access Information</h4>
            <p className="mb-6">
              Most of your information is in the form of account documentation and transaction
              records. You will receive copies of any documents you sign to open your account with
              LevPlan. You will also receive monthly or quarterly account statements, which detail the
              transactions that have occurred in your account during that period. With access to your
              account electronically, you may view your account transactions at any time. You can
              request access to your personal information (unless prohibited by law or regulation). If
              you require further details about your information, you may contact us at any time.
            </p>

            <h4 className="font-bold mb-3">Accuracy Of Information</h4>
            <p className="mb-6">
              Maintaining complete and accurate information about you will enable us to give you the
              best possible service. We expect that you will provide us with updated information when
              you move, change telephone numbers or have any other material changes in your
              information, including employment information. If you detect any errors in the
              documentation we provide to you, please let us know immediately.
            </p>

            <h4 className="font-bold mb-3">Your Account At LevPlan</h4>
            <p className="mb-6">
              By opening an account at LevPlan, you are providing us with consent to collect, use and
              disclose your personal information as set out in this policy. You are also consenting to
              be contacted by telephone, internet, email and other methods for the purpose of
              ongoing communication in the handling of your account(s) using the contact information
              you have provided.
            </p>

            <h4 className="font-bold mb-3">Your Right To Withdraw Consent</h4>
            <p className="mb-6">
              When opening an account, you consent to the collection, use and release of your
              personal information. If at any time you wish to withdraw this consent, please advise us.
              However, withdrawing consent may result in LevPlan being unable to provide certain
              services or maintain an account for you. We will explain these consequences of
              withdrawing consent should you choose to do so.
            </p>

            <h4 className="font-bold mb-3">Contact and Concerns</h4>
            <p className="mb-6">
              We will address and respond to any of your concerns regarding the handling of your
              personal information. Concerns may be addressed to the attention of the Chief
              Compliance Officer/Privacy Officer, LevPlan Financial Planning Inc., 28 Lydia St,
              Dieppe, NB, E1A 4Z5. If you believe your privacy may have been compromised, you
              may initiate a complaint and request a review. Please submit a written complaint to our
              office directly. If you have questions regarding LevPlan's privacy policy, please contact
              us at 705-881-3148.
            </p>

            <p className="text-sm text-gray-600 border-t pt-6">
              These procedures have been set up to comply with the Personal Information
              Protection and Electronic Documents Act
            </p>

            <p className="mt-6 text-sm font-semibold">
              LevPlan Financial Planning Inc
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

export default PrivacyPolicyModal;

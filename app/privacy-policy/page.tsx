import { Metadata } from "next";
import { Container } from "@/src/components/ui/Container";
import { SectionHeading } from "@/src/components/ui/SectionHeading";
import { CONTACT_EMAIL } from "@/src/lib/urls";

export const metadata: Metadata = {
  title: "Privacy Policy - Yug3DAI",
  description: "Privacy policy and data protection information for Yug3DAI.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-12 sm:py-20 bg-white">
      <Container size="narrow">
        <SectionHeading
          pill="Legal"
          title="Privacy Policy"
          description="How Yug3DAI collects, uses, and safeguards information provided through our website."
        />

        <div className="mt-12 prose max-w-none text-[#3f4c7c] space-y-6">
          <p>
            Welcome to Yug3DAI (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;). We respect your privacy and are committed to protecting any personal data you share with us through our website.
          </p>

          <h2 className="text-xl font-bold text-[#1D243C] mt-8 mb-2">
            1. Information We Collect
          </h2>
          <p>
            We collect information you provide directly to us when filling out our contact form, requesting an engineering consultation, or communicating with us via email or WhatsApp. This typically includes:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Your name</li>
            <li>Your email address</li>
            <li>Project specifications, CAD models, or inquiry messages</li>
          </ul>

          <h2 className="text-xl font-bold text-[#1D243C] mt-8 mb-2">
            2. How We Use Your Information
          </h2>
          <p>We use the information collected exclusively to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Respond to your technical inquiries and provide manufacturing quotes</li>
            <li>Coordinate engineering and rapid prototyping projects</li>
            <li>Maintain customer relationship communications</li>
          </ul>

          <h2 className="text-xl font-bold text-[#1D243C] mt-8 mb-2">
            3. Intellectual Property &amp; CAD Confidentiality
          </h2>
          <p>
            We treat all CAD models, 3D designs, proprietary blueprints, and technical specifications submitted for quotation or prototyping with strict confidentiality.
          </p>

          <h2 className="text-xl font-bold text-[#1D243C] mt-8 mb-2">
            4. Contact Us
          </h2>
          <p>
            If you have questions regarding this Privacy Policy, please contact us at{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-[#18444f] font-semibold underline">
              {CONTACT_EMAIL}
            </a>
            .
          </p>
        </div>
      </Container>
    </div>
  );
}

import Layout from '@/components/Layout';

export default function Terms() {
  return (
    <Layout>
      <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Terms of Service</h1>
        <div className="prose prose-slate max-w-none text-slate-600">
          <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>

          <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">1. Acceptance of Terms</h2>
          <p>
            By accessing and using the website of Emmanation Designs, you accept and agree to be bound by the terms and provision of this agreement.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">2. Services</h2>
          <p>
            Emmanation Designs provides digital services including but not limited to Frontend Development, Backend Development, Graphic Design, UI/UX Design, and Video Editing. The specific scope of work for each project will be agreed upon in writing before work commences.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">3. Intellectual Property</h2>
          <p>
            Upon full payment, the client will own the final deliverables of the project. However, Emmanation Designs retains the right to display the work in our portfolio and for marketing purposes, unless a Non-Disclosure Agreement (NDA) has been signed precluding this.
          </p>
          <p>
            All background technology, code snippets, and design tools used to create the deliverables remain the property of Emmanation Designs or their respective license holders.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">4. Payment and Refunds</h2>
          <p>
            Payment terms will be outlined in the project proposal. Generally, a deposit is required to commence work. Refunds are handled on a case-by-case basis and are generally not provided for work that has already been completed and approved.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">5. Limitation of Liability</h2>
          <p>
            In no event shall Emmanation Designs be liable for any direct, indirect, incidental, special, consequential or exemplary damages, including but not limited to, damages for loss of profits, goodwill, use, data or other intangible losses resulting from the use of or inability to use the service.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">6. Governing Law</h2>
          <p>
            These terms and conditions are governed by and construed in accordance with the laws of Nigeria and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto py-16">
      <h1 className="mb-8 text-4xl font-bold font-heading">Terms of Service</h1>
      <div className="prose dark:prose-invert max-w-none">
        <h2 className="font-heading">1. Terms</h2>
        <p>
          By accessing the website at Procellence Technology, you are agreeing to be bound by
          these terms of service, all applicable laws and regulations, and agree that
          you are responsible for compliance with any applicable local laws. If you do not
          agree with any of these terms, you are prohibited from using or accessing this
          site. The materials contained in this website are protected by applicable
          copyright and trademark law.
        </p>

        <h2 className="font-heading">2. Use License</h2>
        <ol type="a">
          <li>
            Permission is granted to temporarily download one copy of the materials
            (information or software) on Procellence Technology's website for personal,
            non-commercial transitory viewing only. This is the grant of a license, not a
            transfer of title, and under this license you may not:
            <ol type="i">
              <li>modify or copy the materials;</li>
              <li>
                use the materials for any commercial purpose, or for any public display
                (commercial or non-commercial);
              </li>
              <li>
                attempt to decompile or reverse engineer any software contained on
                Procellence Technology's website;
              </li>
              <li>
                remove any copyright or other proprietary notations from the materials;
                or
              </li>
              <li>
                transfer the materials to another person or "mirror" the materials on any
                other server.
              </li>
            </ol>
          </li>
          <li>
            This license shall automatically terminate if you violate any of these
            restrictions and may be terminated by Procellence Technology at any time. Upon
            terminating your viewing of these materials or upon the termination of this
            license, you must destroy any downloaded materials in your possession whether
            in electronic or printed format.
          </li>
        </ol>

        <h2 className="font-heading">3. Disclaimer</h2>
        <p>
          The materials on Procellence Technology's website are provided on an 'as is' basis.
          Procellence Technology makes no warranties, expressed or implied, and hereby disclaims
          and negates all other warranties including, without limitation, implied
          warranties or conditions of merchantability, fitness for a particular purpose,
          or non-infringement of intellectual property or other violation of rights.
        </p>

        <h2 className="font-heading">4. Limitations</h2>
        <p>
          In no event shall Procellence Technology or its suppliers be liable for any damages
          (including, without limitation, damages for loss of data or profit, or due to
          business interruption) arising out of the use or inability to use the materials
          on Procellence Technology's website, even if Procellence Technology or a Procellence
          Technology authorized representative has been notified orally or in writing of
          the possibility of such damage.
        </p>

        <h2 className="font-heading">5. Governing Law</h2>
        <p>
          These terms and conditions are governed by and construed in accordance with the
          laws of our state and you irrevocably submit to the exclusive jurisdiction of
          the courts in that State or location.
        </p>
      </div>
    </div>
  );
}

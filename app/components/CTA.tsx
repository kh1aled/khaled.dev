import Link from "next/link";
import React from "react";

const CTA = () => {
  return (
    <section className="cta">
      <h3 className="cta-text">
        Interested in collaborating on exciting projects? <br /> Let's Have a
        project in mind?
      </h3>
      <Link href={"/contact"} className="btn">
        contact us
      </Link>
    </section>
  );
};

export default CTA;

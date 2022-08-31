import { useState } from "react";
import "./contact.scss";

export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="awards">
        <div class="my-auto">
          <h2 class="mb-5">Sources &amp; Contact Info</h2>
          <ul class="fa-ul mb-0">
            <li>
              <i class="fa-li fa fa-trophy text-warning"></i>
              https://www.linkedin.com/in/chase-olshen-4b4401b4/</li>
            <li>
              <i class="fa-li fa fa-trophy text-warning"></i>
              https://github.com/pcchase617?tab=repositories</li>
            <li>
              <i class="fa-li fa fa-trophy text-warning"></i>
            
              https://gitlab.com/olshench</li>
            <li>
              <i class="fa-li fa fa-trophy text-warning"></i>
            
              Mentee - Newport Mesa Animal Hopsital - Dr. Tom Irwin</li>
            <li>
              <i class="fa-li fa fa-trophy text-warning"></i>
           
              Email - olshench@msu.edu</li>
            
            <li>
              <i class="fa-li fa fa-trophy text-warning"></i>
            
              Mobile Phone - (801)631-4579</li>
            <li>
              <i class="fa-li fa fa-trophy text-warning"></i>
             
              Address - Huntington Beach, California</li>
              <a href="./assets/Chase Olshen resume.7-14-22.pdf" target="_blank">

                <li>
                  <i class="fa-li fa fa-trophy text-warning"></i>
              
                  PDF</li>
                </a>

                <a href="./assets/Chase Olshen resume.6-25-22.pdf" download = "pdf">
            </a>
          </ul>
        </div>
      </section>
  );
}
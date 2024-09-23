import React from "react";

const EmailForm = () => {

  return (
    <div className="contact-form-page" id="contact">
      <div class="title">
        <h2>
          <span>0.4</span> What’s Next? <hr />
        </h2>
        <p>
          Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
        </p>
        <a className="btn btn-intermediate" href={`mailto:mikolajklosowski112@gmail.com`}>
          Say Hello
        </a>
      </div>
    </div>
  );
};

export default EmailForm;

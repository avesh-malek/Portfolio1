import "./Contact.css";
function Contact() {


 return (<>
    <section id="contact">
      <form className="form" noValidate>
        <div className="form_container">

          <p id="warning" className="warning hide">
            All fields are required
          </p>

          <div className ="name">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" />
          </div>

          <div className="email">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" />
          </div>

          <div className="message">
            <label htmlFor="message">Message:</label>
            <textarea id="message"></textarea>
          </div>

          <input type="submit" value="Submit" />
        </div>
      </form>
    </section>
  </>);
}
export default Contact;

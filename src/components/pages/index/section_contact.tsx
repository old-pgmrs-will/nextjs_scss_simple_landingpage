import type { NextPage } from 'next'
import UiButton from 'components/ui/button'

const SectionContact: NextPage = () => {
  return (
    <>
      <section className="contact_section">
        <div className="contact" id="contact">
          <h2 className="contact_title">CONTACT</h2>
          <p className="contact_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
          <form className="contact_form">
            <div className="contact_form_fields">
              <input className="contact_form_field contact_form_field-email" type="email" placeholder="Enter name"/>
              <input className="contact_form_field contact_form_field-name" type="email" placeholder="Enter email"/>
            </div>
            <UiButton className="contact_form_button_send md-center mt-8" caption="Send"></UiButton>
          </form>
        </div>
      </section>

      <style jsx>{`
        @use "../../../styles/variables" as v;
        @use "../../../styles/mixins" as m;

        .contact{
          max-width: 80rem; // 1280px
          margin-left: auto;
          margin-right: auto;
          .contact_title{
            font-size: v.$text-3xl;
          }
          .contact_text{
            margin-top: 2rem;
            margin-bottom: 2rem;
            font-size: v.$text-2xl;
          }
          .contact_form{
            .contact_form_fields{
              max-width: 40rem;
              .contact_form_field{
                width: 100%;
                margin-top: 2rem;
                padding: 1rem;
                font-size: v.$text-xl;
                border-radius: 0.5rem;
                border: 1px solid var(--color-mono-2);
              }
            }
          }
        }
      `}</style>
    </>
  )
}

export default SectionContact

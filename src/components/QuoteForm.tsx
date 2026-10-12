import { useId, useState, type FormEvent } from "react"
import { company, services } from "../siteData"

type QuoteFormState = {
  name: string
  company: string
  email: string
  phone: string
  service: string
  message: string
}

const initialForm: QuoteFormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  service: "",
  message: "",
}

export default function QuoteForm() {
  const [form, setForm] = useState<QuoteFormState>(initialForm)
  const [emailPrepared, setEmailPrepared] = useState(false)
  const headingId = useId()
  const instructionsId = useId()

  const update = (field: keyof QuoteFormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }))
  }

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const subject = `Project enquiry${form.service ? ` — ${form.service}` : ""}`
    const body = [
      `Name: ${form.name}`,
      `Company: ${form.company || "Not provided"}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone || "Not provided"}`,
      `Service: ${form.service || "Not sure / multiple"}`,
      "",
      "Project brief:",
      form.message,
    ].join("\n")

    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setEmailPrepared(true)
  }

  return (
    <form
      id="quote"
      className="quote-form"
      onSubmit={submit}
      aria-labelledby={headingId}
      aria-describedby={instructionsId}
    >
      <div className="form-heading">
        <p className="eyebrow">Project enquiry</p>
        <h2 id={headingId}>Tell us what you need</h2>
        <p id={instructionsId}>
          Your details will be prepared as an email for you to review and send.
          {" "}Fields marked * are required. An email app is needed to send your
          enquiry.
        </p>
      </div>

      <div className="form-row">
        <label>
          Full name <span aria-hidden="true">*</span>
          <input
            autoComplete="name"
            required
            type="text"
            value={form.name}
            onChange={(event) => update("name", event.target.value)}
          />
        </label>
        <label>
          Company
          <input
            autoComplete="organization"
            type="text"
            value={form.company}
            onChange={(event) => update("company", event.target.value)}
          />
        </label>
      </div>

      <div className="form-row">
        <label>
          Email address <span aria-hidden="true">*</span>
          <input
            autoComplete="email"
            required
            type="email"
            value={form.email}
            onChange={(event) => update("email", event.target.value)}
          />
        </label>
        <label>
          Phone number
          <input
            autoComplete="tel"
            type="tel"
            value={form.phone}
            onChange={(event) => update("phone", event.target.value)}
          />
        </label>
      </div>

      <label>
        Service
        <select
          value={form.service}
          onChange={(event) => update("service", event.target.value)}
        >
          <option value="">Not sure / multiple</option>
          {services.map((service) => (
            <option key={service.title}>{service.title}</option>
          ))}
        </select>
      </label>

      <label>
        Project brief <span aria-hidden="true">*</span>
        <textarea
          required
          rows={6}
          placeholder="Include the project location, scope, preferred timing and any specific requirements."
          value={form.message}
          onChange={(event) => update("message", event.target.value)}
        />
      </label>

      <button className="button-link button-link--primary" type="submit">
        <span>Prepare Email Enquiry</span>
        <span aria-hidden="true">→</span>
      </button>

      <p className="form-fallback" role="status" aria-atomic="true">
        {emailPrepared &&
          "Your email enquiry is prepared. Review and send it in your email app. "}
        If your email app does not open, email{" "}
        <a href={`mailto:${company.email}`}>{company.email}</a> directly.
      </p>
    </form>
  )
}

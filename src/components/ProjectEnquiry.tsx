import React, { useEffect, useRef, useState } from 'react';
import { businessSolutions } from '@/data/services';

interface ProjectEnquiryProps {
  preselectedService?: string;
  prefilledMessage?: string;
}

const CONTACT_EMAIL = 'emmanationdesigns@gmail.com';
const CONTACT_ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT || '';

export default function ProjectEnquiry({
  preselectedService,
  prefilledMessage,
}: ProjectEnquiryProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('');
  const [msg, setMsg] = useState('');
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    service?: string;
    msg?: string;
  }>({});
  const [status, setStatus] = useState<{
    type: '' | 'ok' | 'bad';
    text: string;
  }>({ type: '', text: '' });
  const [sending, setSending] = useState(false);

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const serviceRef = useRef<HTMLSelectElement>(null);
  const msgRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (preselectedService) {
      setService(preselectedService);
    }
  }, [preselectedService]);

  useEffect(() => {
    if (prefilledMessage) {
      setMsg(prefilledMessage);
    }
  }, [prefilledMessage]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: '', text: '' });

    const nextErrors: typeof errors = {};
    if (!name.trim()) nextErrors.name = 'Enter your name.';
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.trim())) {
      nextErrors.email = 'Enter a valid email address.';
    }
    if (!service) nextErrors.service = 'Choose a service.';
    if (msg.trim().length < 20) {
      nextErrors.msg = 'Please add at least 20 characters.';
    }

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      if (nextErrors.name) nameRef.current?.focus();
      else if (nextErrors.email) emailRef.current?.focus();
      else if (nextErrors.service) serviceRef.current?.focus();
      else if (nextErrors.msg) msgRef.current?.focus();
      return;
    }

    if (!CONTACT_ENDPOINT) {
      const sj = encodeURIComponent(`Project enquiry: ${service}`);
      const bd = encodeURIComponent(
        `Name: ${name.trim()}\nEmail: ${email.trim()}\nService: ${service}\n\n${msg.trim()}`
      );
      setStatus({
        type: 'ok',
        text: `Opening your email app with your message ready to send. If nothing opens, email ${CONTACT_EMAIL} or message us on WhatsApp.`,
      });
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${sj}&body=${bd}`;
      return;
    }

    setSending(true);
    try {
      const res = await fetch(CONTACT_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          service,
          message: msg.trim(),
        }),
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus({
        type: 'ok',
        text: 'Thank you. Your enquiry has been sent and we’ll reply soon.',
      });
      setName('');
      setEmail('');
      setService('');
      setMsg('');
      setErrors({});
    } catch {
      setStatus({
        type: 'bad',
        text: 'Something went wrong and your message wasn’t sent. Please try again or email us directly.',
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="dk">
      <div className="w sp">
        <div className="rv">
          <p className="lbl">Contact</p>
          <h2>Tell us what you want to build.</h2>
          <p className="lead" style={{ marginTop: '24px' }}>
            Share a few details and we’ll reply with clear next steps.
          </p>
          <p className="lead" style={{ marginTop: '16px' }}>
            Email:{' '}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              id="em"
              style={{ color: '#fff' }}
            >
              {CONTACT_EMAIL}
            </a>
          </p>
          <div className="ctas" style={{ marginTop: '24px' }}>
            <a
              className="ed-btn p"
              href="https://wa.me/2349038418469"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp us
            </a>
            <a
              className="ed-btn o"
              href="https://x.com/Emmanation_dsgn"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#fff', borderColor: '#ffffff60' }}
            >
              X
            </a>
            <a
              className="ed-btn o"
              href="https://www.instagram.com/emmanation.designs?cnvx=YWJiazMnl4MXlz"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#fff', borderColor: '#ffffff60' }}
            >
              Instagram
            </a>
          </div>
        </div>

        <form className="fm" id="f" noValidate onSubmit={handleSubmit}>
          <div className="row">
            <label>
              Full name
              <input
                ref={nameRef}
                name="name"
                autoComplete="name"
                value={name}
                aria-invalid={errors.name ? 'true' : undefined}
                onChange={(e) => {
                  setName(e.target.value);
                  if (errors.name) setErrors((p) => ({ ...p, name: undefined }));
                }}
              />
              <span className="err">{errors.name || ''}</span>
            </label>

            <label>
              Email
              <input
                ref={emailRef}
                name="email"
                type="email"
                autoComplete="email"
                value={email}
                aria-invalid={errors.email ? 'true' : undefined}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (errors.email) setErrors((p) => ({ ...p, email: undefined }));
                }}
              />
              <span className="err">{errors.email || ''}</span>
            </label>
          </div>

          <label>
            Service needed
            <select
              ref={serviceRef}
              name="service"
              value={service}
              aria-invalid={errors.service ? 'true' : undefined}
              onChange={(e) => {
                setService(e.target.value);
                if (errors.service) {
                  setErrors((p) => ({ ...p, service: undefined }));
                }
              }}
            >
              <option value="">Choose a service</option>
              {businessSolutions.map((svc) => (
                <option key={svc.id} value={svc.title}>
                  {svc.title}
                </option>
              ))}
            </select>
            <span className="err">{errors.service || ''}</span>
          </label>

          <label>
            Project details
            <textarea
              ref={msgRef}
              name="msg"
              value={msg}
              aria-invalid={errors.msg ? 'true' : undefined}
              onChange={(e) => {
                setMsg(e.target.value);
                if (errors.msg) setErrors((p) => ({ ...p, msg: undefined }));
              }}
              placeholder="What are you building, and what does success look like?"
            />
            <span className="err">{errors.msg || ''}</span>
          </label>

          <button
            className="ed-btn p"
            type="submit"
            id="sb"
            disabled={sending}
            style={{ justifySelf: 'start' }}
          >
            {sending ? 'Sending…' : 'Send enquiry'}
          </button>

          <div
            id="st"
            className={status.type || undefined}
            role="status"
            aria-live="polite"
          >
            {status.text}
          </div>
        </form>
      </div>
    </section>
  );
}

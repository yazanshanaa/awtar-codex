'use client';

import { useMemo, useState } from 'react';
import type { Locale } from '@/lib/constants';
import type { QuoteContent } from '@/content/quote';

type Errors = Partial<Record<'name' | 'phone' | 'area' | 'service' | 'description', string>>;

export function QuoteForm({ locale, content, phone, initialService }: { locale: Locale; content: QuoteContent; phone: string; initialService: string }) {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [selectedFiles, setSelectedFiles] = useState<string[]>([]);
  const [startedAt] = useState<number>(Date.now());
  const [formValues, setFormValues] = useState({
    name: '',
    phone: '',
    area: '',
    service: initialService,
    sizes: '',
    description: '',
    preferredTime: ''
  });

  const whatsappUrl = useMemo(() => {
    const selectedService = content.serviceOptions.find((option) => option.value === formValues.service)?.label || formValues.service;
    const message = content.whatsappTemplate
      .replace('{{name}}', encodeURIComponent(formValues.name || '-'))
      .replace('{{phone}}', encodeURIComponent(formValues.phone || '-'))
      .replace('{{service}}', encodeURIComponent(selectedService || '-'))
      .replace('{{area}}', encodeURIComponent(formValues.area || '-'))
      .replace('{{description}}', encodeURIComponent(formValues.description || '-'));

    return `https://wa.me/${phone.replace(/[^\d]/g, '')}?text=${message}`;
  }, [content.serviceOptions, content.whatsappTemplate, formValues, phone]);

  function validate(): boolean {
    const nextErrors: Errors = {};
    if (formValues.name.trim().length < 2) nextErrors.name = content.validation.required;
    if (!/^[+\d\s()-]{7,20}$/.test(formValues.phone.trim())) nextErrors.phone = content.validation.phone;
    if (formValues.area.trim().length < 2) nextErrors.area = content.validation.required;
    if (!formValues.service.trim()) nextErrors.service = content.validation.required;
    if (formValues.description.trim().length < 10) nextErrors.description = content.validation.descMin;
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!validate()) return;

    setStatus('submitting');
    const formElement = event.currentTarget;
    const data = new FormData(formElement);

    const response = await fetch('/api/quote', { method: 'POST', body: data });
    if (response.ok) {
      setStatus('success');
      formElement.reset();
      setSelectedFiles([]);
      setFormValues({ name: '', phone: '', area: '', service: initialService, sizes: '', description: '', preferredTime: '' });
      return;
    }

    setStatus('error');
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5 rounded-3xl border border-border bg-surface p-6 sm:p-8" noValidate>
      <input type="hidden" name="locale" value={locale} />
      <input type="hidden" name="startedAt" value={startedAt} />
      <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <div className="grid gap-4 sm:grid-cols-2">
        <Field
          label={content.fields.name}
          name="name"
          value={formValues.name}
          placeholder={content.placeholders.name}
          error={errors.name}
          onChange={(value) => setFormValues((prev) => ({ ...prev, name: value }))}
        />
        <Field
          label={content.fields.phone}
          name="phone"
          value={formValues.phone}
          placeholder={content.placeholders.phone}
          error={errors.phone}
          onChange={(value) => setFormValues((prev) => ({ ...prev, phone: value }))}
        />
        <Field
          label={content.fields.area}
          name="area"
          value={formValues.area}
          placeholder={content.placeholders.area}
          error={errors.area}
          onChange={(value) => setFormValues((prev) => ({ ...prev, area: value }))}
        />
        <div>
          <label htmlFor="service" className="mb-2 block text-sm font-semibold">{content.fields.service}</label>
          <select
            id="service"
            name="service"
            value={formValues.service}
            onChange={(event) => setFormValues((prev) => ({ ...prev, service: event.target.value }))}
            className="w-full rounded-xl border border-border bg-bg px-4 py-3 text-base focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          >
            {content.serviceOptions.map((option) => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
          {errors.service ? <p className="mt-1 text-xs text-red-600">{errors.service}</p> : null}
        </div>
      </div>

      <Field
        label={content.fields.sizes}
        name="sizes"
        value={formValues.sizes}
        placeholder={content.placeholders.sizes}
        onChange={(value) => setFormValues((prev) => ({ ...prev, sizes: value }))}
      />

      <div>
        <label htmlFor="description" className="mb-2 block text-sm font-semibold">{content.fields.description}</label>
        <textarea
          id="description"
          name="description"
          value={formValues.description}
          rows={5}
          placeholder={content.placeholders.description}
          onChange={(event) => setFormValues((prev) => ({ ...prev, description: event.target.value }))}
          className="w-full rounded-xl border border-border bg-bg px-4 py-3 text-base focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
        />
        {errors.description ? <p className="mt-1 text-xs text-red-600">{errors.description}</p> : null}
      </div>

      <Field
        label={content.fields.preferredTime}
        name="preferredTime"
        value={formValues.preferredTime}
        placeholder={content.placeholders.preferredTime}
        onChange={(value) => setFormValues((prev) => ({ ...prev, preferredTime: value }))}
      />

      <div>
        <label htmlFor="images" className="mb-2 block text-sm font-semibold">{content.fields.images}</label>
        <input
          id="images"
          name="images"
          type="file"
          multiple
          accept="image/*"
          onChange={(event) => setSelectedFiles(Array.from(event.target.files || []).map((file) => file.name))}
          className="w-full rounded-xl border border-border bg-bg px-4 py-3 text-sm"
        />
        {selectedFiles.length > 0 ? (
          <ul className="mt-2 list-disc ps-5 text-xs text-fg/80">
            {selectedFiles.map((fileName) => (
              <li key={fileName}>{fileName}</li>
            ))}
          </ul>
        ) : null}
      </div>

      <div className="flex flex-wrap gap-3">
        <a href={whatsappUrl} className="rounded-lg bg-gold px-5 py-3 text-sm font-semibold text-black hover:opacity-90">
          {content.actions.whatsapp}
        </a>
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="rounded-lg border border-border bg-bg px-5 py-3 text-sm font-semibold hover:border-gold disabled:opacity-60"
        >
          {status === 'submitting' ? content.actions.sending : content.actions.submit}
        </button>
      </div>

      {status === 'success' ? <p className="rounded-xl bg-green-50 px-4 py-3 text-sm text-green-800">{content.states.success}</p> : null}
      {status === 'error' ? <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-800">{content.states.error}</p> : null}
    </form>
  );
}

function Field({
  label,
  name,
  value,
  placeholder,
  error,
  onChange
}: {
  label: string;
  name: string;
  value: string;
  placeholder: string;
  error?: string;
  onChange: (value: string) => void;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-semibold">{label}</label>
      <input
        id={name}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-xl border border-border bg-bg px-4 py-3 text-base focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
      />
      {error ? <p className="mt-1 text-xs text-red-600">{error}</p> : null}
    </div>
  );
}

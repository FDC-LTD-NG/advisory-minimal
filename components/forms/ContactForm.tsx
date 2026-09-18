const inputClasses =
  "w-full border border-ink/20 bg-surface px-4 py-3 font-sans text-sm text-ink placeholder:text-charcoal/40 outline-none transition-colors focus:border-primary";

const labelClasses =
  "mb-2 block font-sans text-[11px] font-bold uppercase tracking-[0.12em] text-ink";

export default function ContactForm() {
  return (
    <form
      action="https://submit-form.com/VAPC6QdGP"
      method="POST"
      className="space-y-5"
    >
      <div>
        <label htmlFor="name" className={labelClasses}>
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          required
          className={inputClasses}
        />
      </div>
      <div>
        <label htmlFor="email" className={labelClasses}>
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          required
          className={inputClasses}
        />
      </div>
      <div>
        <label htmlFor="message" className={labelClasses}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Message"
          required
          rows={4}
          className={`${inputClasses} resize-y`}
        />
      </div>
      <button
        type="submit"
        className="w-full bg-ink px-6 py-3.5 font-sans text-[11px] font-bold uppercase tracking-[0.12em] text-surface transition-opacity hover:opacity-90"
      >
        Send
      </button>
    </form>
  );
}

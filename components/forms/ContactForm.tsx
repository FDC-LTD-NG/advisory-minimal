const inputClasses =
  "w-full rounded-sm border border-[#273469]/20 bg-white/70 px-3 py-2.5 font-sans text-sm text-ink placeholder:text-ink/40 outline-none transition-all duration-200 focus:border-[#4C63D2] focus:bg-white focus:ring-1 focus:ring-[#4C63D2]/20";

const labelClasses =
  "mb-1.5 block font-sans text-[10px] font-bold uppercase tracking-[0.15em] text-primary";

export default function ContactForm() {
  return (
    <form
      action="https://submit-form.com/VAPC6QdGP"
      method="POST"
      className="space-y-4"
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
          rows={3}
          className={`${inputClasses} resize-y`}
        />
      </div>
      <button
        type="submit"
        className="w-full bg-[#1E2749] px-5 py-3 font-sans text-[10px] font-bold uppercase tracking-[0.15em] text-[#FAFAFF] transition-all duration-200 hover:bg-[#4C63D2] hover:shadow-lg"
      >
        Send
      </button>
    </form>
  );
}

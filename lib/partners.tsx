export type Partner = {
  name: string;
  role: string;
  icon: React.ReactNode;
};

/** Placeholder partner marks — swap for supplied logos when available. */
export const partners: Partner[] = [
  {
    name: "District Assembly",
    role: "Local government partner",
    icon: (
      <svg viewBox="0 0 40 40" className="h-11 w-11" fill="none" aria-hidden="true">
        <g><path d="M8 34V20a12 12 0 0124 0v14" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round"></path><path d="M5 34h30" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round"></path><circle cx="20" cy="20" r="3" fill="#F5B90B"></circle></g>
      </svg>
    ),
  },
  {
    name: "Education Directorate",
    role: "Basic education partner",
    icon: (
      <svg viewBox="0 0 40 40" className="h-11 w-11" fill="none" aria-hidden="true">
        <g><path d="M20 12c-4-2.6-8-3.4-13-2.6v18.4c5-.8 9 0 13 2.6 4-2.6 8-3.4 13-2.6V9.4C28 8.6 24 9.4 20 12z" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="round"></path><path d="M20 12v18.4" stroke="#F5B90B" strokeWidth="2.4"></path></g>
      </svg>
    ),
  },
  {
    name: "Health Directorate",
    role: "Community health partner",
    icon: (
      <svg viewBox="0 0 40 40" className="h-11 w-11" fill="none" aria-hidden="true">
        <g><circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="2.5"></circle><path d="M20 13v14M13 20h14" stroke="#F5B90B" strokeWidth="2.8" strokeLinecap="round"></path></g>
      </svg>
    ),
  },
  {
    name: "Donor Foundation",
    role: "Programme funding partner",
    icon: (
      <svg viewBox="0 0 40 40" className="h-11 w-11" fill="none" aria-hidden="true">
        <g><path d="M6 21c0 7.7 6.3 14 14 14s14-6.3 14-14" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round"></path><path d="M12 20c0 4.4 3.6 8 8 8s8-3.6 8-8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" opacity=".55"></path><circle cx="20" cy="9" r="3.4" fill="#F5B90B"></circle></g>
      </svg>
    ),
  },
  {
    name: "Corporate Partner",
    role: "Social investment partner",
    icon: (
      <svg viewBox="0 0 40 40" className="h-11 w-11" fill="none" aria-hidden="true">
        <g><rect x="6" y="18" width="12" height="16" rx="2" stroke="currentColor" strokeWidth="2.4"></rect><rect x="22" y="8" width="12" height="26" rx="2" stroke="currentColor" strokeWidth="2.4"></rect><path d="M26 15h4" stroke="#F5B90B" strokeWidth="2.4" strokeLinecap="round"></path></g>
      </svg>
    ),
  },
  {
    name: "NGO Network",
    role: "Joint delivery partner",
    icon: (
      <svg viewBox="0 0 40 40" className="h-11 w-11" fill="none" aria-hidden="true">
        <g><circle cx="20" cy="10" r="3.4" stroke="currentColor" strokeWidth="2.3"></circle><circle cx="9" cy="29" r="3.4" stroke="currentColor" strokeWidth="2.3"></circle><circle cx="31" cy="29" r="3.4" stroke="currentColor" strokeWidth="2.3"></circle><path d="M18 13L11 26M22 13l7 13M12.5 29h15" stroke="#F5B90B" strokeWidth="2.1" strokeLinecap="round"></path></g>
      </svg>
    ),
  },
  {
    name: "Diaspora Association",
    role: "Community giving partner",
    icon: (
      <svg viewBox="0 0 40 40" className="h-11 w-11" fill="none" aria-hidden="true">
        <g><circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="2.5"></circle><path d="M6 20h28M20 6c4.5 4 4.5 24 0 28M20 6c-4.5 4-4.5 24 0 28" stroke="currentColor" strokeWidth="1.9" opacity=".6"></path><circle cx="28" cy="13" r="2.6" fill="#F5B90B"></circle></g>
      </svg>
    ),
  },
  {
    name: "Research Institute",
    role: "Evidence and learning partner",
    icon: (
      <svg viewBox="0 0 40 40" className="h-11 w-11" fill="none" aria-hidden="true">
        <g><path d="M7 33V13M7 33h26" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round"></path><path d="M13 27v-6M20 27V15M27 27v-9" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round"></path><circle cx="27" cy="13" r="2.8" fill="#F5B90B"></circle></g>
      </svg>
    ),
  },
];

// Edit this file to personalize the site. Everything here is used across pages.
export const site = {
  name: 'Tommy Tracy II',
  title: 'Research Scientist',
  affiliation: 'Department of Computer Science, University of Virginia',
  email: 'tjt7a@virginia.edu',
  location: 'Rice Hall 420, Charlottesville, VA',
  description:
    'Tommy Tracy II is a research scientist in the Computer Science Dept. at the University of Virginia working on hardware acceleration with GPUs and FPGAs, machine learning and AI, runtime verification, and bioinformatics.',
  // Short paragraphs shown on the home page. Markdown is not parsed here; use plain text.
  bio: [
    'I am a Research Scientist in the Department of Computer Science at the University of Virginia, where I also earned my B.S., M.E., and Ph.D. in Computer Engineering and was a postdoctoral researcher. My research is in automata computing: making pattern matching and automata processing fast through FPGA and in-memory accelerators, benchmark suites, compilers, and debugging tools.',
    'My current work spans pre-silicon and runtime hardware verification, hardware specification mining, LLM-driven hardware synthesis, FPGA-accelerated bioinformatics, and high-speed regular expression and security log processing.',
  ],
  interests: [
    'Automata computing',
    'Hardware acceleration & FPGAs',
    'Hardware verification',
    'Regular expressions & pattern matching',
    'Bioinformatics',
    'Network security',
    'Machine learning',
  ],
  // Remove any you don't use.
  links: [
    { label: 'Google Scholar', href: 'https://scholar.google.com/citations?user=B0F-NKEAAAAJ' },
    { label: 'ORCID', href: 'https://orcid.org/0000-0002-9872-0246' },
  ],
  // Put your headshot at public/headshot.jpg, or set to null to hide it.
  photo: '/headshot.jpg' as string | null,
  // Your name as it appears in author lists; it is bolded on the publications page.
  authorName: 'T. Tracy II',
  cv: {
    // Drop your PDF at public/cv.pdf; the download button appears once the file exists.
    pdf: '/cv.pdf' as string | null,
    updated: 'November 13, 2026',
  },
};

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Research', href: '/research/' },
  { label: 'Publications', href: '/publications/' },
  { label: 'CV', href: '/cv/' },
  { label: 'Wiki', href: '/wiki/' },
];

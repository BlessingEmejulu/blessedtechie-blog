export default function LeadershipSection() {
  const leadership = [
  {
    title: "GDG COOU Lead Organizer",
    description: "Created opportunities for 500 students to explore web, cloud, and AI while encouraging peer-to-peer learning.",
    link: "https://gdg.community.dev/gdg-on-campus-chukwuemeka-odumegwu-ojukwu-university-anambra-nigeria/",
  },
  {
    title: "COOU Techies Community Lead",
    description: "Led the student developer community from 72 to 370 members through workshops, mentorship, and collaborations with other tech groups.",
    link: "https://x.com/atc_ulicampus"
  },
  {
    title: "Africoders Campus Representative",
    description: "Organized meetups and activities to connect African developers, fostering collaboration and knowledge sharing.",
    link: "https://africoders.com",
  },
];


  return (
    <section className="gap-8 px-4 py-12 md:flex-row md:gap-16 md:px-8 lg:px-20">
      <h2 className="text-sm font-semibold text-gray-700 tracking-widest mb-6 flex items-center gap-2">
        LEADERSHIP
        <span className="flex-1 border-t border-gray-200 ml-2" />
      </h2>
      <ul className="space-y-8">
  {leadership.map((role, idx) => (
    <li key={idx}>
      <h3 className="text-lg font-semibold text-purple-800 mb-1">
        <a 
          href={role.link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:underline"
        >
          {role.title}
        </a>
      </h3>
      <p className="text-gray-700">{role.description}</p>
    </li>
  ))}
</ul>
    </section>
  );
}

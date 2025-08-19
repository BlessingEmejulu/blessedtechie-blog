export default function LeadershipSection() {
  const leadership = [
    {
      title: "GDG COOU Lead Organizer",
      description:
        "Created opportunities for students to explore web, cloud, and AI while encouraging peer-to-peer learning.",
    },
    {
      title: "COOU Techies Community Lead",
      description:
        "Led the student developer community from 72 to 370 members through workshops, mentorship, and collaborations with other tech groups.",
    },
    {
      title: "Africoders Campus Representative",
      description:
        "Organized meetups and activities to connect African developers, fostering collaboration and knowledge sharing.",
    },
  ];

  return (
    <section className="py-10 max-w-3xl mx-auto">
      <h2 className="text-sm font-semibold text-gray-700 tracking-widest mb-6 flex items-center gap-2">
        LEADERSHIP
        <span className="flex-1 border-t border-gray-200 ml-2" />
      </h2>
      <ul className="space-y-8">
        {leadership.map((role, idx) => (
          <li key={idx}>
            <h3 className="text-lg font-semibold text-purple-800 mb-1">
              {role.title}
            </h3>
            <p className="text-gray-700">{role.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

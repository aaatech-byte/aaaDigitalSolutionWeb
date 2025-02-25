interface TeamMember {
  name: string;
  position: string;
  image: string;
}

const team: TeamMember[] = [
  {
    name: "Muhammad Haseeb Abbas",
    position: "Managing Director",
    image: "/images/team_images/haseeb.jpeg",
  },
  {
    name: "Junaid Khan",
    position: "Marketing Head",
    image: "/images/team_images/junaid.jpeg",
  },
  {
    name: "Muhammad Nabeel Khan",
    position: "Creative Director",
    image: "/images/team_images/nabeel.jpeg",
  },
];

const TeamSec: React.FC = () => {
  return (
    <section className="py-12 bg-gradient-primary">
      <div className=" mx-auto max-w-7xl ">
        <div className="mb-12 text-center">
        <h2 className="mt-4 text-2xl md:text-5xl font-orbitron font-semibold text-white mb-4">
            Meet <span className="text-yellow">Our Team</span>
          </h2>
        </div>
        <div className="flex justify-center items-center flex-wrap gap-4 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <div key={index} className="group rounded-lg  overflow-hidden">
              <div className="bg-white">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-80 w-80 object-cover cursor-pointer ease-linear group-hover:mix-blend-normal mix-blend-luminosity transition-all duration-500"
                />
              </div>
              <div className="py-3 text-center">
                <h3 className="text-lg text-white font-orbitron">{member.name}</h3>
                <p className="text-yellow font-semibold">{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSec;
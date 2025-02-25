import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

type Stat = {
  number: number;
  label: string;
  suffix?: string;
};

const stats: Stat[] = [
  { number: 50, label: "Projects Delivered", suffix: "+" },
  { number: 98, label: "Client Satisfaction", suffix: "%" },
  { number: 5, label: "Years Experience", suffix: "+" },
  { number: 24, label: "Support", suffix: "/7" },
];

export default function Stats() {
  return (
    <section className="bg-primary py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <StatItem key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}

type StatItemProps = {
  number: number;
  label: string;
  suffix?: string;
};

const StatItem: React.FC<StatItemProps> = ({ number, label, suffix = "" }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 1.0,
  });

  return (
    <div ref={ref}>
      <div className="text-3xl md:text-4xl  font-orbitron text-yellow">
        {inView ? (
          <CountUp end={number} suffix={suffix} duration={5} />
        ) : (
          <span className="text-white">0{suffix}</span>
        )}
      </div>
      <div className="text-white mt-3 text-xl font-semibold">{label}</div>
    </div>
  );
};

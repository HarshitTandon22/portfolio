
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';

const Skills = () => {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.2,
  });

  const frontendSkills = [
    { name: 'React', value: 40, color: '#61DAFB' },
    { name: 'JavaScript', value: 42, color: '#F7DF1E' },
    { name: 'TypeScript', value: 38, color: '#007ACC' },
    { name: 'HTML/CSS', value: 45, color: '#E34F26' },
    { name: 'Next.js', value: 40, color: '#000000' },
  ];

  const backendSkills = [
    { name: 'Node.js', value: 41, color: '#339933' },
    { name: 'Python', value: 39, color: '#3776AB' },
    { name: 'Express', value: 43, color: '#000000' },
    { name: 'MongoDB', value: 40, color: '#47A248' },
    { name: 'SQL', value: 38, color: '#336791' },
  ];

  const otherSkills = [
    { name: 'Git', value: 44, color: '#F05032' },
    { name: 'Docker', value: 37, color: '#2496ED' },
    { name: 'AWS', value: 39, color: '#FF9900' },
    { name: 'Testing', value: 41, color: '#FF4785' },
    { name: 'REST APIs', value: 42, color: '#0096FF' },
  ];

  const skillGroups = [
    { title: 'Frontend', skills: frontendSkills },
    { title: 'Backend', skills: backendSkills },
    { title: 'Other', skills: otherSkills },
  ];

  const SkillBar = ({ skill, delay }: { skill: { name: string; value: number; color: string }; delay: number }) => (
    <div 
      className={`mb-4 ${isIntersecting ? 'animate-fade-in' : 'opacity-0'}`} 
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium">{skill.name}</span>
        <span className="text-sm text-muted-foreground">{skill.value}%</span>
      </div>
      <div className="w-full bg-secondary rounded-full h-2.5">
        <div 
          className="h-2.5 rounded-full transition-all duration-1000 ease-out" 
          style={{ 
            width: isIntersecting ? `${skill.value}%` : '0%',
            backgroundColor: skill.color,
            transition: `width 1s ease-out ${delay}ms`
          }}
        ></div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="section-container" ref={elementRef as React.RefObject<HTMLDivElement>}>
      <div className={`text-center mb-12 ${isIntersecting ? 'animate-fade-in' : 'opacity-0'}`}>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Technologies and tools I work with for full stack development.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        <div>
          {skillGroups.slice(0, 2).map((group, groupIndex) => (
            <div key={group.title} className="mb-8">
              <h3 className="text-xl font-semibold mb-4">{group.title}</h3>
              <div>
                {group.skills.map((skill, skillIndex) => (
                  <SkillBar 
                    key={skill.name} 
                    skill={skill} 
                    delay={(groupIndex * 5 + skillIndex) * 100} 
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div>
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">{skillGroups[2].title}</h3>
            <div>
              {skillGroups[2].skills.map((skill, skillIndex) => (
                <SkillBar 
                  key={skill.name} 
                  skill={skill} 
                  delay={(2 * 5 + skillIndex) * 100} 
                />
              ))}
            </div>
          </div>
          
          <div className={`h-72 ${isIntersecting ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '800ms' }}>
            <h3 className="text-xl font-semibold mb-4">Skill Distribution</h3>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={[
                    { name: 'Frontend', value: 40 },
                    { name: 'Backend', value: 40 },
                    { name: 'Other', value: 40 },
                  ]}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  innerRadius={40}
                  paddingAngle={5}
                  dataKey="value"
                  animationDuration={1500}
                  animationBegin={500}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  labelLine={false}
                >
                  <Cell fill="#8884d8" />
                  <Cell fill="#82ca9d" />
                  <Cell fill="#ffc658" />
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

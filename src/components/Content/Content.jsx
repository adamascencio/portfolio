import Cover from '../../components/Cover/Cover';
import AboutMe from '../../components/AboutMe/AboutMe'
import Resume from '../../components/Resume/Resume'
import Projects from '../../components/Projects/Projects'

export default function Content() {
  return (
    <section className='Content'>
      <Cover />
      <AboutMe />
      <Resume />
      <Projects />
    </section>
  );
}
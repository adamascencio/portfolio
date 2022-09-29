import AboutMe from '../../components/AboutMe/AboutMe'
import Resume from '../../components/Resume/Resume'
import Projects from '../../components/Projects/Projects'
import Contact from '../../components/Contact/Contact'

export default function Content() {
  return (
    <section className='Content'>
      <AboutMe />
      <Resume />
      <Projects />
      <Contact />
    </section>
  );
}
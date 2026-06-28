import WordsPullUpMultiStyle from './WordsPullUpMultiStyle';
import AnimatedParagraph from './AnimatedParagraph';

export default function About() {
  return (
    <section id="about" className="l-about">
      <div className="l-about-card">
        <div className="l-about-label">Exam integrity</div>

        <WordsPullUpMultiStyle
          className="l-about-heading"
          segments={[
            { text: 'Pramaan secures the entire exam lifecycle,', className: '' },
            { text: 'from sealed paper to final score.', className: 'font-serif' },
            { text: 'Built on cryptography, AI and a tamper-proof trail.', className: '' },
          ]}
        />

        <AnimatedParagraph
          className="l-about-body"
          text="After NEET-UG 2024, a question paper leaked from a vault in Hazaribagh and a flawed evaluation portal broke the trust of twenty-four lakh students. Pramaan exists so that never happens again — every paper traceable, every mark verifiable, every examination provably fair."
        />
      </div>
    </section>
  );
}

import WordsPullUpMultiStyle from './WordsPullUpMultiStyle';

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
      </div>
    </section>
  );
}

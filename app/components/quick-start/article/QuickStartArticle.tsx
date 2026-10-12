import QuickStartIntro from './QuickStartIntro';
import QuickStartSteps from './QuickStartSteps';
import QuickStartConclusion from './QuickStartConclusion';

export default function QuickStartArticle() {
  return (
    <article className="relative mx-auto w-full max-w-194">
      <QuickStartIntro />
      <QuickStartSteps />
      <QuickStartConclusion />
    </article>
  );
}
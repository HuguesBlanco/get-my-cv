import { Text } from '@react-pdf/renderer';
import CvHeader from '../primitives/CvHeader';
import CvPage from '../primitives/CvPage';
import CvPart from '../primitives/CvPart';
import CvSlot from '../primitives/CvSlot';
import CvApplicationNarative from '../sections/CvApplicationNarative';
import { CoverLetter, Cv, Languages } from '../types/cvTypes';
import { PdfPageElement } from '../types/pdfTypes';

type CvCoverLetterProps = {
  cv: Cv;
  coverLetter: CoverLetter;
  language: Languages;
  color: string;
};
function CvCoverLetter({
  cv,
  coverLetter,
  language,
  color,
}: CvCoverLetterProps): PdfPageElement {
  const candidateLabel =
    language === Languages.ENGLISH ? 'Candidate' : 'Candidat';

  return (
    <CvPage>
      <CvPart>
        <CvSlot>
          <CvHeader
            preTitle={candidateLabel}
            title={cv.targetPosition}
            tagline={coverLetter.headline}
            color={color}
          />
        </CvSlot>
      </CvPart>

      <CvPart layoutDirection="horizontal" isExpanded>
        <CvSlot
          widthPercentage={33.333}
          isBorderRightVisible
          borderColor={color}
        >
          <Text>From to</Text>
        </CvSlot>

        <CvSlot widthPercentage={66.666}>
          <CvApplicationNarative
            gretting={coverLetter.greeting}
            structuredBodyText={coverLetter.body}
            closing={coverLetter.closing}
            signature={coverLetter.signature}
          />
        </CvSlot>
      </CvPart>
    </CvPage>
  );
}

export default CvCoverLetter;

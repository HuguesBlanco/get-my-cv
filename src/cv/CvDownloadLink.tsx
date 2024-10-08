import { PDFDownloadLink } from '@react-pdf/renderer';
import React from 'react';
import { Languages } from './types/cvTypes';
import { PdfDocumentElement } from './types/pdfTypes';

type CvDownloadLinkProps = {
  children: PdfDocumentElement;
  language: Languages;
};

function CvDownloadLink({
  language,
  children,
}: CvDownloadLinkProps): React.JSX.Element {
  const fileName = `hugues_blanco_alvarez_cv_${language}.pdf`;

  return (
    <PDFDownloadLink document={children} fileName={fileName}>
      {({ loading }: { loading: boolean }) =>
        loading ? 'Loading...' : 'Download CV'
      }
    </PDFDownloadLink>
  );
}

export default CvDownloadLink;

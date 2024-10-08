import { Font, Page, View } from '@react-pdf/renderer';
import sourceSansBoldURL from '../assets/fonts/SourceSans3-Bold.ttf';
import sourceSansLightURL from '../assets/fonts/SourceSans3-Light.ttf';
import sourceSansRegularURL from '../assets/fonts/SourceSans3-Regular.ttf';
import {
  PdfPageElement,
  PdfTextElement,
  PdfViewElement,
} from '../types/pdfTypes';

type CvPageProps = {
  children:
    | PdfViewElement
    | PdfViewElement[]
    | PdfTextElement
    | PdfTextElement[];
};

function CvPage({ children }: CvPageProps): PdfPageElement {
  const FONT_FAMILY = 'Source Sans 3';

  const isFontRegistred =
    Font.getRegisteredFontFamilies().includes(FONT_FAMILY);

  if (!isFontRegistred) {
    Font.register({
      family: FONT_FAMILY,
      fonts: [
        {
          src: sourceSansLightURL,
          fontStyle: 'normal',
          fontWeight: 'light',
        },
        {
          src: sourceSansRegularURL,
          fontStyle: 'normal',
          fontWeight: 'normal',
        },
        {
          src: sourceSansBoldURL,
          fontStyle: 'normal',
          fontWeight: 'bold',
        },
      ],
    });
  }

  return (
    <Page
      size="A4"
      // Note: It seems that applying the following styles to the <Document> instead of the <Page> causes some bugs with the font size.
      style={{
        fontFamily: FONT_FAMILY,
        fontSize: '9',
      }}
    >
      <View
        style={{
          marginTop: '8mm',
          marginLeft: '8mm',
          marginRight: '8mm',
          marginBottom: '2mm',
          flexGrow: 1,
        }}
      >
        {children}
      </View>
    </Page>
  );
}

export default CvPage;
